import './Resources.css';
export default function Resources(){
      const values = [
    {
      title: "Earn Customer Loyalty",
      desc: "Design compelling products and deliver exceptional customer experiences.",
      icon: "⭐",
    },
    {
      title: "Passion for Innovation",
      desc: "Seek out better, efficient, and more elegant ways to solve problems.",
      icon: "💡",
    },
    {
      title: "Bias for Action",
      desc: "You progress by doing. Analysis only gets you so far.",
      icon: "⚙️",
    },
    {
      title: "Recognize Excellence",
      desc: "Excellence is achieved when perfection is traded for the art of the possible, and victory is achieved.",
      icon: "🎉",
    },
    {
      title: "Point Positive",
      desc: "Paint a picture of how the world will look when a problem is resolved.",
      icon: "👍",
    },
    {
      title: "Dialogue. Document. Digest.",
      desc: "Speak up, codify what others need to know, and consume what's been codified by others.",
      icon: "📦",
    },
  ];
    return(
        <>
       <section className="careers-hero">
      <div className="careers-hero-inner">

        {/* LEFT CONTENT */}
        <div className="careers-content">
          <span className="careers-badge">CAREERS</span>

          <h1>
            Transform the human <br /> experience with us
          </h1>

          <p>
            At PubNub, we want to make remote interactions as good as they are
            in the real world, if not better. It’s why brands like Logitech,
            PocketGems, and athenahealth, plus game developers,
            hackathon-winning high schoolers, and more, rely on PubNub to power
            next-generation innovation.
          </p>

          <p>
            At its core, PubNub is a single platform for building, managing,
            and optimizing real-time interactive experiences in any app,
            regardless of purpose, scale, or complexity.
          </p>

          <p className="careers-cta">
            Ready to create the future of remote interactions with us?
            <strong> Join the team!</strong>
          </p>
        </div>


      </div>
    </section> 

  <section className="core-values">
      <h2>Core Values</h2>

      <div className="values-grid">
        {values.map((item, index) => (
          <div className="value-card" key={index}>
            <div className="value-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>  

     <section className="careers-section">
      {/* BENEFITS */}
      <div className="benefits-wrapper">
        <h2>More than one reason to join us!</h2>

        <div className="benefits-grid">
          <div className="benefit">
            <span className="check">✔</span>
            <div>
              <h4>Employee Stock Option Plan</h4>
              <p>We want our employees to be stakeholders.</p>
            </div>
          </div>

          <div className="benefit">
            <span className="check">✔</span>
            <div>
              <h4>Health Plans & Other Benefits</h4>
              <p>
                PubNub pays the majority of costs for health plans with
                competitive benefits options.
              </p>
            </div>
          </div>

          <div className="benefit">
            <span className="check">✔</span>
            <div>
              <h4>Flexible Time Off</h4>
              <p>R&R is important to us, take it when you need it.</p>
            </div>
          </div>

          <div className="benefit">
            <span className="check">✔</span>
            <div>
              <h4>Wellness/Fitness Program</h4>
              <p>
                Wellness means happy people. Monthly fitness allowance to keep
                you healthy.
              </p>
            </div>
          </div>

          <div className="benefit">
            <span className="check">✔</span>
            <div>
              <h4>Hackathons</h4>
              <p>
                We create space for teams to explore new and exciting ideas that
                solve real problems.
              </p>
            </div>
          </div>

          <div className="benefit">
            <span className="check">✔</span>
            <div>
              <h4>Developers Community Meetups</h4>
              <p>
                We've built a social space to connect both internally and with
                passionate developers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* OPEN POSITIONS */}
      <div className="positions-wrapper">
        <h2>Open positions</h2>

        <div className="position-card">
          <span>Engineering</span>
          <strong>Senior Software Engineer</strong>
          <span className="location">Poland - Remote</span>
        </div>

        <div className="position-card">
          <span>Sales</span>
          <strong>Sales Development Representative</strong>
          <span className="location">Bengaluru, India</span>
        </div>
      </div>
    </section>
        </>
    )
}