import { Nunito } from 'next/font/google';
import localFont from 'next/font/local';

const nunito = Nunito({
    weight: '300',
    preload: true,
    fallback: ['san-serif'],
});

const geom = localFont({
    src: '../fonts/geom-graphic-regular.woff',
});

export { geom, nunito };
