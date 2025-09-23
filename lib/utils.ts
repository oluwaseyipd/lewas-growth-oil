// Utility for merging class names (shadcn/ui requirement)
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names conditionally and with Tailwind support.
 * @param inputs - class values
 * @returns merged className string
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
