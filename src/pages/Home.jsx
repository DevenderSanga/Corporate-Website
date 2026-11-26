
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiTrendingUp,
  FiTarget,
  FiBarChart2,
  FiPenTool,
  FiSearch,
  FiSmartphone,
  FiCheckCircle,
  FiUsers,
  FiAward,
  FiBriefcase,
  FiGlobe
} from "react-icons/fi";

import "../styles/Home.css";

const services = [
  {
    icon: <FiTrendingUp />,
    title: "Digital Marketing",
    description:
      "Grow your brand with strategic campaigns that attract the right audience and generate measurable results."
  },
  {
    icon: <FiSearch />,
    title: "SEO Optimization",
    description:
      "Improve your search visibility, attract organic traffic and help customers discover your business."
  },
  {
    icon: <FiPenTool />,
    title: "Creative Branding",
    description:
      "Build a memorable brand identity through thoughtful design, messaging and creative direction."
  },
  {
    icon: <FiSmartphone />,
    title: "Social Media Marketing",
    description:
      "Build meaningful connections and strengthen your online presence across social platforms."
  },
  {
    icon: <FiTarget />,
    title: "Performance Marketing",
    description:
      "Reach the right people with targeted advertising campaigns focused on conversions and growth."
  },
  {
    icon: <FiBarChart2 />,
    title: "Business Analytics",
    description:
      "Turn marketing data into useful insights that help you make smarter business decisions."
  }
];

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "30+", label: "Happy Clients" },
  { number: "5+", label: "Years of Experience" },
  { number: "95%", label: "Client Satisfaction" }
];

const projects = [
  {
    category: "Branding & Strategy",
    title: "Building a Strong Digital Identity",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85",
    number: "01"
  },
  {
    category: "Digital Marketing",
    title: "Driving Business Growth Online",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=85",
    number: "02"
  },
  {
    category: "Creative Campaigns",
    title: "Creating Meaningful Connections",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=85",
    number: "03"
  }
];

const reasons = [
  "Strategies tailored to your business goals",
  "Creative ideas backed by data",
  "Transparent communication and reporting",
  "Focus on long-term business growth"
];

