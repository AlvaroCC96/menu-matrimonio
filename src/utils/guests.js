export function createGuest(number) {
  return {
    id: crypto.randomUUID(),
    number,
    name: `Invitado ${number}`,
    aperitivo: '',
    bebida: '',
    entrada: '',
    fondo: '',
    postre: '',
    notes: '',
  };
}

export function createInitialGuests(total = 20) {
  return Array.from({ length: total }, (_, i) => createGuest(i + 1));
}

export function normalizeGuests(guests) {
  return guests.map((guest, index) => ({
    id: guest.id || crypto.randomUUID(),
    number: index + 1,
    name: guest.name || `Invitado ${index + 1}`,
    aperitivo: guest.aperitivo || '',
    bebida: guest.bebida || '',
    entrada: guest.entrada || '',
    fondo: guest.fondo || '',
    postre: guest.postre || '',
    notes: guest.notes || '',
  }));
}

export function countByField(guests, field) {
  return guests.reduce((acc, guest) => {
    if (!guest[field]) return acc;
    acc[guest[field]] = (acc[guest[field]] || 0) + 1;
    return acc;
  }, {});
}
