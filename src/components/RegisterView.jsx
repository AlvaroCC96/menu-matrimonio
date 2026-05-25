import { useState } from 'react';
import { AddGuestModal } from './AddGuestModal.jsx';
import { GuestCard } from './GuestCard.jsx';
import { Toast } from './Toast.jsx';

export function RegisterView({ query, setQuery, guests, addGuest, updateGuest, removeGuest }) {
  const [showModal, setShowModal] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const handleSave = async (formData) => {
    await addGuest(formData);
    setShowModal(false);
    setToastVisible((v) => !v); // toggle para re-disparar aunque se repita
    setTimeout(() => setToastVisible(true), 10);
  };

  return (
    <main>
      <div className="toolbar">
        <input
          placeholder="Buscar invitado..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => setShowModal(true)}>+ Agregar invitado</button>
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

      {showModal && (
        <AddGuestModal
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}

      <Toast message="Agregado correctamente" visible={toastVisible} />
    </main>
  );
}
