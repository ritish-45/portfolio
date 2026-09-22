import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-heading">
        <p>GET IN TOUCH</p>

        <h1>
          Let's work
          <br />
          together.
        </h1>
      </div>

      <div className="contact-content">
        <p>
          Have a project or opportunity in mind? Feel free to
          reach out.
        </p>

        <a href="mailto:ritishmohanty313@gmail.com">
          ritishmohanty313@gmail.com
        </a>

        <a href="tel:+917848999232">
          +91 78489 99232
        </a>

        <div className="contact-socials">
          <a
            href="https://github.com/ritish-45"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ritish-mohanty-b02919323?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}

export default Contact;