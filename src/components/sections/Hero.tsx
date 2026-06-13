import RuntimePanel from '../RuntimePanel';

const Hero = () => {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="eyebrow reveal">
          <span className="t" />
          <span className="mono">Frontend Engineer · 5 years · AI-native interfaces</span>
        </div>

        <h1 className="reveal" style={{ transitionDelay: '.05s' }}>
          The frontend layer of <span className="em">AI&nbsp;products.</span>
        </h1>

        <div className="hero-foot reveal" style={{ transitionDelay: '.12s' }}>
          <p className="lede">
            A React engineer who builds the hard part — the <b>real-time interface</b>. Agent
            runtimes, Server-Sent-Events streaming, conversation-flow editors and{' '}
            <b>WebRTC voice</b>. Currently on React 19 across multi-tenant agent platforms.
          </p>
        </div>

        <RuntimePanel />

        <div className="metrics reveal">
          <span className="m">
            <b>5+</b> yrs experience
          </span>
          <span className="sep" />
          <span className="m">
            <b>+30%</b> load perf
          </span>
          <span className="sep" />
          <span className="m">
            <b>+45%</b> feature delivery
          </span>
          <span className="sep" />
          <span className="m">React 19</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
