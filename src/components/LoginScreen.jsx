export function LoginScreen({ email, setEmail, password, setPassword, loginError, onLogin, onBack }) {
  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-logo">💍</div>
        <span>Acceso privado</span>
        <h1>Menú Matrimonio</h1>
        <p>Ingresa tus credenciales para acceder al panel.</p>
        <form onSubmit={onLogin}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          {loginError && <small>{loginError}</small>}
          <button type="submit">Entrar</button>
        </form>
        {onBack && (
          <button className="home-btn-secondary btn-volver" onClick={onBack}>
            ← Volver
          </button>
        )}
      </section>
    </main>
  );
}
