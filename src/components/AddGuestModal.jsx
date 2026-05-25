import { useState } from 'react';
import { menuOptions } from '../data/menuOptions.js';
import { SelectField } from './SelectField.jsx';

const emptyForm = {
  name: '',
  aperitivo: '',
  bebida: '',
  entrada: '',
  fondo: '',
  postre: '',
};

export function AddGuestModal({ onClose, onSave }) {
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const set = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleSave = async () => {
    if (!form.name.trim()) return;
    setSaving(true);
    await onSave(form);
    setSaving(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Nuevo invitado</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <label>
            Nombre
            <input
              placeholder="Nombre del invitado"
              value={form.name}
              onChange={(e) => set('name', e.target.value)}
              autoFocus
            />
          </label>

          <SelectField label="Aperitivo" value={form.aperitivo} options={menuOptions.aperitivo} onChange={(v) => set('aperitivo', v)} />
          <SelectField label="Bebida"    value={form.bebida}    options={menuOptions.bebida}    onChange={(v) => set('bebida', v)} />
          <SelectField label="Entrada"   value={form.entrada}   options={menuOptions.entrada}   onChange={(v) => set('entrada', v)} />
          <SelectField label="Fondo"     value={form.fondo}     options={menuOptions.fondo}     onChange={(v) => set('fondo', v)} />
          <SelectField label="Postre"    value={form.postre}    options={menuOptions.postre}    onChange={(v) => set('postre', v)} />
        </div>

        <div className="modal-footer">
          <button className="delete" onClick={onClose}>Cancelar</button>
          <button onClick={handleSave} disabled={!form.name.trim() || saving}>
            {saving ? 'Guardando...' : 'Guardar invitado'}
          </button>
        </div>
      </div>
    </div>
  );
}
