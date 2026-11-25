import './PhotoProject.css'
import headshot from "../assets/Headshot.png";
import headshot_edit from "../assets/Headshot_Edit.png";
import aesthetic from "../assets/Aesthetic.png";
import aesthetic_edit from "../assets/Aesthetic_Edit.png";
import passion from "../assets/Passion.jpg";
import passion_edit from "../assets/Passion_Edit.png";
import { useEffect, useState } from "react";

const photoProjects = [
  {
    number: "01",
    title: "Concrete\nPoetry",
    type: "Architecture / 2025",
    text: "A study of repetition, shadow, and the quiet drama found in the built environment.",
    before: headshot,
    after: headshot_edit,
    alt: "Geometric modern building from the Concrete Poetry series",
  },
  {
    number: "02",
    title: "Color\nStudies",
    type: "Editorial / 2024",
    text: "An expressive fashion story exploring personal style as a language of joy and defiance.",
    before: aesthetic,
    after: aesthetic_edit,
    alt: "Expressive fashion portrait from the Color Studies series",
  },
  {
    number: "03",
    title: "Edge of\nWater",
    type: "Documentary / 2024",
    text: "Small rituals and wide horizons from a fishing community at the edge of the Atlantic.",
    before: passion,
    after: passion_edit,
    alt: "Atlantic coastal landscape from the Edge of Water series",
  },
];

function PhotoStory({ project }: { project: (typeof photoProjects)[number] }) {
  const [position, setPosition] = useState(50);
  const title = project.title.replace("\n", " ");
  const updatePosition = (clientX: number, element: HTMLDivElement) => {
    const { left, width } = element.getBoundingClientRect();
    setPosition(Math.max(0, Math.min(100, ((clientX - left) / width) * 100)));
  };

  return (
    <article className="photo-story">
      <div className="story-number">{project.number}</div>
      <div className="story-slider">
        <div
          className="story-image comparison"
          role="slider"
          tabIndex={0}
          aria-label={`${title}: compare before and after`}
          aria-orientation="horizontal"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)}% before, ${100 - Math.round(position)}% after`}
          onPointerDown={(event) => {
            if (!event.isPrimary || event.button !== 0) return;
            event.currentTarget.focus({ preventScroll: true });
            event.currentTarget.setPointerCapture(event.pointerId);
            updatePosition(event.clientX, event.currentTarget);
          }}
          onPointerMove={(event) => {
            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
              updatePosition(event.clientX, event.currentTarget);
            }
          }}
          onPointerUp={(event) => {
            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
              event.currentTarget.releasePointerCapture(event.pointerId);
            }
          }}
          onKeyDown={(event) => {
            const step = event.shiftKey ? 10 : 1;
            const changes: Record<string, number> = {
              ArrowLeft: -step,
              ArrowDown: -step,
              ArrowRight: step,
              ArrowUp: step,
              PageDown: -10,
              PageUp: 10,
            };
            if (event.key === "Home" || event.key === "End") {
              event.preventDefault();
              setPosition(event.key === "Home" ? 0 : 100);
            } else if (event.key in changes) {
              event.preventDefault();
              setPosition((current) => Math.max(0, Math.min(100, current + changes[event.key])));
            }
          }}
        >
          <div className="comparison-layer" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
            <img
              src={project.after}
              alt={`${project.alt}, after editing`}
              loading="lazy"
              draggable={false}
            />
            <span className="comparison-label after-label">After</span>
          </div>
          <div className="comparison-layer" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
            {/* Sample treatment until separate original and edited files are supplied. */}
            <img
              className="comparison-before"
              src={project.before}
              alt={`${project.alt}, sample before treatment`}
              loading="lazy"
              draggable={false}
            />
            <span className="comparison-label before-label">Before</span>
          </div>
          <div className="comparison-divider" style={{ left: `${position}%` }} aria-hidden="true">
            <span className="comparison-handle">
              ‹<span />›
            </span>
          </div>
        </div>
        <p className="comparison-hint">
          Drag to compare <span>Before / After</span>
        </p>
      </div>
      <div className="story-copy">
        <p className="eyebrow">{project.type}</p>
        <h2>
          {project.title.split("\n").map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p>{project.text}</p>
      </div>
    </article>
  );
}

function Photography() {
  return (
    <div className="page inner-page">
      <header className="page-header">
          <span>Portfolio</span>
          <span>Based in Limerick, IE</span>
        </header>
      <section className="inner-intro">
        <p className="eyebrow">Selected series</p>
        <h1>
          Stories in
          <br/>still frames.
        </h1>
        <p className="intro-copy">
          Observational images shaped by color, honest light, and the details that make a place feel
          alive.
        </p>
      </section>
      <div className="photo-projects">
        {photoProjects.map((project) => (
          <PhotoStory key={project.number} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Photography;