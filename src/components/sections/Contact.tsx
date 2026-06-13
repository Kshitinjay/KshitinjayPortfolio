const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <h2>
          Let's build something that <span className="em">feels alive.</span>
        </h2>
        <div className="row">
          <p className="lede" style={{ maxWidth: '34ch' }}>
            Open to senior frontend roles and AI-product teams. Email is the fastest way to reach
            me.
          </p>
          <div className="clinks">
            <a className="clink primary" href="mailto:kshitinjay20@gmail.com">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              kshitinjay20@gmail.com
            </a>
            <a className="clink" href="tel:+918687316641">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 86873 16641
            </a>
            <a
              className="clink"
              href="https://linkedin.com/in/kshitinjaykumar"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
            <a
              className="clink"
              href="https://github.com/Kshitinjay"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
