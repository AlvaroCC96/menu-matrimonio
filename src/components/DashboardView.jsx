import { Counter } from './Counter.jsx';

export function DashboardView({ guests, dashboard }) {
  return (
    <main className="dashboard">
      <section className="panel full">
        <h2>Qué pidió cada persona</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Invitado</th>
                <th>Aperitivo</th>
                <th>Bebida</th>
                <th>Entrada</th>
                <th>Fondo</th>
                <th>Postre</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((g) => (
                <tr key={g.id}>
                  <td>{g.number}</td>
                  <td>{g.name}</td>
                  <td>{g.aperitivo || '—'}</td>
                  <td>{g.bebida || '—'}</td>
                  <td>{g.entrada || '—'}</td>
                  <td>{g.fondo || '—'}</td>
                  <td>{g.postre || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Counter title="🍹 Aperitivos" data={dashboard.aperitivo} />
      <Counter title="🥤 Bebidas" data={dashboard.bebida} />
      <Counter title="🥗 Entradas" data={dashboard.entrada} />
      <Counter title="🍖 Fondos" data={dashboard.fondo} />
      <Counter title="🍰 Postres" data={dashboard.postre} />
    </main>
  );
}
