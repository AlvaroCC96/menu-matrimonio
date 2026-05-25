import { menuOptions } from '../data/menuOptions.js';
import { SelectField } from './SelectField.jsx';

export function GuestCard({ guest, updateGuest, removeGuest }) {
  return (
    <article className="card">
      <div className="guest-header">
        <strong>#{guest.number}</strong>
        <input
          value={guest.name}
          onChange={(e) => updateGuest(guest.id, 'name', e.target.value)}
        />
        <button className="delete" onClick={() => removeGuest(guest.id)}>
          Eliminar
        </button>
      </div>

      <SelectField
        label="Aperitivo"
        value={guest.aperitivo}
        options={menuOptions.aperitivo}
        onChange={(v) => updateGuest(guest.id, 'aperitivo', v)}
      />
      <SelectField
        label="Bebida"
        value={guest.bebida}
        options={menuOptions.bebida}
        onChange={(v) => updateGuest(guest.id, 'bebida', v)}
      />
      <SelectField
        label="Entrada"
        value={guest.entrada}
        options={menuOptions.entrada}
        onChange={(v) => updateGuest(guest.id, 'entrada', v)}
      />
      <SelectField
        label="Fondo"
        value={guest.fondo}
        options={menuOptions.fondo}
        onChange={(v) => updateGuest(guest.id, 'fondo', v)}
      />
      <SelectField
        label="Postre"
        value={guest.postre}
        options={menuOptions.postre}
        onChange={(v) => updateGuest(guest.id, 'postre', v)}
      />

      <label>
        Notas / alergias
        <input
          value={guest.notes}
          onChange={(e) => updateGuest(guest.id, 'notes', e.target.value)}
          placeholder="Ej: sin cebolla"
        />
      </label>
    </article>
  );
}
