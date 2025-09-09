'use client';

import type { AboutContentData } from '@/app/types';

import TextBlock from '@/components/text-block';

import maria_about from '@/public/photos/maria-prinus-about.jpg';
// import cats_about from '@/public/photos/cats-about.jpg';

function AboutContent({
    data,
    imageAlts,
}: {
    data: AboutContentData;
    imageAlts: { maria: string; cats: string };
}) {
    return (
        <>
            <TextBlock
                header={data.introduction.header}
                imageSrc={maria_about}
                imageAlt={imageAlts.maria}
                textList={data.introduction.text}
            />
        </>
    );
}

export default AboutContent;
