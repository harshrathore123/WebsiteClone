import './ServiceChat.css';
export default function ServiceChat(){
    return(
        <>
        <section className="accelerate-section">
      {/* Background floating UI elements */}
      <div className="bg-ui ui-1"></div>
      <div className="bg-ui ui-2"></div>
      <div className="bg-ui ui-3"></div>
      <div className="bg-ui ui-4"></div>

      <div className="accelerate-content">
        <h2>
          Accelerate Time to Market With <br />
          Uncompromising Scale and Control
        </h2>

        <p>
          PubNub gives your team the tools to launch high-performance chat
          rapidly, manage complexity as you grow, and eliminate the
          infrastructure overhead.
        </p>

        <div className="accelerate-actions">
          <button className="btn-primary">Start Building</button>
          <button className="btn-outline-light">Contact Sales</button>
        </div>
      </div>
    </section>

       <section className="chat-infra">
      <div className="chat-infra-inner">

        {/* Heading */}
        <h2>
          Launch Faster with Production-Ready Chat <br />
          Infrastructure
        </h2>

        <p className="chat-infra-subtitle">
          Skip the boilerplate and build fast, reliable chat with a backend
          that lets you focus on core functionality.
        </p>

        {/* Cards */}
        <div className="chat-infra-grid">

          {/* Card 1 */}
          <div className="chat-card">
            <h3>Simple APIs, SDKs & Quickstarts</h3>
            <p>
              Build your MVP fast with simple SDKs for JavaScript, Kotlin,
              Swift, Unity, and more. Our Quickstarts help you validate ideas
              and iterate in minutes.
            </p>

            <div className="icon-grid">
              {["JS", "Swift", "Kotlin", "Unity", "Go", "Java"].map((item, i) => (
                <div key={i} className="icon-pill">{item}</div>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="chat-card">
            <h3>Live Chat Building Blocks</h3>
            <p>
              Leverage production-ready features like typing indicators,
              presence, message history, read receipts, reactions, and threads
              — all available out of the box in our SDKs.
            </p>

            <div className="ui-placeholder">
              <div className="ui-row"></div>
              <div className="ui-row"></div>
              <div className="ui-row short"></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="chat-card">
            <h3>Push Notifications</h3>
            <p>
              A straightforward push system with support for FCM, APNs, and
              fallback delivery—built to handle the majority of use cases
              without added complexity.
            </p>

            <div className="notification-box">
              <span className="notif-title">Ana sends a message</span>
              <span className="notif-text">Hi team! 👋</span>
            </div>
          </div>

        </div>
      </div>
    </section>

        <section className="ops-section">
      <div className="ops-container">

        {/* LEFT CONTENT */}
        <div className="ops-left">
          <div className="ops-icon">⚙️</div>
          <h2>Operational Control at Scale</h2>
          <p>
            Simplify the complexity of running secure, reliable chat at scale.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="ops-right">

          {/* Top Card */}
          <div className="ops-card large">
            <div className="ops-ui-tags">
              <span>Filter abusive language 🚩</span>
              <span>Manage restrictions</span>
              <span>Channel management ↗</span>
            </div>

            <h3>Moderation & Role-Based Permissions</h3>
            <p>
              Enforce chat policies with profanity filtering, user bans,
              message deletion, fine-grained access control, and security
              features built for compliance and user safety.
            </p>
          </div>

          {/* Bottom Cards */}
          <div className="ops-bottom-grid">

            <div className="ops-card">
              <div className="ops-matrix"></div>

              <h3>Real-Time Channel Monitoring</h3>
              <p>
                Inspect live message flow, monitor user activity, and debug
                issues in real time to stay ahead of disruptions.
              </p>
            </div>

            <div className="ops-card">
              <div className="ops-chat-preview">
                <div className="chat-bubble left">Hi Sara!</div>
                <div className="chat-bubble left">Ready for review soon? 💻</div>
                <div className="chat-bubble right">•••</div>
              </div>

              <h3>Presence & Typing Indicators</h3>
              <p>
                Drive real-time engagement with online status, session tracking,
                and typing events—all without extra engineering effort.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>

     <section className="scale-section">
      <div className="scale-inner">

        {/* Heading */}
        <h2>Scale Without Re-Engineering</h2>
        <p className="scale-subtitle">
          PubNub is built for scale, so you don’t have to re-architect when your
          user base grows or your requirements evolve.
        </p>

        {/* Cards */}
        <div className="scale-grid">

          {/* Card 1 */}
          <div className="scale-card">
            <h3>Integrate with AI, Analytics & Business Systems</h3>
            <p>
              Use PubNub Functions or third-party APIs to plug in bots, CRMs,
              analytics platforms, transcription, and translation tools.
            </p>

            <div className="scale-visual form-ui">
              <div className="form-line"></div>
              <div className="form-line short"></div>
              <div className="form-line"></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="scale-card">
            <h3>Personalised, Context-Aware Chat</h3>
            <p>
              Create dynamic, AI-native chat experiences with workflows that
              adapt based on user behavior and real-time context.
            </p>

            <div className="scale-visual ai-ui">
              <div className="ai-core">AI</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="scale-card">
            <h3>Infrastructure You Don’t Have to Think About</h3>
            <p>
              No sharding, no message brokers, no server maintenance—just a
              globally distributed pub/sub network trusted by mission-critical
              apps.
            </p>

            <div className="scale-visual globe-ui"></div>
          </div>

        </div>
      </div>
    </section>

     <section className="why-section">
      <div className="why-inner">

        {/* WHY PUBNUB */}
        <div className="why-card">
          <h2>Why PubNub?</h2>

          <div className="why-grid">
            <div className="why-item">
              <span className="why-icon">⚡</span>
              <p>
                Accelerate development with prebuilt SDKs, components,
                and integrations
              </p>
            </div>

            <div className="why-item">
              <span className="why-icon">📈</span>
              <p>
                Confidently scale from MVP to millions of concurrent users
              </p>
            </div>

            <div className="why-item">
              <span className="why-icon">🛡️</span>
              <p>
                Maintain control with built-in moderation, observability,
                and permissions
              </p>
            </div>

            <div className="why-item">
              <span className="why-icon">⚙️</span>
              <p>
                Simplify operations with built-in security, moderation,
                and observability
              </p>
            </div>

            <div className="why-item">
              <span className="why-icon">📚</span>
              <p>
                Backed by demos, tutorials, and a proven track record
                powering chat at global scale
              </p>
            </div>
          </div>
        </div>

        {/* SPEAK TO EXPERT */}
        <div className="expert-card">
          <div className="expert-content">
            <h2>Speak to an Expert</h2>
            <p>
              Whether you build apps for digital healthcare, fintech,
              ecommerce, or the gaming industry, now’s the time to
              enhance your user experience with real-time chat.
              Connect with our experts to learn how you can build
              secure, scalable, and interactive chat experiences.
            </p>

            <div className="expert-actions">
              <button className="btn-primary">Contact Sales</button>
              <button className="btn-outline">Get Started</button>
            </div>
          </div>

          {/* Right Image */}
        <div className="contact-image">
          {/* replace with real image if needed */}
          <img
            src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd"
            alt="Headset"
          />
        </div>
        </div>

      </div>
    </section>
        </>
    )
}