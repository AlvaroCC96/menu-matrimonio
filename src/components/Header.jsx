export function Header({ onLogout }) {
  return (
    <header className="hero">
      <div>
        <span>Menú matrimonio</span>
        <h1>Dashboard de invitados</h1>
        <p>Registro de elecciones de menú, contadores y datos en JSON.</p>
      </div>
      <button className="logout" onClick={onLogout}>
        Salir
      </button>
    </header>
  );
}
