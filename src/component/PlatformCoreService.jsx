import Footer from './Footer';
import Navbar from './Navbar';
import './PlatformCoreService.css';
export default function PlatformCoreService(){
  const frontIcons = [
    "JS", "React", "Angular", "Vue",
    "Swift", "Kotlin", "Python", "Go",
    "Java", "C#", "Unity", "Unreal",
    "Node", "PHP", "Android", "iOS"
  ];

  const backIcons = [
    "JS", "React", "Python", "Go",
    "Java", "Swift", "Kotlin", "Node"
  ];

  const services = [
    {
      title: "Presence",
      desc: "Track user and device activity in real time, with instant awareness of who’s online, offline, or active in a specific channel. Build richer experiences like live participant counters, activity indicators, or dynamic matchmaking with just a few lines of code.",
    },
    {
      title: "App Context",
      desc: "Store and access user or app metadata in a flexible, always-available data layer. This allows you to enrich message processing, personalize interactions, and drive intelligent automation across your application.",
    },
    {
      title: "BizOps Workspace",
      desc: "Get a full suite of admin tools to monitor, configure, and moderate users, channels, and interactions in real time. Easily tune live services like presence and content controls—without needing to redeploy or write additional backend code.",
    },
    {
      title: "Functions",
      desc: "Run custom logic at the edge to process, route, filter, or transform messages as they move through the network. Build event-driven features like moderation, sentiment analysis, and real-time alerts without scaling backend infrastructure.",
    },
    {
      title: "PubNub Chat",
      desc: "Launch rich, scalable chat experiences with prebuilt SDKs and UI kits for web, mobile, and gaming apps—complete with typing indicators, reactions, moderation, and AI-powered content filtering.",
    },
    {
      title: "File Sharing",
      desc: "Share large files like images, videos, documents, or firmware updates in real time between users or devices. Ideal for social, enterprise, and IoT use cases where seamless data delivery is core to the experience.",
    },
  ];
    return(
        <>
    <section className="core-hero">
      <h1>PubNub Core Services</h1>
      <p>
        Enable real-time communication and power low-latency,
        event-driven logic across your entire application architecture.
      </p>

      <div className="icon-orbit">
        {/* BACK ICONS */}
        {backIcons.map((icon, index) => (
          <div
            key={`back-${index}`}
            className="orbit-wrapper"
            style={{
              transform: `rotate(${index * 45}deg) translate(280px)`
            }}
          >
            <div className="orbit-icon orbit-back">
              {icon}
            </div>
          </div>
        ))}

        {/* CENTER */}
        <div className="pn-center">pn</div>

        {/* FRONT ICONS */}
        {frontIcons.map((icon, index) => (
          <div
            key={`front-${index}`}
            className="orbit-wrapper"
            style={{
              transform: `rotate(${index * 22.5}deg) translate(220px)`
            }}
          >
            <div className="orbit-icon orbit-front">
              {icon}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="messaging-section">
      <h2>Messaging Services</h2>
      <p className="messaging-subtitle">
        Power real-time, event-driven experiences with messaging tools built
        for scale, speed, and seamless integration.
      </p>

      <div className="messaging-grid">
        {/* Card 1 */}
        <div className="messaging-card">
          <h3>In App Messaging</h3>
          <p>
            Deliver real-time updates across devices and servers in under
            100ms using a pub/sub model built for scale. Perfect for sending
            messages, signals, or notifications where speed and
            responsiveness are mission-critical.
          </p>

          <div className="card-visual">
            <span className="node">publisher</span>
            <span className="center-node">pubnub</span>
            <span className="node">subscriber</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="messaging-card">
          <h3>Mobile Push Notifications</h3>
          <p>
            Ensure critical communications always reach users—even when
            they’re offline—with built-in push fallback to Apple and Android
            devices via FCM and APNS. Automatically switch from in-app
            delivery to native push for seamless reliability.
          </p>

          <div className="card-visual phone">
            <div className="phone-header">9:41</div>
            <div className="notification">
              <strong>Limited Time Offer!</strong>
              <span>20% off all purchases</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="messaging-card">
          <h3>Event Hub</h3>
          <p>
            Streamline integrations with an Event Hub that filters,
            processes, and triggers actions from user or device events—
            directly to your backend or analytics stack. Ideal for powering
            event-driven workflows, automation, and insight generation in
            real time.
          </p>

          <div className="card-visual flow">
            <span>filter</span>
            <span>process</span>
            <span>trigger</span>
          </div>
        </div>
      </div>
    </section>

     <section className="app-services">
      <h2>Application Services</h2>
      <p className="app-services-subtitle">
        Build smarter, more interactive apps with real-time context, control,
        and communication tools.
      </p>

      <div className="app-services-grid">
        {services.map((item, index) => (
          <div className="app-service-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            {/* Illustration placeholder */}
            <div className="app-service-visual" />
          </div>
        ))}
      </div>
    </section>

    <section className="contact-cta">
      <div className="contact-card">

        {/* Left Content */}
        <div className="contact-content">
          <h3>Contact Us</h3>
          <p>
            Want to see what real-time decision intelligence can do for your app
            and bottom line? Contact sales or sign up free to start building with
            PubNub today.
          </p>

          <div className="contact-actions">
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
    </section>
        </>
    )
}