import * as XLSX from 'xlsx';

const CATEGORIES = [
  { key: 'aperitivo', label: 'Aperitivos' },
  { key: 'bebida',    label: 'Bebidas' },
  { key: 'entrada',   label: 'Entradas' },
  { key: 'fondo',     label: 'Fondos' },
  { key: 'postre',    label: 'Postres' },
];

function buildGuestsSheet(guests) {
  const header = ['#', 'Nombre', 'Aperitivo', 'Bebida', 'Entrada', 'Fondo', 'Postre'];
  const rows = guests.map((g) => [
    g.number,
    g.name,
    g.aperitivo || '—',
    g.bebida    || '—',
    g.entrada   || '—',
    g.fondo     || '—',
    g.postre    || '—',
  ]);
  return XLSX.utils.aoa_to_sheet([header, ...rows]);
}

function buildSummarySheet(dashboard) {
  const rows = [];

  CATEGORIES.forEach(({ key, label }) => {
    rows.push([label]);
    rows.push(['Plato', 'Cantidad']);

    const entries = Object.entries(dashboard[key] || {}).sort((a, b) => b[1] - a[1]);

    if (entries.length === 0) {
      rows.push(['Sin registros', 0]);
    } else {
      entries.forEach(([name, count]) => rows.push([name, count]));
    }

    rows.push([]); // separador entre categorías
  });

  return XLSX.utils.aoa_to_sheet(rows);
}

function styleSheet(ws) {
  const range = XLSX.utils.decode_range(ws['!ref'] || 'A1');
  ws['!cols'] = [{ wch: 6 }, { wch: 28 }, { wch: 22 }, { wch: 22 }, { wch: 22 }, { wch: 22 }, { wch: 22 }];
  return ws;
}

export function exportToExcel(guests, dashboard) {
  const wb = XLSX.utils.book_new();

  const wsGuests = styleSheet(buildGuestsSheet(guests));
  XLSX.utils.book_append_sheet(wb, wsGuests, 'Invitados');

  const wsSummary = buildSummarySheet(dashboard);
  wsSummary['!cols'] = [{ wch: 30 }, { wch: 12 }];
  XLSX.utils.book_append_sheet(wb, wsSummary, 'Resumen por plato');

  XLSX.writeFile(wb, 'menu-matrimonio.xlsx');
}
