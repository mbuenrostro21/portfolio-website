'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LaTime } from "../../../components/LaTime";
import { StatusPill } from "../../../components/StatusPill";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "../../links";

type Status = "idle" | "sending" | "sent" | "error";

const external = { target: "_blank", rel: "noopener noreferrer" };
const labelClass = "flex flex-col gap-2 text-sm font-semibold text-ink-body";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setStatus(response.ok ? "sent" : "error");
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  }

  const isSending = status === "sending";

  return (
    <section className="relative flex items-center min-h-[calc(100vh-160px)]">
      <Image
        src="/palm-trees-deep.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(10,22,51,0.94)_0%,rgba(10,22,51,0.8)_50%,rgba(10,22,51,0.45)_100%),linear-gradient(0deg,#0a1633_0%,rgba(10,22,51,0)_30%)]" />

      <div className="container-page relative py-24 grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-14 items-start">
        <div className="flex flex-col gap-7">
          <StatusPill />
          <h1 className="heading text-[clamp(44px,5.5vw,72px)] leading-[1.04] text-white">
            <span className="block">Let’s talk about</span>
            <span className="block text-accent">your team.</span>
          </h1>
          <p className="text-lg leading-[1.6] max-w-[44ch] text-secondary m-0">
            Hiring for a frontend or full stack role? Send a note and I’ll reply within a day.
          </p>
          <div className="flex flex-col gap-3.5 text-base text-secondary">
            <LaTime />
            <span>In person in LA, or remote</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={LINKEDIN_URL} {...external} className="btn btn-sm btn-outline">LinkedIn ↗</a>
            <a href={GITHUB_URL} {...external} className="btn btn-sm btn-outline">GitHub ↗</a>
            <a href={RESUME_URL} {...external} className="btn btn-sm btn-outline">Resume ↗</a>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="150" className="bg-card rounded-[40px] p-[clamp(28px,4vw,44px)] shadow-[0_24px_60px_rgba(0,0,0,0.4)] text-navy">
          {status === "sent" ? (
            <div className="flex flex-col gap-4 py-6">
              <h2 className="heading text-[30px] leading-[1.15] text-ink">Thanks, message sent.</h2>
              <p className="text-base leading-[1.6] text-ink-body m-0">I’ll get back to you within a day.</p>
              <Link href="/" className="btn btn-sm btn-card-outline self-start px-[22px] py-3">Back to home</Link>
            </div>
          ) : (
            <form className="flex flex-col gap-[18px]" onSubmit={handleSubmit}>
              <h2 className="heading text-[30px] leading-[1.15] text-ink mb-1.5">Send a message</h2>
              <label className={labelClass}>
                Name
                <input className="field" type="text" name="name" placeholder="Your name" disabled={isSending} required />
              </label>
              <label className={labelClass}>
                Work email
                <input className="field" type="email" name="email" placeholder="you@company.com" disabled={isSending} required />
              </label>
              <label className={labelClass}>
                Message
                <textarea className="field" name="message" rows={5} placeholder="The role, the team, and a good time to talk" disabled={isSending} required />
              </label>
              {status === "error" && (
                <p className="text-[15px] text-[#7a1f1f] m-0" role="alert">
                  Something went wrong sending your message. Please try again.
                </p>
              )}
              <button type="submit" className="btn btn-card-primary self-start mt-1 px-7" disabled={isSending}>
                {isSending ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
