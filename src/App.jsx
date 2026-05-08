// App.jsx

import "./App.css";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
  },
  {
    name: "Frontend Mentor",
    url: "https://www.frontendmentor.io",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
  },
];

function App() {
  return (
    <div className="container">
      <div className="card">
        <img
          src="/avatar-jessica.jpeg"
          alt="Jessica Randall"
          className="profile-img"
        />

        <h1 className="name">Jessica Randall</h1>

        <p className="location">London, United Kingdom</p>

        <p className="bio">
          "Front-end developer and avid reader."
        </p>

        <div className="links">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;