import Section from "./Section";

export default function About() {
    return (
        <section className="relative overflow-hidden">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                    backgroundImage:
                        "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />
            <Section  id="about" index="01" eyebrow="About" title="Who I am" >
                <div className="relative  pl-8 ">

                    <div className="relative mb-10 last:mb-0">
                        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                        </div>
                        <div className="text-lg  text-ink/70">
                            <p className="mt-3 max-w-5xl">
                                I'm a Computer Science undergraduate at North South University with a passion for building software that solves real-world problems. My programming journey started with learning Python, where I developed a strong understanding of programming fundamentals before expanding into web development, databases, and backend engineering. Since then, I've enjoyed continuously challenging myself by building increasingly complex projects and learning through hands-on experience.
                            </p>

                            <p className="mt-3 max-w-5xl">
                                I love turning ideas into practical applications. Whether it's developing REST APIs, building full-stack web applications, designing database schemas, or exploring machine learning concepts, I enjoy projects that require problem-solving, critical thinking, and continuous learning. Every project is an opportunity to improve my engineering skills and discover better ways to build reliable software.
                            </p>

                            <p className="mt-3 max-w-5xl">
                                I love turning ideas into practical applications. Whether it's developing REST APIs, building full-stack web applications, designing database schemas, or exploring machine learning concepts, I enjoy projects that require problem-solving, critical thinking, and continuous learning. Every project is an opportunity to improve my engineering skills and discover better ways to build reliable software.
                            </p>

                            <p className="mt-3 max-w-5xl">
                                Outside of programming, I enjoy sharing my learning journey, documenting what I build, and connecting with other developers. I believe that learning in public not only helps reinforce my own understanding but also contributes to the developer community. I'm naturally curious, enjoy tackling difficult challenges, and always look for opportunities to grow both technically and personally.
                            </p>

                            <p className="mt-3 max-w-5xl">
                                My long-term goal is to become a Backend and AI Engineer who builds intelligent, scalable, and impactful software. I'm always excited to collaborate, learn from experienced professionals, and contribute to meaningful projects that make a difference.
                            </p>
                        </div>

                    </div>

                </div>
            </Section>
        </section>

    );
}
