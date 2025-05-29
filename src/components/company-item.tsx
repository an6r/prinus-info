'use client';

import Image from 'next/image';
import { CompanyItemProps } from '@/app/types';

function CompanyItem({
    title,
    company,
    location,
    duration,
    company_logo,
    company_logo_height,
    bullets = [],
}: CompanyItemProps) {
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
                        <strong>{company}</strong> – {location}
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
