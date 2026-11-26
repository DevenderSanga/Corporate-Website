
import { useState } from "react";
import { Link } from "react-router-dom";

import {
    FiArrowUpRight,
    FiExternalLink,
    FiLayers,
    FiTrendingUp
} from "react-icons/fi";

import "../styles/Projects.css";

const fallbackImage =
    "https://placehold.co/900x600/png?text=Project+Image";

const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = fallbackImage;
};

const projects = [
    {
        id: 1,
        title: "Brand Identity & Digital Presence",
        category: "Branding",
        type: "Branding",
        description:
            "A sample branding concept focused on building a consistent visual identity and digital presence.",
        image:
            "https://images.unsplash.com/photo-1580032408885-888260e73cea?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 2,
        title: "Organic Search Strategy",
        category: "SEO",
        type: "SEO",
        description:
            "A sample search optimization project covering keyword planning, website structure and content improvements.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        title: "Social Media Campaign",
        category: "Social Media",
        type: "Social Media",
        description:
            "A creative campaign concept designed to support audience engagement and consistent brand communication.",
        image:
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&auto=format&fit=crop&q=80"
    },
    {
        id: 4,
        title: "Business Website Concept",
        category: "Web Design",
        type: "Web Design",
        description:
            "A modern website concept focused on responsive layouts, clear navigation and user-friendly experiences.",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop&q=80"
    },
    {
        id: 5,
        title: "Digital Advertising Concept",
        category: "Social Media",
        type: "Social Media",
        description:
            "A sample advertising concept with audience-focused messaging and campaign creative direction.",
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=80"
    },
    {
        id: 6,
        title: "Creative Brand Campaign",
        category: "Branding",
        type: "Branding",
        description:
            "A sample creative direction project combining visual storytelling and consistent brand messaging.",
        image:
            "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=900&auto=format&fit=crop&q=80"
    }
];

const categories = [
    "All",
    "SEO",
    "Social Media",
    "Branding",
    "Web Design"
];

function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter(
                (project) => project.category === activeCategory
            );

    return (
        <main className="projects-page">

            {/* Hero */}
            <section className="projects-hero">
                <div className="container projects-hero-inner">

                    <div className="projects-hero-content">
                        <span className="section-tag">OUR PORTFOLIO</span>

                        <h1>
                            Ideas Turned Into
                            <span className="text-highlight">
                                {" "}Digital Experiences.
                            </span>
                        </h1>

                        <p>
                            Explore sample project concepts that demonstrate our approach
                            to digital strategy, creative communication and online
                            experiences.
                        </p>

                        <Link to="/contact" className="primary-btn">
                            Start Your Project <FiArrowUpRight />
                        </Link>
                    </div>

                    <div className="projects-hero-visual">
                        <div className="projects-hero-image">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=85"
                                alt="Digital marketing analytics workspace"
                                onError={handleImageError}
                            />
                        </div>

                        <div className="projects-hero-floating">
                            <FiLayers />
                            <div>
                                <strong>Creative Thinking</strong>
                                <span>Ideas with purpose</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Portfolio */}
            <section className="section projects-portfolio-section">
                <div className="container">

                    <div className="section-heading-centered">
                        <span className="section-tag">SELECTED WORK</span>

                        <h2 className="section-title">
                            Explore Our
                            <span className="text-highlight">
                                {" "}Project Concepts
                            </span>
                        </h2>

                        <p className="section-subtitle">
                            Browse our illustrative portfolio concepts by service category.
                            Replace these examples with verified client projects before
                            publishing the website.
                        </p>
                    </div>

                    <div className="projects-filter">
                        {categories.map((category) => (
                            <button
                                type="button"
                                key={category}
                                className={
                                    activeCategory === category
                                        ? "project-filter-btn active"
                                        : "project-filter-btn"
                                }
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="projects-grid">
                        {filteredProjects.map((project) => (
                            <article className="project-card" key={project.id}>

                                <div className="project-image-wrap">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        decoding="async"
                                        onError={handleImageError}
                                    />

                                    <span className="project-category">
                                        {project.category}
                                    </span>

                                    <div className="project-image-overlay">
                                        <span>
                                            <FiExternalLink />
                                        </span>
                                    </div>
                                </div>

                                <div className="project-card-content">
                                    <span className="project-card-type">
                                        {project.type} Concept
                                    </span>

                                    <h3>{project.title}</h3>

                                    <p>{project.description}</p>

                                    <Link to="/contact" className="project-view-link">
                                        Discuss a Similar Project <FiArrowUpRight />
                                    </Link>
                                </div>

                            </article>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <p className="projects-empty">
                            No projects found in this category.
                        </p>
                    )}

                </div>
            </section>

            {/* Approach */}
            <section className="section projects-approach-section">
                <div className="container projects-approach-inner">

                    <div className="projects-approach-icon">
                        <FiTrendingUp />
                    </div>

                    <div className="projects-approach-content">
                        <span className="section-tag">OUR APPROACH</span>

                        <h2>
                            Every Project Starts With
                            <span className="text-highlight">
                                {" "}Understanding Your Goals.
                            </span>
                        </h2>

                        <p>
                            We believe good digital work begins with listening, planning and
                            understanding what matters to your business. Our approach
                            focuses on meaningful ideas and practical execution.
                        </p>
                    </div>

                    <Link to="/contact" className="primary-btn">
                        Work With Us <FiArrowUpRight />
                    </Link>

                </div>
            </section>

            {/* CTA */}
            <section className="section projects-cta-section">
                <div className="container">

                    <div className="projects-cta">
                        <div>
                            <span className="section-tag">HAVE AN IDEA?</span>

                            <h2>Let's Create Something Meaningful.</h2>

                            <p>
                                Tell us about your business goals and the project you have
                                in mind. Let's explore the possibilities together.
                            </p>
                        </div>

                        <Link
                            to="/contact"
                            className="primary-btn projects-cta-btn"
                        >
                            Contact Our Team <FiArrowUpRight />
                        </Link>
                    </div>

                </div>
            </section>

        </main>
    );
}

export default Projects;
