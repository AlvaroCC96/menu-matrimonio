import { GuestCard } from './GuestCard.jsx';

export function RegisterView({ query, setQuery, guests, addGuest, updateGuest, removeGuest }) {
  return (
    <main>
      <div className="toolbar">
        <input
          placeholder="Buscar invitado..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={addGuest}>Agregar invitado</button>
      </div>

      <section className="guest-grid">
        {guests.map((guest) => (
          <GuestCard
            key={guest.id}
            guest={guest}
            updateGuest={updateGuest}
            removeGuest={removeGuest}
          />
        ))}
      </section>
    </main>
  );
}
