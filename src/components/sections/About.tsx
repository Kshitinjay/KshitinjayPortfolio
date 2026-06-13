const About = () => {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-label">
          <span className="idx">03</span>
          <h2>About</h2>
        </div>

        <div className="about">
          <div className="ab-big reveal">
            Engineer,
            <br />
            not <span className="em">template.</span>
          </div>
          <div className="ab-body reveal">
            <p>
              Five years shipping production React, lately at the edge of AI products — the{' '}
              <b>streaming, voice and flow-visualization</b> layers that decide whether an agent
              feels usable.
            </p>
            <p>
              I sweat the parts users never name: a <b>green Lighthouse score</b>, focus states that
              actually work, motion that earns its place. This page is built to that bar — view
              source.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