function Home() {
  return (
    <main className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg-shape hero-shape-one"></div>
        <div className="hero-bg-shape hero-shape-two"></div>

        <div className="container hero-container">
          <div className="hero-content">

            <div className="hero-label">
              <span className="hero-label-dot"></span>
              YOUR PARTNER IN DIGITAL GROWTH
            </div>

            <h1>
              We Turn Your
              <span className="hero-highlight"> Vision </span>
              Into Digital
              <span className="hero-highlight"> Success.</span>
            </h1>

            <p className="hero-description">
              At R.K CONSULTANTS, we combine creativity, strategy and
              technology to help businesses build stronger brands,
              reach more customers and grow with confidence.
            </p>

            <div className="hero-buttons">
              <Link to="/contact" className="primary-btn hero-primary-btn">
                Let's Grow Together <FiArrowUpRight />
              </Link>

              <Link to="/services" className="hero-secondary-btn">
                Explore Our Services <FiArrowRight />
              </Link>
            </div>

            <div className="hero-trust">
              <div className="hero-trust-icon">
                <FiCheckCircle />
              </div>
              <div>
                <strong>Growth-focused solutions</strong>
                <span>Designed around your business</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-main">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000&q=90"
                alt="Creative digital marketing team collaborating"
              />

              <div className="hero-image-overlay">
                <span>CREATIVITY MEETS STRATEGY</span>
                <h3>Make Your Brand Matter.</h3>
              </div>
            </div>

            <div className="hero-floating-card hero-card-top">
              <div className="floating-icon">
                <FiTrendingUp />
              </div>
              <div>
                <strong>Smart Growth</strong>
                <span>Driven by strategy</span>
              </div>
            </div>

            <div className="hero-floating-card hero-card-bottom">
              <div className="floating-icon">
                <FiTarget />
              </div>
              <div>
                <strong>Better Results</strong>
                <span>Focused on your goals</span>
              </div>
            </div>

            <div className="hero-circle-decoration"></div>
          </div>
        </div>

        <div className="hero-bottom container">
          <span>STRATEGY</span>
          <span>CREATIVITY</span>
          <span>INNOVATION</span>
          <span>GROWTH</span>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="section intro-section">
        <div className="container intro-grid">

          <div className="intro-visual">
            <div className="intro-image">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=85"
                alt="Business professionals discussing marketing strategy"
              />
            </div>

            <div className="intro-experience-card">
              <FiAward />
              <strong>Driven by Excellence</strong>
              <span>Focused on meaningful business growth</span>
            </div>
          </div>

          <div className="intro-content">
            <span className="section-tag">WHO WE ARE</span>

            <h2 className="section-title">
              Helping Businesses
              <span className="text-highlight"> Move Forward.</span>
            </h2>

            <p>
              R.K CONSULTANTS is a digital marketing agency focused on
              helping businesses establish a powerful online presence.
              We believe every business has a unique story worth sharing.
            </p>

            <p>
              Through creative thinking, effective marketing strategies
              and a results-oriented approach, we help brands connect
              with their audiences and unlock new opportunities.
            </p>

            <div className="intro-features">
              <div><FiCheckCircle /> Client-focused approach</div>
              <div><FiCheckCircle /> Creative problem solving</div>
              <div><FiCheckCircle /> Strategic execution</div>
              <div><FiCheckCircle /> Continuous improvement</div>
            </div>

            <Link to="/about" className="primary-btn">
              Discover Our Story <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section services-section">
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-tag">WHAT WE DO</span>
              <h2 className="section-title">
                Solutions That
                <span className="text-highlight"> Drive Growth.</span>
              </h2>
            </div>

            <Link to="/services" className="text-link">
              View All Services <FiArrowUpRight />
            </Link>
          </div>

          <p className="section-description">
            From building your brand to expanding your digital reach,
            we provide solutions designed to move your business forward.
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>

                <span className="service-number">
                  0{index + 1}
                </span>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link to="/services" className="service-link">
                  Learn More <FiArrowUpRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section why-section">
        <div className="container why-grid">

          <div className="why-content">
            <span className="section-tag">WHY R.K CONSULTANTS</span>

            <h2 className="section-title">
              More Than Marketing.
              <span className="text-highlight"> A Growth Partner.</span>
            </h2>

            <p>
              We don't believe in one-size-fits-all marketing.
              Every business deserves a strategy that understands
              its audience, goals and opportunities.
            </p>

            <div className="why-list">
              {reasons.map((reason, index) => (
                <div className="why-list-item" key={index}>
                  <FiCheckCircle />
                  <span>{reason}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="primary-btn">
              Learn About Us <FiArrowUpRight />
            </Link>
          </div>

          <div className="why-visual">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=85"
              alt="Team collaborating on creative business solutions"
            />

            <div className="why-overlay-card">
              <FiUsers />
              <div>
                <strong>Built Around You</strong>
                <span>Your goals. Our commitment.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="section projects-section">
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-tag">OUR WORK</span>
              <h2 className="section-title">
                Ideas Into
                <span className="text-highlight"> Impact.</span>
              </h2>
            </div>

            <Link to="/projects" className="text-link">
              Explore Projects <FiArrowUpRight />
            </Link>
          </div>

          <p className="section-description">
            Explore how strategy, creativity and digital expertise
            come together to create meaningful business outcomes.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.number}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <span className="project-number">{project.number}</span>
                  <Link to="/projects" className="project-arrow">
                    <FiArrowUpRight />
                  </Link>
                </div>

                <div className="project-info">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">
              <FiGlobe />
            </div>

            <span>READY TO TAKE THE NEXT STEP?</span>

            <h2>
              Your Next Big Move
              <br />
              Starts Right Here.
            </h2>

            <p>
              Let's discuss your goals and build a digital strategy
              that helps your business reach its full potential.
            </p>

            <Link to="/contact" className="cta-button">
              Start a Conversation <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;
