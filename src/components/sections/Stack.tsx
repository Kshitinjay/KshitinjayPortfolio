import { stack } from '../../data/stack';

const Stack = () => {
  return (
    <section id="stack">
      <div className="wrap">
        <div className="sec-label">
          <span className="idx">02</span>
          <h2>What I build with</h2>
        </div>

        <div className="stack">
          {stack.map((col) => (
            <div className={`scol${col.lead ? ' lead' : ''} reveal`} key={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.items.map((item, i) => (
                  <li key={i}>
                    {item.bold && <b>{item.bold}</b>}
                    {item.bold && item.text ? ' ' : ''}
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
