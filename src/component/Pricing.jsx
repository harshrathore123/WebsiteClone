import './Pricing.css';
import { useState } from 'react';
export default function Pricing(){
     const [mau, setMau] = useState(1000);

  const calculatePrice = (value) => {
    // simple mock pricing logic
    if (value <= 1000) return 170;
    if (value <= 5000) return 399;
    if (value <= 10000) return 699;
    if (value <= 25000) return 1299;
    return 1999;
  };
    return(
        <>
      <section className="pricing-hero">
      <h1>Simple, Transparent Pricing</h1>

      <p>
        Start building for free, then scale with confidence. Our pay-as-you-grow
        pricing is based on one simple metric: Monthly Active Users. No hidden
        fees, no surprises.
      </p>

      <div className="pricing-actions">
        <button className="btn-primary">
          Start Free - No Credit Card
        </button>
        <button className="btn-outline">
          Calculate Your Costs
        </button>
      </div>
    </section>

           <section className="plans-section">
      <h2>Choose Your Plan</h2>
      <p className="plans-subtitle">
        All plans include unlimited channels, and all our core features.
        You only pay for what you use: MAU.
      </p>

      <div className="plans-grid">

        {/* FREE PLAN */}
        <div className="plan-card">
          <h3>Free Plan</h3>
          <div className="plan-price">Free</div>
          <p className="plan-note">Forever free • No credit card required</p>

          <div className="plan-highlight">
            <strong>200 MAU</strong> or <strong>1M transactions</strong>
            <span>Usage Allowance: Best for testing and prototypes.</span>
          </div>

          <button className="btn-outline full">Start Building Free</button>

          <h4>What's included</h4>
          <ul>
            <li>1GB data storage (7 days)</li>
            <li>Community support</li>
            <li>Up to 1M transactions monthly</li>
          </ul>

          <a href="/" className="plan-link">Full Feature Breakdown</a>
        </div>

        {/* STARTER PLAN */}
        <div className="plan-card featured">
          <h3>Starter Plan</h3>
          <div className="plan-price">$98/month</div>
          <p className="plan-note">Pay as you grow</p>

          <div className="plan-highlight">
            <strong>1,000 MAU included</strong>
            <span>Usage Allowance: Ideal for launching apps.</span>
          </div>

          <button className="btn-primaryi full">
            Create Starter Account
          </button>

          <h4>What's included</h4>
          <ul>
            <li>Includes BizOps Workspace</li>
            <li>Up to 6 months data storage</li>
            <li>Standard support (24/5)</li>
            <li>Insights into users, channels & messages</li>
          </ul>

          <a href="/" className="plan-link">Full Feature Breakdown</a>
        </div>

        {/* PRO PLAN */}
        <div className="plan-card">
          <h3>Pro Plan</h3>
          <div className="plan-price">Custom</div>
          <p className="plan-note">The more you grow, the more you save</p>

          <div className="plan-highlight">
            <strong>Custom MAU packages</strong>
            <span>Usage Allowance: Built for production apps.</span>
          </div>

          <button className="btn-outline full">Contact Sales</button>

          <h4>What's included</h4>
          <ul>
            <li>Unlimited data storage</li>
            <li>Dedicated support team</li>
            <li>Advanced analytics & monitoring</li>
            <li>99.999% uptime SLA</li>
            <li>Custom integrations</li>
          </ul>

          <a href="/" className="plan-link">Full Feature Breakdown</a>
        </div>

      </div>
    </section>

    <section className="payg-section">
      <h2 className="payg-title">Pay-As-You-Go Pricing</h2>

      <div className="payg-cards">
        <div className="payg-card">
          <p className="plan-name">Free Plan</p>
          <h3>$0<span>/month</span></h3>
          <p className="plan-desc">for up to 200 MAU</p>
        </div>

        <div className="payg-card">
          <p className="plan-name">Starter Plan</p>
          <h3>$98<span>/month</span></h3>
          <p className="plan-desc">for 1,000 MAU</p>
        </div>

        <div className="payg-card">
          <p className="plan-name">Pro Plan</p>
          <h3>Volume Discounts</h3>
          <p className="plan-desc">for 10,000+ MAU</p>
        </div>
      </div>

      <div className="payg-bottom">
        <h3>Simple, Predictable Pricing — No Hidden Fees</h3>
        <p>
          Other providers have unexpected charges for concurrency, channels,
          and messaging, making costs unpredictable and difficult to budget
          for. With PubNub's MAU pricing, it's simple. You only pay for MAUs.
          That's it.
        </p>
      </div>
    </section>

    <section className="pricing-compare">

      {/* ===== TABLE ===== */}
      <div className="pricing-table">
        <div className="table-header">
          <span>Billing Metric</span>
          <span className="pubnub">pubnub</span>
          <span>Other Platforms</span>
        </div>

        {[
          "Monthly Active Users (MAU)",
          "Peak Concurrent Connections",
          "Message & API Call Volume",
          "Active Channel / Connection Time",
          "Storage & Bandwidth",
          "Advanced Feature Add-ons",
        ].map((item, i) => (
          <div className="table-row" key={i}>
            <span>{item}</span>
            <span className="included">✔ Included</span>
            <span className="extra">💲 Extra Cost</span>
          </div>
        ))}
      </div>

      {/* ===== ANNUAL DISCOUNT ===== */}
      <div className="annual-section">
        <h2>Commit & Save Big: Annual Discounts</h2>
        <p>
          Switch to annual pricing and unlock deep discounts on our Pro plan.
          Your monthly costs are estimated by the number of Monthly Active
          Users (MAU).
        </p>

        <div className="annual-content">

          {/* LEFT SLIDER */}
          <div className="slider-box">
            <label>Monthly Active Users (MAU)</label>

            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={mau}
              onChange={(e) => setMau(Number(e.target.value))}
            />

            <div className="slider-values">
              <span>1k</span>
              <span>5k</span>
              <span>10k</span>
              <span>25k</span>
              <span>50k+</span>
            </div>

            <input
              className="mau-input"
              type="number"
              value={mau}
              onChange={(e) => setMau(Number(e.target.value))}
            />
          </div>

          {/* RIGHT PRICE CARD */}
          <div className="price-card">
            <p className="price-label">Platform Pro (Estimated)</p>
            <h3>${calculatePrice(mau)}<span>/month</span></h3>
            <p className="price-desc">
              Your estimated price for {mau.toLocaleString()} MAU.
            </p>

            <button className="price-btn">Contact Sales</button>

            <small>
              The pricing shown is representative of most common use cases.
            </small>
          </div>
        </div>
      </div>
    </section>

        <section className="trust-section">

      {/* ===== TRUST STATS ===== */}
      <h2 className="trust-title">Trusted by 3M+ Developers Worldwide</h2>

      <div className="trust-card">
        <div className="trust-item">
          <h3>99.999%</h3>
          <p>Uptime SLA</p>
        </div>
        <div className="trust-item">
          <h3>&lt;100ms</h3>
          <p>Global Latency</p>
        </div>
        <div className="trust-item">
          <h3>3M+</h3>
          <p>Developers</p>
        </div>
        <div className="trust-item">
          <h3>25M+</h3>
          <p>Concurrent Connections</p>
        </div>
      </div>

      {/* ===== COMPLIANCE ===== */}
      <div className="compliance-wrapper">

        {/* LEFT ICONS */}
        <div className="compliance-icons">
          <div className="badge">
            <span className="circle">GDPR</span>
            <p>GDPR<br />Compliant</p>
          </div>

          <div className="badge">
            <span className="circle">HIPAA</span>
            <p>HIPAA<br />Compliant</p>
          </div>

          <div className="badge">
            <span className="circle">SOC 2</span>
            <p>SOC 2 Type 2<br />Certified</p>
          </div>

          <div className="badge">
            <span className="circle">ISO</span>
            <p>ISO 27001<br />Certified</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="compliance-content">
          <h3>Enterprise-Grade Compliance</h3>
          <p>
            Compliance is handled out of the box, with support for GDPR, HIPAA,
            SOC 2 Type 2, and ISO 27001. You can control how and where data is
            stored and routed—including locking it to U.S.-only data centers
            when needed. Access controls and audit logs are built in, so meeting
            requirements doesn't add extra overhead.
          </p>

          <div className="compliance-features">
            <div className="feature">
              🔒
              <div>
                <strong>Data Residency</strong>
                <span>Control where your data is stored and processed</span>
              </div>
            </div>

            <div className="feature">
              📋
              <div>
                <strong>Audit Logs</strong>
                <span>Complete audit trails built into the platform</span>
              </div>
            </div>

            <div className="feature">
              🛡️
              <div>
                <strong>Access Controls</strong>
                <span>Granular permissions and role-based access</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

        <section className="ready-wrapper">

      {/* CTA CARD */}
      <div className="ready-card">
        <div className="ready-left">
          <h2>Ready to Build Real-Time Apps?</h2>
          <p>
            Join millions of developers building the future of real-time
            experiences. <br />
            Start free, scale as you grow.
          </p>

          <div className="ready-actions">
            <button className="btn-primary">
              Start Free – No Credit Card
            </button>
            <button className="btn-outline">
              Talk to Sales
            </button>
          </div>
        </div>

        <div className="ready-right">
          <img
            src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
            alt="Support headset"
          />
        </div>
      </div>

      {/* MAU INFO */}
      <div className="mau-info">
        <h3>What is MAU?</h3>
        <p>
          A Monthly Active User is a unique user who connects to PubNub at least
          once in a monthly billing cycle.{" "}
          <a href="/">Learn more in our FAQ</a>.
          <br />
          Our free plan is designed for you to build and test your application.
          When you're ready for production, you can seamlessly upgrade to a
          paid plan.
        </p>
      </div>

    </section>
        </>
    )
}