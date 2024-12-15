import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge class names.
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
