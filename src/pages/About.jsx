
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiTarget,
  FiEye,
  FiHeart,
  FiUsers,
  FiAward,
  FiTrendingUp,
  FiCheckCircle,
  FiZap,
  FiShield,
  FiMessageCircle,
  FiStar
} from "react-icons/fi";

import "../styles/About.css";

const values = [
  {
    icon: <FiHeart />,
    title: "Client First",
    description:
      "We put our clients at the center of every decision and build solutions around their business goals."
  },
  {
    icon: <FiZap />,
    title: "Creative Thinking",
    description:
      "We approach challenges with fresh ideas, thoughtful strategies and innovative solutions."
  },
  {
    icon: <FiShield />,
    title: "Integrity",
    description:
      "We believe in honest communication, transparency and building lasting professional relationships."
  },
  {
    icon: <FiTrendingUp />,
    title: "Continuous Growth",
    description:
      "We keep learning, improving and adapting to help businesses move forward in a changing digital world."
  }
];

const advantages = [
  "Strategies aligned with your business objectives",
  "Creative and customized marketing solutions",
  "Clear communication throughout every project",
  "Focus on measurable business outcomes",
  "Commitment to quality and continuous improvement",
  "A collaborative approach to long-term growth"
];

const team = [
  {
    name: "Strategy & Planning",
    role: "Building the right direction",
    icon: <FiTarget />
  },
  {
    name: "Creative & Design",
    role: "Making brands memorable",
    icon: <FiStar />
  },
  {
    name: "Marketing & Growth",
    role: "Connecting brands with people",
    icon: <FiTrendingUp />
  }
];

