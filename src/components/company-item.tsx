'use client';

import Image from 'next/image';

function CompanyItem({
    title,
    company,
    location,
    duration,
    company_logo,
    company_logo_height,
    bullets,
}: {
    title: string;
    company: string;
    location: string;
    duration: string;
    company_logo: string;
    company_logo_height: number;
    bullets: Array<string>;
}) {
    const clogo = '/companies/' + company_logo;

    return (
        <div className="company-item">
            <div className="logo-column">
                <Image
                    src={clogo}
                    alt={`${company} Logo`}
                    className="company-logo"
                    width={40}
                    height={company_logo_height}
                />
            </div>
            <div className="content-column">
                <div className="entry-header">
                    <h3>{title}</h3>
                    <span className="company-name">
                        {company} – {location}
                    </span>
                    <span className="duration">{duration}</span>
                </div>
                {bullets.length > 0 && (
                    <ul className="entry-details">
                        {bullets.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default CompanyItem;
