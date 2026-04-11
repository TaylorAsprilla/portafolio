"use client";

import { motion } from "framer-motion";
import { useCurrency } from "./currency-provider";
import { cn } from "@/lib/utils";

export function CurrencyToggle() {
  const { currency, toggleCurrency } = useCurrency();

  return (
    <motion.button
      onClick={toggleCurrency}
      className="glass glass-hover flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span
        className={cn(
          "transition-colors",
          currency === "USD" ? "text-primary" : "text-muted-foreground"
        )}
      >
        USD
      </span>
      <div className="relative h-5 w-9 rounded-full bg-primary/20">
        <motion.div
          className="absolute top-0.5 h-4 w-4 rounded-full bg-primary"
          animate={{ x: currency === "USD" ? 2 : 18 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
      <span
        className={cn(
          "transition-colors",
          currency === "COP" ? "text-primary" : "text-muted-foreground"
        )}
      >
        COP
      </span>
    </motion.button>
  );
}
