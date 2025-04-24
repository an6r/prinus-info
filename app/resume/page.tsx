import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';
import "@/styles/resume.scss";

// Import images
import mongodb_logo from "../../public/companies/mongodb-logo.png";
import evernote_logo from "../../public/companies/evernote-logo.svg";
import epam_logo from "../../public/companies/epam-logo.png";
import general_logo from "../../public/companies/icons8-company.png";
import bsuir_logo from "../../public/companies/bsuir-logo.jpg";

const resumeData = [
    {
        title: "Senior Release Manager",
        company: "MongoDB",
        company_logo: mongodb_logo,
        location: "Remote",
        duration: "Jun 2023 – Feb 2025",
        bullets: [
            "Collaborated with the Server Engineering team to manage regular releases for MongoDB versions," +
            " including current and legacy versions.",
            "Improved internal release tools using Python to streamline releases and increase efficiency.",
            "Assessed the priority and severity of issues found internally and reported by support teams," +
            " collaborating with engineers to ensure prompt resolutions and a stable release cycle.",
            "Orchestrated collaborative sessions with DevOps teams to identify areas for improvement and established" +
            " a feedback loop that fostered a culture of continuous improvement, ultimately enhancing team" +
            " collaboration and release stability.",
            "Coordinated with Cloud, Support, and SDET teams to maintain release quality.",
            "Facilitated the release of major product versions in 2023-2024.",
            "Maintained and optimized the release process, enforcing best engineering practices to improve" +
            " engineering team performance.",
            "Mentored a colleague to enhance Python skills, fostering team growth and technical knowledge.",
            "Partnered with Engineering Directors and Technical Program Managers to ensure smooth and timely releases.",
            "Conducted funnel interviews for new release team members and helped ramp up engineers joining the" +
            " release team from other teams.",
        ]
    },
    {
        title: "Release Manager",
        company: "Evernote",
        company_logo: evernote_logo,
        location: "Redwood City, CA",
        duration: "Feb 2018 – Feb 2023",
        bullets: [
            "Maintained in-depth knowledge of Evernote desktop, mobile, and web app, platform and tools.",
            "Predicted complexities and challenges to proactively work with internal and external stakeholders for" +
            " mitigation.",
            "Led end-to-end technical program management for complex, cross-functional projects involving web and" +
            " mobile applications.",
            "Advocated for new tools and processes to improve release stability and automation.",
            "Utilized deep technical domain expertise to drive technical strategy, planning, and execution in" +
            " partnership with engineering teams.",
            "Introduced and supported Dogfooding, Beta, and General Audience release for different functional" +
            " features in desktop and mobile applications.",
            "Coordinated timely content delivery to market, ensuring high quality and transparency resulting in 70+" +
            " stable releases in 2021-2022.",
            "Set metrics and dashboards to monitor and assess the quality and stability of the new software release" +
            " to bring SLO to 99.5% from 97% before change.",
            "Reduced the number of release rollbacks by 73% in 2022 by designing a bug prioritization matrix for the" +
            " post cutover issues.",
            "Aggregated team processes by analyzing bottlenecks and implementing agile methodology resulting  in a" +
            " 30% reduction in product turnaround time.",
            "Facilitated and maintained strong communication channels among cross-functional teams, ensuring" +
            " efficient collaboration and timely resolution of issues.",
            "Administered and evaluated product roadmaps to streamline and prioritize QA and technical support" +
            " backlog tickets resulting in a 40% elimination of backlogged items.",
            "Led Evernote’s desktop app accessibility requirements implementation as a Program Manager.",
            "Managed a team of 10 onshore and offshore QAs in testing 8 software releases, ensuring timely delivery" +
            " and minimal errors.",
        ]
    },
    {
        title: "Lead Software Engineer",
        company: "EPAM Systems",
        company_logo: epam_logo,
        location: "SF Bay Area, CA",
        duration: "Jan 2014 – Feb 2018",
        bullets: [
            "Headed Global Assessment Committee and championed a training program to assist front-end departments in" +
            " learning accessibility basics and best principles.",
            "Supervised, managed, and supported a team of senior-level software engineers, assuring work meets" +
            " technical requirements and timely completion of projects for Goldman Sachs and Google.",
            "Continuously monitored project progress and made adjustments as needed to ensure successful completion.",
            "Designed an internal accessibility training program resulting in competence improvement of 70% across" +
            " front-end departments.",
        ]
    },
    {
        title: "Senior Software Engineer",
        company: "EPAM Systems",
        company_logo: epam_logo,
        location: "Minsk, Belarus",
        duration: "Jan 2011 – Feb 2014",
        bullets: [
            "Led a team of on-site and off-site developers to implement projects for international clients such as" +
            " NBC Universal, Sephora, TUI, OVUM, and The Cools.",
            "Represented EPAM management in meetings with client teams.",
            "Became SME on best practices for the web development available. Collaborated with the UX design team to" +
            " examine the existing projects to identify errors in markup, styles, and color schema.",
        ]
    },
    {
        title: "Front-end Developer/Content Manager",
        company: "CIM.by",
        company_logo: general_logo,
        location: "Minsk, Belarus",
        duration: "Jul 2009 – Mar 2011",
        bullets: [
            "Created pixel-perfect sites from scratch using HTML/CSS and Javascript.",
            "Supported PHP-based Content Management System (CMS).",
            "Managed content and products on the e-commerce sites.",
            "Produced promotion articles and newsletters.",
            "Improved site SEO and structure with development team collaboration."
        ]
    }
];

const education = {
    title: "Computer Systems & Networks",
    company: "Belarusian State University of Informatics and Radioelectronics",
    company_logo: bsuir_logo,
    location: "Minsk, Belarus",
    duration: "2006 – 2011",
    bullets: [],
};


const CompanyItem = ({title, company, location, duration, company_logo, bullets}:
                     { title: string; company: string; location: string; duration: string; company_logo: StaticImageData; bullets: Array<string> }) => {
    return (
        <div className="company-item">
            <div className="logo-column">
                <Image src={company_logo} alt={`${company} Logo`} className="company-logo"/>
            </div>
            <div className="content-column">
                <div className="entry-header">
                    <h3>{title}</h3>
                    <span className="company-name">{company} – {location}</span>
                    <span className="duration">{duration}</span>
                </div>
                {bullets.length > 0 && <ul className="entry-details">
                    {bullets.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                }
            </div>
        </div>
    );
};

const ResumeTimeline = () => {
    return (
        <section className="resume-container">
            <h1>Resume</h1>
            <section className="resume-intro">
                <p className="introduction">Experienced release manager with over 15 years of expertise in software engineering and release
                management. Skilled in identifying risks and resolving complex issues, designing and implementing
                effective solutions, and leading cross-functional teams through critical phases of the project lifecycle. Deep
                knowledge of software development life cycle processes and methodologies. Key achievements include
                enhancing release stability and automation, achieving a 73% reduction in rollbacks in 2022. Looking to
                apply this expertise in a dynamic role, contributing to both startup and enterprise application development.</p>
                <div className="pdf-download">
                    <Link href="../../public/documents/Maria+Prinus+Release+Manager.pdf" target="_blank" rel="noopener noreferrer">
                        <Image src="/icons8-pdf.png" alt="Download PDF" width={90} height={90} />
                        <span>Download my resume</span>
                    </Link>
                </div>
            </section>

            <h2>Professional Experience</h2>
            {resumeData.map((entry, key) => (
                <CompanyItem {...entry} key={key} />
            ))}

            <h2>Education</h2>
            <CompanyItem {...education} />
        </section>
    );
};

export default ResumeTimeline;
