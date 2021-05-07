import React from 'react';

function AboutPage() {
    return (
        <div className="about">
            <h2 className="h2-about">AboutMe</h2>
            <img className="image-about" src={process.env.PUBLIC_URL + "/images/image4.png"} />
            <section className="info-about">
                <h4>Software Developer | Open to job opportunities | React | JavaScript | HTML | CSS | C# | SQL | Mongo DB</h4>
                <p>I am a PR holder and actively looking for a frontend developer role. As a computer science graduate I'am ready
                to work on technologies, continue self learning programming languages and start looking at this
                new and exciting field in a more serious way.</p>
                <p> To achieve my goal I am due to Graduate from General Assembly's Software Engineering Flex
                Immersive in May, and I have a Masters of Information Security and a Bachelors of Computer
                Science. Through my studies I have learned and gained good knowledge on Java Script, React JS,
                C#, HTML5, CSS3, Bootstrap, NodeJS and REST API. Also have a knowledge on Git Hub, BitBucket.
                Ready to work immediately and ready to relocate anywhere. Always enthusiastic to learn new
                    things and latest technologies.</p>
                <p> More than this I bring across a skill set honed through working in child care,
                I can handle any pressure, all stakeholders, work collaboratively, quickly and patiently
                        and am ready to work hard to create strong code and great products.</p>
            </section>
        </div>
    );

}

export { AboutPage };