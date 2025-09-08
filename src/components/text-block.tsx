'use client';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

import { geom } from '@/fonts';
import '@/styles/text-block.scss';

const TextBlock = ({
    header,
    imageSrc,
    imageAlt,
    textList,
    style = 'pink',
}: {
    header: string;
    imageSrc: StaticImageData;
    imageAlt: string;
    textList: Array<string>;
    style?: string;
}) => {
    return (
        <article className={`text-block section-${style}`}>
            <h2 className={geom.className}>{header}</h2>
            <Image src={imageSrc} alt={imageAlt} width={150} />
            <details className="text">
                <summary>Show more</summary>
                {textList.map((val, key) => (
                    <p key={key}>{val}</p>
                ))}
            </details>
        </article>
    );
};

export default TextBlock;
