export function Counter({ title, data }) {
  const entries = Object.entries(data).sort((a, b) => b[1] - a[1]);

  return (
    <section className="panel">
      <h2>{title}</h2>
      {entries.length === 0 && <p className="empty">Sin datos todavía.</p>}
      {entries.map(([name, total]) => (
        <div className="counter" key={name}>
          <span>{name}</span>
          <strong>
            {total} persona{total === 1 ? '' : 's'}
          </strong>
        </div>
      ))}
    </section>
  );
}
