import { useState } from 'react';
import { menuOptions } from '../data/menuOptions.js';
import { SelectField } from './SelectField.jsx';

const FIELDS = ['aperitivo', 'bebida', 'entrada', 'fondo', 'postre'];

export function GuestCard({ guest, updateGuest, removeGuest }) {
  const [expanded, setExpanded] = useState(false);

  const filled = FIELDS.filter((f) => guest[f]).length;
  const isComplete = filled === FIELDS.length;

  return (
    <article className={`card guest-card-collapsible ${isComplete ? 'card-complete' : ''}`}>
      <div className="card-summary" onClick={() => setExpanded((v) => !v)}>
        <strong className="card-number">#{guest.number}</strong>

        <span className="card-name">{guest.name}</span>

        <div className="card-dots">
          {FIELDS.map((f) => (
            <span key={f} className={`dot ${guest[f] ? 'dot-filled' : ''}`} />
          ))}
        </div>

        <span className={`chevron ${expanded ? 'chevron-open' : ''}`}>▾</span>
      </div>

      {expanded && (
        <div className="card-body">
          <div className="card-name-edit">
            <label>
              Nombre
              <input
                value={guest.name}
                onChange={(e) => updateGuest(guest.id, 'name', e.target.value)}
              />
            </label>
          </div>

          <SelectField label="Aperitivo" value={guest.aperitivo} options={menuOptions.aperitivo} onChange={(v) => updateGuest(guest.id, 'aperitivo', v)} />
          <SelectField label="Bebida"    value={guest.bebida}    options={menuOptions.bebida}    onChange={(v) => updateGuest(guest.id, 'bebida', v)} />
          <SelectField label="Entrada"   value={guest.entrada}   options={menuOptions.entrada}   onChange={(v) => updateGuest(guest.id, 'entrada', v)} />
          <SelectField label="Fondo"     value={guest.fondo}     options={menuOptions.fondo}     onChange={(v) => updateGuest(guest.id, 'fondo', v)} />
          <SelectField label="Postre"    value={guest.postre}    options={menuOptions.postre}    onChange={(v) => updateGuest(guest.id, 'postre', v)} />

          <button className="delete" onClick={() => removeGuest(guest.id)}>
            Eliminar invitado
          </button>
        </div>
      )}
    </article>
  );
}
