import { useEffect, useRef, useState } from 'react';
import { answers, chips, PREVIEW_CAP, RUN_FALLBACK } from '../data/assistantMock';

/**
 * The `agent · runtime` panel — the design's signature element and the future
 * home of the live "Ask me anything" assistant (roadmap F2/F3).
 *
 * Today it runs a local mock with a typewriter reveal. The `respond()` seam is
 * intentionally thin: F3 replaces it with a streamed fetch to the backend
 * without changing any layout.
 */
const RuntimePanel = () => {
  const [input, setInput] = useState('');
  const [shown, setShown] = useState('');
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval>>();
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    return () => clearInterval(timer.current);
  }, []);

  const respond = (text: string) => {
    clearInterval(timer.current);
    setActive(true);
    setDone(false);

    if (reduce.current) {
      setShown(text);
      setDone(true);
      return;
    }

    setShown('');
    let i = 0;
    timer.current = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer.current);
        setDone(true);
      }
    }, 11);
  };

  const run = () => respond(RUN_FALLBACK);

  return (
    <div className="pipe-shell reveal" style={{ transitionDelay: '.18s' }}>
      <div className="pipe-bar">
        <div className="lt">
          <span className="tl-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="mono">agent · runtime</span>
        </div>
        <div className="rt">
          <span className="d" />
          <span className="mono" style={{ color: 'var(--coral)' }}>
            streaming
          </span>
        </div>
      </div>

      <div className="pipe">
        <svg
          viewBox="0 0 1120 180"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Live agent runtime: listen, reason, stream, speak"
        >
          <path className="pedge" d="M170 90 H300" />
          <path className="pedge" d="M470 90 H600" />
          <path className="pedge" d="M770 90 H900" />
          <g>
            <rect className="pnode" x="40" y="62" width="130" height="56" rx="13" />
            <text className="pnode-idx" x="58" y="84">01</text>
            <text className="pnode-lab" x="58" y="103">LISTEN</text>
          </g>
          <g>
            <rect className="pnode" x="300" y="62" width="170" height="56" rx="13" />
            <text className="pnode-idx" x="318" y="84">02</text>
            <text className="pnode-lab" x="318" y="103">REASON</text>
          </g>
          <g>
            <rect className="pnode" x="600" y="62" width="170" height="56" rx="13" />
            <text className="pnode-idx" x="618" y="84">03</text>
            <text className="pnode-lab" x="618" y="103">STREAM</text>
          </g>
          <g>
            <rect className="pnode" x="900" y="62" width="130" height="56" rx="13" />
            <text className="pnode-idx" x="918" y="84">04</text>
            <text className="pnode-lab" x="918" y="103">SPEAK</text>
          </g>
          <circle className="ppulse" r="4.5">
            <animateMotion
              dur="3.4s"
              repeatCount="indefinite"
              keyPoints="0;0;.5;.5;1;1"
              keyTimes="0;.08;.46;.54;.92;1"
              calcMode="linear"
            >
              <mpath href="#sig" />
            </animateMotion>
          </circle>
          <path id="sig" d="M170 90 H300 M470 90 H600 M770 90 H900" fill="none" stroke="none" />
        </svg>
      </div>

      <div className="term">
        <span className="pmt">ask&nbsp;›</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') run();
          }}
          placeholder="what does kshitinjay build?"
          aria-label="Ask the assistant a question"
        />
        <button className="run" onClick={run}>
          run
        </button>
      </div>

      <div className={`ans${active ? ' show' : ''}`} aria-live="polite">
        {active && (
          <div className="box">
            <span>{shown}</span>
            {done && <span className="cap">{PREVIEW_CAP}</span>}
          </div>
        )}
      </div>

      <div className="chips">
        {chips.map((chip) => (
          <button
            key={chip.q}
            className="chip"
            onClick={() => {
              setInput(chip.label);
              respond(answers[chip.q]);
            }}
          >
            {chip.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RuntimePanel;
