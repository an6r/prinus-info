import Image from 'next/image';
import "@/styles/about.scss";

import maria_about from "../../public/photos/maria-prinus-about.jpg";
import cats_about from "../../public/photos/cats-about.jpg";

const Page = () => {
    return (
        <section className="about-page">
            <h1>About page</h1>

            <div className="about-container">
                <div className="flex-section right-image">
                    <div className="text">
                        <p>Hi! I’m Maria Prinus — a Release Manager, former front-end engineer, and a lifelong learner with
                            a passion for technology history, and design.</p>
                        <p>Born and raised in Minsk, Belarus, I earned a Specialist degree (equivalent to a Master's) in
                            Computer Systems and Networks from the Belarusian State University of Informatics and
                            Radioelectronics (BSUIR) in 2011. My career began in web development, focusing on building user
                            interfaces and eventually leading front-end teams at companies like EPAM Systems.</p>
                        <p>After moving to the United States in 2014 and settling in Silicon Valley, I continued my work in
                            tech. Around 2019, I transitioned into release management, driven by a focus on making software
                            delivery smoother, more stable, and more predictable.</p>
                    </div>
                    <Image width={300} src={maria_about} alt="Maria Prinus About Page" className="image"/>
                </div>

                <div className="flex-section left-image">
                    <Image width={500} src={cats_about} alt="Cats on About Page" className="image"/>
                    <div className="text">
                        <p>Over the years, working at companies such as Evernote and MongoDB, I have grown from a developer to
                            a Senior Release Manager. I specialize in designing robust release processes, enhancing
                            automation, and fostering collaboration across teams to deliver high-quality software reliably
                            and on schedule.</p>
                        <p>But there’s more to me than just tech!</p>
                        <p>When I’m not managing releases, you might find me relaxing with my three cats — Linus, Sophie,
                            and Toby — often surrounded by stacks of books in English, Russian, Belarusian, and Ukrainian. I
                            have a deep love for genealogy and spend considerable time building my family tree while
                            exploring the rich history of Eastern Europe. I’m also passionate about interior design,
                            particularly enjoying DIY furniture restoration and creating cozy, vintage-inspired living
                            spaces.</p>
                        <p>I believe strongly in the principle of continuous improvement, applying it both to the systems I
                            manage and my own life.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
