
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiTrendingUp,
  FiSearch,
  FiShare2,
  FiPenTool,
  FiTarget,
  FiFileText,
  FiMonitor,
  FiBarChart2,
  FiCheckCircle,
  FiCompass,
  FiLayers,
  FiActivity
} from "react-icons/fi";

import "../styles/Services.css";

const services = [
  {
    icon: FiTrendingUp,
    number: "01",
    title: "Digital Marketing Strategy",
    description:
      "Build a clear digital roadmap that connects your business goals with the right marketing channels and opportunities.",
    features: ["Marketing strategy", "Audience research", "Campaign planning"]
  },
  {
    icon: FiSearch,
    number: "02",
    title: "Search Engine Optimization",
    description:
      "Improve your website's search visibility and help potential customers discover your business online.",
    features: ["Keyword research", "On-page SEO", "Technical SEO"]
  },
  {
    icon: FiShare2,
    number: "03",
    title: "Social Media Marketing",
    description:
      "Build meaningful connections with your audience through engaging content and consistent social media campaigns.",
    features: ["Social media strategy", "Content planning", "Community engagement"]
  },
  {
    icon: FiPenTool,
    number: "04",
    title: "Branding & Creative Design",
    description:
      "Create a recognizable brand identity with thoughtful visuals and consistent creative communication.",
    features: ["Brand identity", "Graphic design", "Creative direction"]
  },
  {
    icon: FiTarget,
    number: "05",
    title: "Performance Marketing",
    description:
      "Plan targeted advertising campaigns focused on reaching relevant audiences and generating measurable results.",
    features: ["Paid advertising", "Campaign optimization", "Conversion tracking"]
  },
  {
    icon: FiFileText,
    number: "06",
    title: "Content Marketing",
    description:
      "Communicate your brand story through useful, relevant and engaging content that supports your marketing goals.",
    features: ["Content strategy", "Blog writing", "Website content"]
  },
  {
    icon: FiMonitor,
    number: "07",
    title: "Website Development",
    description:
      "Create responsive and user-friendly websites that present your business professionally across devices.",
    features: ["Business websites", "Responsive design", "Landing pages"]
  },
  {
    icon: FiBarChart2,
    number: "08",
    title: "Business Analytics",
    description:
      "Understand your marketing performance through organized reporting, useful insights and data-driven decisions.",
    features: ["Performance reports", "Data analysis", "Growth insights"]
  }
];

const process = [
  {
    icon: FiCompass,
    number: "01",
    title: "Discover",
    description: "We understand your business, audience, challenges and objectives."
  },
  {
    icon: FiLayers,
    number: "02",
    title: "Plan",
    description: "We develop a practical strategy aligned with your business goals."
  },
  {
    icon: FiActivity,
    number: "03",
    title: "Execute",
    description: "We put the strategy into action with focused marketing activities."
  },
  {
    icon: FiTrendingUp,
    number: "04",
    title: "Improve",
    description: "We review performance and identify opportunities for improvement."
  }
];

function Services() {
  return (
    <main className="services-page">

      {/* Hero */}
      <section className="services-hero">
        <div className="container services-hero-inner">
          <div className="services-hero-content">
            <span className="section-tag">WHAT WE DO</span>

            <h1>
              Digital Solutions That
              <span className="text-highlight"> Move Business Forward.</span>
            </h1>

            <p>
              From strategy to execution, we help businesses build a stronger
              digital presence, connect with their audience and explore new
              opportunities for growth.
            </p>

            <div className="services-hero-actions">
              <Link to="/contact" className="primary-btn">
                Discuss Your Project <FiArrowUpRight />
              </Link>
              <a href="#all-services" className="services-text-link">
                Explore Services <FiArrowUpRight />
              </a>
            </div>
          </div>

          <div className="services-hero-visual">
            <div className="services-visual-main">
              <div className="services-visual-top">
                <span className="services-visual-dot"></span>
                <span>Digital Growth Framework</span>
              </div>

              <div className="services-visual-icon">
                <FiTrendingUp />
              </div>

              <h3>Strategy. Creativity. Growth.</h3>
              <p>
                Connecting ideas, technology and marketing to create meaningful
                digital experiences.
              </p>

              <div className="services-visual-tags">
                <span>Strategy</span>
                <span>Marketing</span>
                <span>Analytics</span>
              </div>
            </div>

            <div className="services-floating-card services-floating-one">
              <FiTarget />
              <div>
                <strong>Goal Focused</strong>
                <span>Purposeful planning</span>
              </div>
            </div>

            <div className="services-floating-card services-floating-two">
              <FiCheckCircle />
              <div>
                <strong>Data Informed</strong>
                <span>Smarter decisions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services-list-section" id="all-services">
        <div className="container">
          <div className="section-heading-centered">
            <span className="section-tag">OUR EXPERTISE</span>
            <h2 className="section-title">
              Everything Your Business Needs to
              <span className="text-highlight"> Grow Digitally</span>
            </h2>
            <p className="section-subtitle">
              Explore our range of digital services designed to help your
              business build visibility, strengthen its brand and reach the
              right audience.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="service-detail-card" key={service.number}>
                  <div className="service-card-top">
                    <div className="service-detail-icon">
                      <Icon />
                    </div>
                    <span className="service-number">{service.number}</span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <ul className="service-feature-list">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <FiCheckCircle />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="service-card-link">
                    Discuss This Service <FiArrowUpRight />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section services-process-section">
        <div className="container">
          <div className="section-heading-centered">
            <span className="section-tag">HOW WE WORK</span>
            <h2 className="section-title">
              A Clear Process From
              <span className="text-highlight"> Idea to Execution</span>
            </h2>
            <p className="section-subtitle">
              A collaborative approach that keeps your business objectives
              at the center of every step.
            </p>
          </div>

          <div className="services-process-grid">
            {process.map((item) => {
              const Icon = item.icon;

              return (
                <div className="services-process-card" key={item.number}>
                  <span className="process-number">{item.number}</span>
                  <div className="process-icon">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section services-cta-section">
        <div className="container">
          <div className="services-cta">
            <div>
              <span className="section-tag">LET'S WORK TOGETHER</span>
              <h2>Have a Project in Mind?</h2>
              <p>
                Let's discuss your goals and find the right digital solutions
                for your business.
              </p>
            </div>

            <Link to="/contact" className="primary-btn services-cta-btn">
              Start a Conversation <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Services;
