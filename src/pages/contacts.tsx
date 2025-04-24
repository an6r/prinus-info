import Link from 'next/link';
import "@/styles/contacts.scss";

const FormHandler = () => {
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
};

const Contacts = ()=> {
    return (
        <section className="contacts">
            <h1>Get in Touch</h1>
            <p className="introduction">
                I'd love to hear from you — whether it's about a job opportunity, a genealogy mystery, or just to share cat photos 🐾. Feel free to reach out!
            </p>
            <ul className="list-of-contacts">
                <li className="email">
                    Email: <Link href="mailto:maria@prinus.info">maria@prinus.info</Link>
                </li>
                <li className="linkedin">
                    LinkedIn: <Link href="https://www.linkedin.com/in/mariaprinus/" target="_blank" rel="noopener noreferrer">linkedin.com/in/mariaprinus</Link>
                </li>
                <li className="instagram">
                    Instagram (personal): <Link href="https://www.instagram.com/an6r" target="_blank" rel="noopener noreferrer">@an6r</Link>
                </li>
                <li className="instagram cat">
                    Instagram (cats): <Link href="https://www.instagram.com/linusandsophieandtoby/" target="_blank" rel="noopener noreferrer">@linusandsophieandtoby</Link>
                </li>
            </ul>

            <h3>Or send me a message right here</h3>

            <FormHandler />
        </section>
    );
};

export default Contacts;
