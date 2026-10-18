import React from "react";
import { GITHUB_URL, LINKEDIN_URL } from "../src/links";

export const Footer = () => {
    return (
        <footer className="container-page flex flex-wrap justify-between gap-3 pt-8 pb-12 text-sm text-muted">
            <span>© {new Date().getFullYear()} Michael Buenrostro · Los Angeles, CA</span>
            <div className="flex gap-5">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    )
}
