export default function Home(){
    const industries = [
  {
    tag: "Sports, Media, Entertainment",
    title: "Increase Fan Engagement",
    desc: "through real-time fan interactions with chat, notifications, alerts, and more",
  },
  {
    tag: "Digital Health",
    title: "Enhance patient care",
    desc: "with user status, full-featured chat and push notifications, all with HIPAA compliance",
  },
  {
    tag: "Digital Commerce",
    title: "Elevate buyer experiences",
    desc: "with instant user status, chat, and automated push notifications",
  },
  {
    tag: "Gaming",
    title: "Improve retention and engagement",
    desc: "through in-game updates, chat, and all types of player interactions",
  },
  {
    tag: "Contact & Control Centers",
    title: "Boost customer delight",
    desc: "through real-time collaboration and service notifications and events",
  },
  {
    tag: "Transportation & Logistics",
    title: "Optimize driver logistics",
    desc: "for trucking telemetry, driver communication, and process improvement",
  },
];
    return(
        <>
            <div className="app">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            The market leading platform <br />
            for real-time interactive apps
          </h1>

          <p>
            The PubNub promise: real-time innovation <br />
            Efficiently and effectively build, manage, and monetize engaging
            apps that captivate and delight users
          </p>

          <div className="hero-buttons">
            <button className="btn-primaryi large">Start Building</button>
            <button className="btn-outlinei large">Contact Sales</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="mock-card">Live App Preview</div>
        </div>
      </section>

      {/* Trust and Feature */}
      <section className="trust-section">

      {/* Feature Box */}
      <div className="feature-box">
        <div className="feature">
          <h3>Unleash creativity</h3>
          <p>
            Focus on value creation leveraging real-time APIs, SDKs and
            software to accelerate development and management while
            retaining control and flexibility.
          </p>
          <a href="/">Read the Docs →</a>
        </div>

        <div className="feature">
          <h3>Scale infinitely</h3>
          <p>
            Scalable infrastructure that provides flexible options to reach
            millions of concurrent users and devices safely, securely,
            and with no additional fees.
          </p>
          <a href="/">Explore the platform →</a>
        </div>

        <div className="feature">
          <h3>Surpass your KPIs</h3>
          <p>
            Increase engagement and retention with real-time data analysis
            and automated decisioning for continuous optimization.
          </p>
          <a href="/">Discover Illuminate →</a>
        </div>
      </div>
    </section>

    {/* Powering global real-time interactive experiences in 40+ Industries */}
    <section className="industry-section">
      <h2>
        Powering global real-time interactive experiences in{" "}
        <span>40+ Industries</span>
      </h2>

      <div className="industry-grid">
        {industries.map((item, index) => (
          <div className="industry-card" key={index}>
            <div className="image-placeholder">{item.tag}</div>

            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href="/">Read their story →</a>
            </div>
          </div>
        ))}
      </div>

      <div className="center-btn">
        <button className="btn-primary">Discover more</button>
      </div>
    </section>

    {/* RealTime Features */}
<section className="rt-section">
  <div className="rt-grid">

    {[
      "In-App Messaging",
      "Presence",
      "PubNub Chat",
      "Live Analytics and Decisioning",
      "Live Data Sync",
      "Mobile Push Notifications",
    ].map((title, i) => (
      <div className="rt-card glow-card" key={i}>
        <div className="rt-image"></div>

        <h3>{title}</h3>
        <p>
          Real-time infrastructure to power engagement, analytics,
          automation, and messaging at scale.
        </p>

        <a href="/">Learn more →</a>
      </div>
    ))}

  </div>
</section>

{/* PUBNUB BY THE NUMBERS */}
<section className="numbers-section">
  <div className="numbers-container">

    {/* Left */}
    <div className="numbers-left">
      <h2>
        PubNub <br />
        by the Numbers
      </h2>
    </div>

    {/* Right */}
    <div className="numbers-right">

      <div className="number-card">
        <h3>
          <span className="highlight">#1</span> World’s Largest Event-Driven Network
        </h3>
        <p>
          Globally-distributed edge messaging for IoT, Mobile, Server, Web
        </p>
      </div>

      <div className="number-card">
        <h3>
          <span className="highlight">&lt;30ms</span>
        </h3>
        <p>Latency with global delivery and unlimited concurrency</p>
      </div>

      <div className="number-card">
        <h3>
          <span className="highlight">2K+</span>
        </h3>
        <p>Customers · 800M Devices · 5T API Transactions/Month</p>
      </div>

      <div className="number-card">
        <h3>
          <span className="highlight">99.999%</span>
        </h3>
        <p>
          Best in class SLA and compliance: SOC2, HIPAA, GDPR, CCPA, ISO 27001
        </p>
      </div>

      <div className="number-card">
        <h3>
          <span className="highlight">&gt;60</span>
        </h3>
        <p>Patent Claims Granted</p>
      </div>

    </div>
  </div>
</section>


{/* CALL TO ACTION SECTION */}
<section className="cta-section">
  <div className="cta-container">

    {/* Left Big Card */}
    <div className="cta-card cta-left">
      <h3>Start building</h3>
      <p className="cta-subtitle">
        Get started building real-time apps now
      </p>

      <ul className="cta-list">
        <li>✓ Always free for up to 200 MAUs</li>
        <li>✓ No Credit Card Required</li>
        <li>✓ Every PubNub SDK available</li>
        <li>✓ Complete Feature Access to 100+ Integrations</li>
      </ul>

      <a href="/" className="cta-link">Learn more →</a>
    </div>

    {/* Right Side */}
    <div className="cta-right">

      <div className="cta-card cta-expert">
        <div className="cta-content">
          <h3>Talk to an expert</h3>
          <p>
            Let us share with you industry best practices and how we
            can help you accelerate your real-time application and growth.
          </p>
          <button className="btn-primary">Contact us</button>
        </div>

        <div className="cta-image"></div>
      </div>

      <div className="cta-card cta-pricing">
        <h3>See our pricing</h3>
        <p>
          Almost limitless pricing options from simple pay-as-you-go to
          custom models to best match your business needs and growth objectives.
        </p>
        <a href="/" className="cta-link">Learn more →</a>
      </div>

    </div>
  </div>
</section>


    </div>
        </>
    )
}