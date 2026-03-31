import { Caveat } from 'next/font/google';
import { Inter } from "next/font/google";

export const caveat = Caveat({
    subsets: ['latin'],
    variable: '--font-caveat',
});

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['400', '500', '600', '700', '800', '900'],
});