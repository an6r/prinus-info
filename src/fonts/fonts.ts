import { Nunito } from 'next/font/google';
import localFont from 'next/font/local';

const nunito = Nunito({
    weight: '300',
    subsets: ['latin', 'cyrillic-ext'],
    preload: true,
    fallback: ['san-serif'],
    variable: '--font-nunito',
});

const geom = localFont({
    src: '../fonts/geom-graphic-regular.woff',
    weight: '400',
    variable: '--font-geom',
});

export { geom, nunito };
