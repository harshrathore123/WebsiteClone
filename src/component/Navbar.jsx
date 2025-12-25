import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">pubnub</Link>
      </div>

      <ul className="nav-links">
        {/* PLATFORM WITH DROPDOWN */}
        <li className="nav-item platform-item">
          Platform

          <div className="platform-dropdown">
            <div className="dropdown-inner">

              {/* LEFT CARD */}
              <div className="dropdown-left">
                <h4>Platform Overview</h4>
                <p>Your platform for interactive experiences</p>
                <Link to="/platform/core-services">
                  Explore our platform →
                </Link>
              </div>

              {/* RIGHT CONTENT */}
              <div className="dropdown-right">
                <div className="dropdown-col">
                  <Link
                    to="/platform/core-services"
                    className="dropdown-item"
                  >
                    <strong>Core Services</strong>
                    <span>Real-time communication with low-latency</span>
                  </Link>

                  <div className="dropdown-item">
                    <strong>Global Network</strong>
                    <span>Secure, scalable infrastructure</span>
                  </div>

                  <div className="dropdown-item">
                    <strong>Decision Intelligence</strong>
                    <span>Power decisions with real-time intelligence</span>
                  </div>

                  <div className="dropdown-item">
                    <strong>Illuminate</strong>
                    <span>Turn live user data into results</span>
                  </div>

                  <div className="dropdown-item">
                    <strong>Insights</strong>
                    <span>Visibility into real-time app performance</span>
                  </div>
                </div>

                <div className="dropdown-col">
                  <div className="dropdown-item">
                    <strong>Integrations</strong>
                    <span>Best-in-class third-party services</span>
                  </div>

                  <div className="dropdown-item">
                    <strong>Generative AI</strong>
                    <span>Build AI-native real-time apps</span>
                  </div>

                  <div className="dropdown-item">
                    <strong>MCP Server</strong>
                    <span>Unlock real-time code with AI</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </li>

        {/* SERVICE WITH DROPDOWN */}
        <li className="nav-item services-item">
  Services

  <div className="services-dropdown">
    <div className="services-inner">

      {/* LEFT: BY USE CASE */}
      <div className="services-left">
        <p className="services-title">BY USE CASE</p>

        <Link className="service-row active">
          <div>
            <strong>Live Audience Engagement</strong>
            <span>From live events to social workouts</span>
          </div>
        </Link>

        <Link className="service-row" to="/service/chat">
          <div>
            <strong>Chat</strong>
            <span>Provide chat experiences your users need</span>
          </div>
        </Link>

        <Link className="service-row">
          <div>
            <strong>Multi-User Collaboration</strong>
            <span>Bring the team together</span>
          </div>
        </Link>

        <Link className="service-row">
          <div>
            <strong>IoT Device Control</strong>
            <span>Build and manage IoT platforms</span>
          </div>
        </Link>

        <Link className="service-row">
          <div>
            <strong>Real-Time Workflows</strong>
            <span>Stream data. Orchestrate actions</span>
          </div>
        </Link>

        <Link className="service-row">
          <div>
            <strong>Geolocation & Dispatch</strong>
            <span>Track fleets in real time</span>
          </div>
        </Link>

        <Link className="service-row">
          <div>
            <strong>Edge Messaging</strong>
            <span>Never worry about latency again</span>
          </div>
        </Link>

        <Link className="service-row">
          <div>
            <strong>Event-Driven Architecture</strong>
            <span>Launch faster with events</span>
          </div>
        </Link>

        <Link className="service-row">
          <div>
            <strong>LiveOps</strong>
            <span>Real-time decisions, zero lag</span>
          </div>
        </Link>

        <Link className="service-row">
          <div>
            <strong>Gamification</strong>
            <span>Drive engagement in real time</span>
          </div>
        </Link>

        <Link className="service-row">
          <div>
            <strong>Auto-Moderation</strong>
            <span>AI-powered filtering</span>
          </div>
        </Link>

        <Link className="service-row">
          <div>
            <strong>App Optimization</strong>
            <span>Maximize efficiency</span>
          </div>
        </Link>
      </div>

      {/* RIGHT: BY INDUSTRY */}
      <div className="services-right">
        <p className="services-title">BY INDUSTRY</p>

        <Link className="industry-row">Sports, Media & Entertainment</Link>
        <Link className="industry-row">Digital Healthcare</Link>
        <Link className="industry-row">iGaming, Betting & Casino</Link>
        <Link className="industry-row">Games</Link>
        <Link className="industry-row">eCommerce</Link>
        <Link className="industry-row">FinTech</Link>
        <Link className="industry-row">Transport, Delivery & Logistics</Link>
        <Link className="industry-row">Call Centers & Customer Care</Link>
        <Link className="industry-row">Social & Lifestyle</Link>
        <Link className="industry-row">Enterprise SaaS</Link>
      </div>

    </div>
  </div>
</li>

        <li className="nav-item">
  <Link to="/price/pricing" className="nav-link">
    Pricing
  </Link>
</li>
        {/* DEVELOPER WITH DROPDOWN */}
<li className="nav-item developer-item">
  Developer

  <div className="developer-dropdown">
    <div className="developer-inner">

      {/* LEFT MENU */}
      <div className="developer-left">
        <Link className="developer-link active"
        to="developer/developerhome">
          Developer Home
        </Link>
        <Link className="developer-link">Documentation</Link>
        <Link className="developer-link">Tutorials</Link>
        <Link className="developer-link">Tour</Link>
        <Link className="developer-link">Network</Link>
      </div>

      {/* RIGHT SDK GRID */}
      <div className="developer-right">
        <p className="developer-title">SDKs</p>

        <div className="sdk-grid">
          <span className="sdk js">JS</span>
          <span className="sdk java">Java</span>
          <span className="sdk unreal">U</span>
          <span className="sdk kotlin">K</span>
          <span className="sdk ruby">R</span>
          <span className="sdk unity">Unity</span>
          <span className="sdk python">Py</span>
          <span className="sdk php">PHP</span>
          <span className="sdk go">Go</span>
          <span className="sdk react">⚛</span>
          <span className="sdk ios"></span>
          <span className="sdk android">🤖</span>
        </div>
      </div>

    </div>
  </div>
</li>

        {/* RESOURCES WITH DROPDOWN */}
<li className="nav-item resources-item">
  Resources

  <div className="resources-dropdown">
    <div className="resources-inner">

      <Link className="resources-link">
        🏆 Why PubNub Wins
      </Link>

      <Link className="resources-link">
        📝 Blog
      </Link>

      <Link className="resources-link">
        ▶ Demos
      </Link>

      <Link className="resources-link">
        👥 Customers
      </Link>

      <Link className="resources-link">
        📘 eBooks
      </Link>

      <Link className="resources-link active" to="resources/careers">
        ⭐ Careers
      </Link>

      <Link className="resources-link">
        ℹ About Us
      </Link>

    </div>
  </div>
</li>

      </ul>

      <div className="nav-actions">
        <button className="btn-outline">Contact Sales</button>
        <button className="btn-primary">Try for free</button>
      </div>
    </nav>
  );
}
