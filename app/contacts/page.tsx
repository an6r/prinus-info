import Image from "next/image";
import Link from 'next/link';
import type { Metadata } from "next";
import "@/styles/contacts.scss";


export const metadata: Metadata = {
    title: "Contact Maria Prinus",
    description: "Reach out to Maria Prinus",
}

/*const FormHandler = () => {
    return (
        <form action="/contacts" method="post">
        <div className="input-item">
            <label htmlFor="name">Your Name</label>
            <input id="name" name="name" type="text" />
        </div>
        <div className="input-item">
            <label htmlFor="email">Your Email*</label>
            <input required id="email" name="email" type="email" />
        </div>
        <div className="input-item">
            <label htmlFor="message">Message*</label>
            <textarea required id="message" name="message" rows={5} />
        </div>

        <div className="buttons">
            <button type="submit" className="submit">
                Send Message
            </button>
        </div>
    </form>
    );
};*/

const Page = ()=> {
    return (
        <section className="contacts">
            <h1>Get in Touch</h1>
            <p className="introduction">
                I'd love to hear from you — whether it's about a job opportunity, a genealogy mystery, or just to share cat photos 🐾. Feel free to reach out!
            </p>
            <ul className="list-of-contacts">
                <li className="email">
                    <Image src="/icons8-email.png" alt="Email" width={40} height={40} />
                    <span>Email: <Link href="mailto:maria@prinus.info">maria@prinus.info</Link></span>
                </li>
                <li className="linkedin">
                    <Image src="/icons8-linkedin.png" alt="LinkedIn Logo" width={40} height={40} />
                    <span>
                        LinkedIn: <Link href="https://www.linkedin.com/in/mariaprinus/" target="_blank" rel="noopener
                        noreferrer">linkedin.com/in/mariaprinus</Link>
                    </span>
                </li>
                <li className="instagram">
                    <Image src="/icons8-instagram.png" alt="Instagram Logo" width={40} height={40} />
                    <span>
                        Instagram (personal): <Link href="https://www.instagram.com/an6r" target="_blank" rel="noopener noreferrer">@an6r</Link>
                    </span>
                </li>
                <li className="instagram cat">
                    <Image src="/icons8-instagram.png" alt="Instagram Logo" width={40} height={40} />
                    <span>
                        Instagram (cats): <Link href="https://www.instagram.com/linusandsophieandtoby/" target="_blank" rel="noopener noreferrer">@linusandsophieandtoby</Link>
                    </span>
                </li>
            </ul>

            {/*}
            <h3>Or send me a message right here</h3>

            <FormHandler />*/}
        </section>
    );
};

export default Page;
