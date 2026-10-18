import Image from 'next/image'
import Link from "next/link";
import { LaTime } from "../../components/LaTime";
import { StatusPill } from "../../components/StatusPill";
import { TypewriterHeading } from "../../components/TypewriterHeading";
import { projectsData } from "../data";
import { GITHUB_URL, LINKEDIN_URL } from "../links";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "50+", label: "Features Shipped" },
  { value: "400+", label: "Code Reviews" },
  { value: "1M+", label: "Database Records" },
  { value: "100%", label: "Employer Confidence" },
];

const stack = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Svelte",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
];

const external = { target: "_blank", rel: "noopener noreferrer" };

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center min-h-[min(820px,92vh)]">
        <Image
          src="/la-backdrop-enhanced.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(10,22,51,0.94)_0%,rgba(10,22,51,0.78)_45%,rgba(10,22,51,0.35)_100%),linear-gradient(0deg,#0a1633_0%,rgba(10,22,51,0)_30%)]" />

        <div className="container-page relative py-24 grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-14 items-center">
          <div className="flex flex-col gap-7">
            <div className="flex flex-wrap gap-2">
              <StatusPill />
              <LaTime className="pill pill-outline" />
            </div>

            <TypewriterHeading
              className="heading text-[clamp(44px,6vw,80px)] leading-[1.04] text-white"
              lines={[
                { text: "Michael Buenrostro" },
                { text: "Full Stack Developer", className: "text-accent" },
              ]}
            />

            <div className="flex flex-wrap gap-3">
              <a href="#work" className="btn btn-primary">Projects</a>
            </div>

            <div className="flex flex-wrap gap-5 text-[15px] font-semibold">
              <a href={GITHUB_URL} {...external}>GitHub ↗</a>
              <a href={LINKEDIN_URL} {...external}>LinkedIn ↗</a>
            </div>
          </div>

          <div className="justify-self-center w-[min(360px,100%)]" data-aos="fade-up" data-aos-delay="200">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[999px_999px_32px_32px] border border-[rgba(185,211,240,0.25)] shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
              <Image
                src="/port-photo.jpg"
                alt="Michael Buenrostro"
                fill
                priority
                sizes="360px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container-page">
        {/* Stats */}
        <section className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 pt-6 pb-28">
          {stats.map((stat, i) => (
            <div key={stat.label} data-aos="fade-up" data-aos-delay={i * 100} className="bg-card rounded-[28px] p-7 flex flex-col gap-2">
              <span className="heading text-[44px] leading-none text-ink">{stat.value}</span>
              <span className="text-[15px] leading-[1.4] text-ink-body">{stat.label}</span>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section id="work" className="scroll-mt-24 flex flex-col gap-12 pb-28">
          <h2 className="heading text-[clamp(32px,4vw,48px)] leading-[1.1] text-white" data-aos="fade-up">Projects</h2>

          {projectsData.map((project) => (
            <article
              key={project.id}
              data-aos="fade-up"
              className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-10 items-center"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] bg-panel border border-[rgba(185,211,240,0.15)]">
                <Image
                  src={project.screenshot}
                  alt={`${project.name} screenshot`}
                  fill
                  sizes="(max-width: 860px) 100vw, 540px"
                  className="object-cover object-top"
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech.name} className="tag tag-filled">{tech.name}</span>
                  ))}
                </div>
                <h3 className="heading text-[30px] leading-[1.15] text-white">{project.name}</h3>
                <p className="text-base leading-[1.65] max-w-[50ch] text-secondary m-0">{project.summary}</p>
                <ul className="flex flex-col gap-1.5 text-[15px] leading-[1.5] text-secondary m-0 p-0 list-none">
                  {project.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="mt-[7px] w-1.5 h-1.5 shrink-0 rounded-full bg-success" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-5 text-[15px] font-semibold">
                  {project.demoUrl && <a href={project.demoUrl} {...external}>Demo ↗</a>}
                  {project.docsUrl && <a href={project.docsUrl} {...external}>Docs ↗</a>}
                  {project.githubUrl && <a href={project.githubUrl} {...external}>Source Code ↗</a>}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* About */}
        <section className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-12 pb-28" data-aos="fade-up">
          <h2 className="heading text-[clamp(32px,4vw,48px)] leading-[1.1] max-w-[14ch] text-white">About Me</h2>
          <div className="flex flex-col gap-5 text-[17px] leading-[1.65] text-secondary">
            <p className="m-0">
              I am a Full Stack Developer with over 4 years of experience building scalable, production-ready applications. My expertise lies in bridging the gap between complex logic and the high-impact results that drive business growth. I thrive at the intersection of clean architecture and purposeful problem-solving.
            </p>
            <p className="m-0">
              My primary focus is on the Frontend, where I specialize in crafting intuitive, high-performance interfaces. I believe a great product is defined by its User Experience. To me, code is successful only when it provides a frictionless journey for the user.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {stack.map((tech) => (
                <span key={tech} className="tag tag-outline">{tech}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="pb-16">
          <div data-aos="zoom-in-up" className="bg-card rounded-[48px] p-[clamp(32px,5vw,64px)] flex flex-col gap-5">
            <h2 className="heading text-[clamp(32px,4vw,48px)] leading-[1.1] max-w-[18ch] text-ink">
              Hiring a Full Stack Developer in LA or remote?
            </h2>
            <p className="text-[17px] leading-[1.6] max-w-[50ch] text-ink-body m-0">
              I usually reply within a day. Happy to walk through any project or do a technical screen.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-card-primary">Contact Me</Link>
              <a href={LINKEDIN_URL} {...external} className="btn btn-card-outline">Connect on LinkedIn</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
