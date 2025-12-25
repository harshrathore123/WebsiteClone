import './DeveloperHome.css';
export default function DeveloperHome(){
    return(
        <>
            <section className="developers-section">
      <h2 className="developers-title">PubNub for Developers</h2>

      <div className="developers-grid">
        <div className="dev-card">
          <div className="dev-icon">📄</div>
          <h3>Documentation</h3>
          <p>
            Get started quickly with PubNub’s SDKs, APIs and 3rd party
            integrations
          </p>
        </div>

        <div className="dev-card">
          <div className="dev-icon">🔄</div>
          <h3>Live Code Tour</h3>
          <p>
            Explore PubNub’s core features in our interactive live coding tour
          </p>
        </div>

        <div className="dev-card">
          <div className="dev-icon">▶️</div>
          <h3>Tutorials</h3>
          <p>
            Start building chat, geolocation, IOT solutions, and more with
            step-by-step tutorials
          </p>
        </div>

        <div className="dev-card">
          <div className="dev-icon">🔍</div>
          <h3>Blog</h3>
          <p>
            Understand key concepts to architect and build your application
            with PubNub
          </p>
        </div>

        <div className="dev-card">
          <div className="dev-icon">🚀</div>
          <h3>Demos</h3>
          <p>
            Working demos and sample code of data streams in action.
          </p>
        </div>
      </div>
    </section>

   <section className="contact-sales-section">
      <div className="contact-sales-card">
        {/* LEFT */}
        <div className="contact-sales-content">
          <h2>Contact sales</h2>
          <p>
            Start building real-time experiences today. Try PubNub for free or
            contact sales to get started.
          </p>

          <div className="contact-sales-actions">
            <button className="btn-red">Contact Sales</button>
            <button className="btn-outline">Try for Free</button>
          </div>
        </div>

        {/* RIGHT */}
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