'use client';

const TextBlock = ({
    header,
    textList,
    style = 'pink',
}: {
    header: string;
    textList: Array<string>;
    style?: string;
}) => {
    return (
        <section className={`text-block section-${style}`}>
            <h2>{header}</h2>
            <details className="text">
                <summary>Show more</summary>
                {textList.map((val, key) => (
                    <p key={key}>{val}</p>
                ))}
            </details>
        </section>
    );
};

export default TextBlock;