function About() {
  return (
    <main className="about-page">

      {/* PAGE HERO */}
      <section className="about-hero">
        <div className="container about-hero-container">
          <div className="about-hero-content">
            <span className="section-tag">ABOUT R.K CONSULTANTS</span>

            <h1>
              Ideas With Purpose.
              <span> Strategies That Inspire Growth.</span>
            </h1>

            <p>
              We help businesses build their digital presence,
              communicate their value and create meaningful
              connections with their audiences.
            </p>

            <div className="about-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <strong>About Us</strong>
            </div>
          </div>

          <div className="about-hero-visual">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1000&q=85"
              alt="Modern creative business workspace"
            />

            <div className="about-hero-badge">
              <FiAward />
              <div>
                <strong>Purpose Driven</strong>
                <span>Focused on your growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="section about-story-section">
        <div className="container about-story-grid">

          <div className="about-story-visual">
            <div className="story-image-main">
              <img
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=900&q=85"
                alt="Professionals collaborating around a table"
              />
            </div>

            <div className="story-image-small">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=85"
                alt="Team working together"
              />
            </div>

            <div className="story-decoration"></div>
          </div>

          <div className="about-story-content">
            <span className="section-tag">OUR STORY</span>

            <h2 className="section-title">
              Helping Brands Find Their
              <span className="text-highlight"> Digital Voice.</span>
            </h2>

            <p>
              At R.K CONSULTANTS, we believe that successful marketing
              starts with understanding people, businesses and their
              unique ambitions.
            </p>

            <p>
              Our approach brings together strategic thinking,
              creative communication and digital marketing to help
              businesses strengthen their presence and reach the
              audiences that matter.
            </p>

            <p>
              We aim to build meaningful partnerships, understand
              every client's requirements and deliver thoughtful
              solutions that support sustainable growth.
            </p>

            <Link to="/services" className="primary-btn about-story-btn">
              Explore Our Services <FiArrowUpRight />
            </Link>
          </div>

        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="section mission-section">
        <div className="container">

          <div className="about-section-heading">
            <span className="section-tag">OUR PURPOSE</span>
            <h2 className="section-title">
              What Drives <span className="text-highlight">Us Forward.</span>
            </h2>
            <p>
              Our purpose guides the way we think, work and create
              value for the businesses we serve.
            </p>
          </div>

          <div className="mission-grid">

            <div className="mission-card">
              <div className="mission-icon">
                <FiTarget />
              </div>

              <span>01 / OUR MISSION</span>

              <h3>Empowering Businesses Through Digital Excellence.</h3>

              <p>
                Our mission is to help businesses communicate better,
                connect with their audiences and unlock opportunities
                through strategic and creative digital marketing.
              </p>
            </div>

            <div className="mission-card vision-card">
              <div className="mission-icon">
                <FiEye />
              </div>

              <span>02 / OUR VISION</span>

              <h3>Creating Meaningful and Lasting Digital Impact.</h3>

              <p>
                Our vision is to become a trusted growth partner for
                businesses by delivering thoughtful strategies,
                creative solutions and valuable digital experiences.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section values-section">
        <div className="container">

          <div className="about-section-heading">
            <span className="section-tag">WHAT WE BELIEVE IN</span>
            <h2 className="section-title">
              Our Core <span className="text-highlight">Values.</span>
            </h2>
            <p>
              The principles that shape our work and relationships
              with every client.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={index}>
                <div className="value-icon">{value.icon}</div>

                <span className="value-number">
                  0{index + 1}
                </span>

                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section about-advantages-section">
        <div className="container about-advantages-grid">

          <div className="advantages-content">
            <span className="section-tag">WHY WORK WITH US</span>

            <h2 className="section-title">
              A Thoughtful Approach to
              <span className="text-highlight"> Your Success.</span>
            </h2>

            <p>
              Every business is different. That's why we take the
              time to understand your goals and develop solutions
              that match your needs.
            </p>

            <div className="advantages-list">
              {advantages.map((item, index) => (
                <div className="advantage-item" key={index}>
                  <FiCheckCircle />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="primary-btn">
              Work With Us <FiArrowUpRight />
            </Link>
          </div>

          <div className="advantages-visual">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=85"
              alt="Business team planning and collaborating"
            />

            <div className="advantages-floating-card">
              <FiUsers />
              <div>
                <strong>Partnership Matters</strong>
                <span>Growing together through collaboration</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section approach-section">
        <div className="container">

          <div className="about-section-heading">
            <span className="section-tag">HOW WE WORK</span>
            <h2 className="section-title">
              From Understanding to
              <span className="text-highlight"> Impact.</span>
            </h2>
            <p>
              A simple, collaborative approach to creating
              meaningful marketing solutions.
            </p>
          </div>

          <div className="approach-grid">
            <div className="approach-card">
              <span>01</span>
              <FiMessageCircle />
              <h3>Discover</h3>
              <p>
                We understand your business, audience,
                challenges and objectives.
              </p>
            </div>

            <div className="approach-card">
              <span>02</span>
              <FiTarget />
              <h3>Strategize</h3>
              <p>
                We identify opportunities and plan
                solutions around your goals.
              </p>
            </div>

            <div className="approach-card">
              <span>03</span>
              <FiZap />
              <h3>Create</h3>
              <p>
                We bring ideas to life through creative
                campaigns and execution.
              </p>
            </div>

            <div className="approach-card">
              <span>04</span>
              <FiTrendingUp />
              <h3>Improve</h3>
              <p>
                We review performance and identify
                opportunities for improvement.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* TEAM / EXPERTISE */}
      <section className="section expertise-section">
        <div className="container">

          <div className="about-section-heading">
            <span className="section-tag">OUR EXPERTISE</span>
            <h2 className="section-title">
              Different Skills.
              <span className="text-highlight"> One Direction.</span>
            </h2>
            <p>
              Our service approach combines different areas of
              expertise to support your digital growth.
            </p>
          </div>

          <div className="expertise-grid">
            {team.map((item, index) => (
              <div className="expertise-card" key={index}>
                <div className="expertise-icon">
                  {item.icon}
                </div>

                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta-section">
        <div className="container">
          <div className="about-cta-content">
            <span>LET'S BUILD SOMETHING MEANINGFUL</span>

            <h2>
              Your Business Deserves
              <br />
              a Stronger Digital Future.
            </h2>

            <p>
              Have a vision for your business? Let's discuss
              how we can help bring it to life.
            </p>

            <Link to="/contact" className="about-cta-button">
              Get in Touch <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default About;
