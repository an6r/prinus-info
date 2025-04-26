import '../../src/styles/blog-preview.scss';

function BlogItems() {
    return (
        <section className="blog-preview">
            <h2>What I’ve Been Writing About</h2>
            <div className="blog-cards">
                <div className="card">
                    <h3>Release Tips for New Managers</h3>
                    <p>
                        Quick insights and lessons from my experience in release
                        management...
                    </p>
                    <a href="/blog.html" className="read-more">
                        Read more
                    </a>
                </div>
                <div className="card">
                    <h3>Genealogy Discoveries</h3>
                    <p>
                        How I traced my roots back to Prussy and uncovered lost
                        family stories...
                    </p>
                    <a href="/blog.html" className="read-more">
                        Read more
                    </a>
                </div>
                <div className="card">
                    <h3>Life with 3 Cats</h3>
                    <p>
                        Meet Linus, Sophie, and Toby — the furry part of my
                        team.
                    </p>
                    <a href="/blog.html" className="read-more">
                        Read more
                    </a>
                </div>
            </div>
            <div className="tags">
                <span>#release</span>
                <span>#genealogy</span>
                <span>#cats</span>
            </div>
        </section>
    );
}

export default BlogItems;
