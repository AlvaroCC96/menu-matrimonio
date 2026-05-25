import { menuDetails } from '../data/menuDetails.js';

function DishCard({ name, description }) {
  return (
    <div className="dish-card">
      <p className="dish-name">{name}</p>
      {description && <p className="dish-desc">{description}</p>}
    </div>
  );
}

function CategorySection({ category }) {
  const { label, emoji, subtitle, items } = category;
  return (
    <section className="category-section">
      <div className="category-header">
        <span className="category-emoji">{emoji}</span>
        <div>
          <h2 className="category-title">{label}</h2>
          <p className="category-subtitle">{subtitle}</p>
        </div>
      </div>
      <div className="dish-grid">
        {items.map((item) => (
          <DishCard key={item.name} name={item.name} description={item.description} />
        ))}
      </div>
    </section>
  );
}

export function CartaView() {
  return (
    <main className="carta-view">
      <div className="carta-hero">
        <p className="carta-tag">Menú completo</p>
        <h1 className="carta-title">Carta del día</h1>
        <p className="carta-sub">Conoce los detalles de cada plato antes de elegir</p>
      </div>

      <div className="carta-body">
        {Object.values(menuDetails).map((category) => (
          <CategorySection key={category.label} category={category} />
        ))}
      </div>
    </main>
  );
}
