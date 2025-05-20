'use client';

import Image from 'next/image';

import maria_about from '@/public/photos/maria-prinus-about.jpg';
import cats_about from '@/public/photos/cats-about.jpg';

interface AboutContentData {
    introduction: {
        header: string;
        text: Array<string>;
    };
    experience: {
        header: string;
        text: Array<string>;
    };
    personal: {
        header: string;
        text: Array<string>;
    };
    site: {
        header: string;
        text: Array<string>;
        special: {
            p0: string;
            p1: string;
            p2: string;
        };
    };
}

function TextBlock({
    header,
    textList,
}: {
    header: string;
    textList: Array<string>;
}) {
    return (
        <article className="section">
            <h2>{header}</h2>
            <div className="text">
                {textList.map((val, key) => (
                    <p key={key}>{val}</p>
                ))}
            </div>
        </article>
    );
}

function AboutContent({
    data,
    imageAlts,
}: {
    data: AboutContentData;
    imageAlts: { maria: string; cats: string };
}) {
    return (
        <div className="about-container">
            <div className="text-image-container">
                <div className="image">
                    <Image
                        width={300}
                        src={maria_about}
                        alt={imageAlts.maria}
                    />
                </div>
                <TextBlock
                    header={data.introduction.header}
                    textList={data.introduction.text}
                />
            </div>

            <TextBlock
                header={data.experience.header}
                textList={data.experience.text}
            />

            <div className="text-image-container">
                <TextBlock
                    header={data.personal.header}
                    textList={data.personal.text}
                />
                <div className="image">
                    <Image
                        width={500}
                        height={394}
                        src={cats_about}
                        alt={imageAlts.cats}
                    />
                </div>
            </div>

            <TextBlock header={data.site.header} textList={data.site.text} />
            <ul className="special">
                <li>{data.site.special.p0}</li>
                <li>{data.site.special.p1}</li>
                <li>{data.site.special.p2}</li>
            </ul>
        </div>
    );
}

export default AboutContent;
