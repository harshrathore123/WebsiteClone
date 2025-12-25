export default function Navbar(){
    return(
        <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">pubnub</div>

        <ul className="nav-links">
          <li>Platform</li>
          <li>Solutions</li>
          <li>Pricing</li>
          <li>Developer</li>
          <li>Resources</li>
        </ul>

        <div className="nav-actions">
          <button className="btn-outline">Contact Sales</button>
          <button className="btn-primary">Try for free</button>
        </div>
      </nav>
        </>
    )
}