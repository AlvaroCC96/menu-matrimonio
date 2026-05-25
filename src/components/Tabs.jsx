const TABS = ['registro', 'carta', 'dashboard'];

export function Tabs({ activeTab, setActiveTab }) {
  return (
    <nav className="tabs">
      {TABS.map((t) => (
        <button
          key={t}
          className={activeTab === t ? 'active' : ''}
          onClick={() => setActiveTab(t)}
        >
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </button>
      ))}
    </nav>
  );
}
