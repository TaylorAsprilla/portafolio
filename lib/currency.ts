import type { Currency, Price, PriceConfig } from "@/types";
import { siteConfig } from "@/data/config";

/**
 * Convierte un monto de una moneda a otra
 */
export function convertCurrency(
  amount: number,
  from: Currency,
  to: Currency,
  rate: number = siteConfig.exchangeRate
): number {
  if (from === to) return amount;

  if (from === "USD" && to === "COP") {
    return amount * rate;
  }

  if (from === "COP" && to === "USD") {
    return amount / rate;
  }

  return amount;
}

/**
 * Formatea un precio según la moneda
 */
export function formatPrice(price: Price): string {
  const { amount, currency, isRange, isCustomQuote } = price;

  if (isCustomQuote) {
    return "Cotización personalizada";
  }

  const formatted = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: currency === "COP" ? 0 : 0,
    maximumFractionDigits: currency === "COP" ? 0 : 0,
  }).format(amount);

  return isRange ? `Desde ${formatted}` : formatted;
}

/**
 * Obtiene un precio en la moneda deseada a partir de una configuración base
 */
export function getPrice(config: PriceConfig, targetCurrency: Currency): Price {
  const { baseAmount, baseCurrency, isRange, isCustomQuote } = config;

  const amount = convertCurrency(baseAmount, baseCurrency, targetCurrency);

  return {
    amount,
    currency: targetCurrency,
    isRange,
    isCustomQuote,
  };
}

/**
 * Formatea directamente desde una configuración de precio
 */
export function formatPriceFromConfig(config: PriceConfig, currency: Currency): string {
  const price = getPrice(config, currency);
  return formatPrice(price);
}

/**
 * Obtiene el símbolo de la moneda
 */
export function getCurrencySymbol(currency: Currency): string {
  return currency === "USD" ? "$" : "$";
}

/**
 * Obtiene el nombre de la moneda
 */
export function getCurrencyName(currency: Currency): string {
  return currency === "USD" ? "Dólares (USD)" : "Pesos (COP)";
}
