import { work } from '../../data/work';
import type { WorkEntry } from '../../data/work';

const EntryBody = ({ entry }: { entry: WorkEntry }) => (
  <>
    <div className="e-num">{entry.num}</div>
    <div>
      <div className="e-title">
        {entry.title}
        {entry.href && <span className="arrow">→</span>}
      </div>
      <div className="e-meta">{entry.meta}</div>
      <div className="e-desc">{entry.desc}</div>
      <div className="e-tags">
        {entry.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="e-right">
      <div className={`e-impact${entry.impactSmall ? ' small' : ''}`}>
        {entry.impact}
        <span className="l">{entry.impactLabel}</span>
      </div>
    </div>
  </>
);

const Work = () => {
  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-label">
          <span className="idx">01</span>
          <h2>Selected work</h2>
        </div>

        {work.map((entry) => {
          const external = entry.href?.startsWith('http');
          return entry.href ? (
            <a
              className="entry reveal"
              href={entry.href}
              key={entry.num}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <EntryBody entry={entry} />
            </a>
          ) : (
            <div className="entry reveal" key={entry.num}>
              <EntryBody entry={entry} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
