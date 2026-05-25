const WEDDING_DATE = new Date('2026-06-08T00:00:00');

function useDaysLeft() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = WEDDING_DATE - today;
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function HomeScreen({ onViewCarta, onLogin }) {
  const daysLeft = useDaysLeft();

  return (
    <main className="home-page">
      <div className="home-card">

        <div className="home-rings">💍</div>

        <p className="home-label">Los invitan a su matrimonio</p>

        <h1 className="home-names">
          <span>Pamela</span>
          <span className="home-ampersand">&amp;</span>
          <span>Álvaro</span>
        </h1>

        <p className="home-fullnames">
          Pamela Patricia Cristina Castañeda Rivera<br />
          Álvaro Lucas Castillo Calabacero
        </p>

        <div className="home-date-block">
          <div className="home-date-item">
            <strong>08</strong>
            <span>Jun</span>
          </div>
          <div className="home-date-divider" />
          <div className="home-date-item">
            <strong>2026</strong>
            <span>Año</span>
          </div>
          {daysLeft > 0 && (
            <>
              <div className="home-date-divider" />
              <div className="home-date-item">
                <strong>{daysLeft}</strong>
                <span>{daysLeft === 1 ? 'día' : 'días'}</span>
              </div>
            </>
          )}
        </div>

        <div className="home-actions">
          <button className="home-btn-primary" onClick={onViewCarta}>
            Ver carta del menú
          </button>
          <button className="home-btn-secondary" onClick={onLogin}>
            Acceder al panel
          </button>
        </div>

      </div>
    </main>
  );
}
