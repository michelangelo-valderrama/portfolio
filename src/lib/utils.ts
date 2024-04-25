import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function translateArr(arr: any[], steps: number = 0) {
	const left = arr.slice(0, steps)
	const right = arr.slice(steps)
	return right.concat(left)
}

export const $ = <T extends HTMLElement>(s: string) =>
	document.querySelector<T>(s)!

export const $$ = <T extends HTMLElement>(s: string) =>
	document.querySelectorAll<T>(s)!
