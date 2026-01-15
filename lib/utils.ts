import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function randomColor(alpha = 0.7) {
  const r = Math.floor(Math.random() * 180 + 40);
  const g = Math.floor(Math.random() * 180 + 40);
  const b = Math.floor(Math.random() * 180 + 40);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
