export function JsonView({ jsonInput, setJsonInput, loadJson, exportJson }) {
  return (
    <main className="panel">
      <h2>JSON editable</h2>
      <div className="toolbar">
        <button onClick={loadJson}>Cargar JSON</button>
        <button onClick={exportJson}>Descargar JSON</button>
      </div>
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />
    </main>
  );
}
