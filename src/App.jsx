import { useMemo, useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Raymond Signature Suit',
    category: 'Raymond',
    price: '₹4,999',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    description: 'Premium formal suiting for business meetings and elegant events.',
    colors: ['Navy', 'Charcoal', 'Black'],
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Linen Smart Shirt',
    category: 'Linen',
    price: '₹1,899',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    description: 'Breathable and polished everyday formal wear for warm weather.',
    colors: ['White', 'Sky Blue', 'Beige'],
    tag: 'New Arrival',
  },
  {
    id: 3,
    name: 'Cotton Classic Pant',
    category: 'Cotton',
    price: '₹1,499',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
    description: 'Comfortable formal trousers designed for long hours and sharp styling.',
    colors: ['Grey', 'Brown', 'Black'],
    tag: 'Popular',
  },
  {
    id: 4,
    name: 'Silk Festive Kurta',
    category: 'Silk',
    price: '₹2,799',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    description: 'A refined festive layer for celebrations and premium occasions.',
    colors: ['Maroon', 'Gold', 'Emerald'],
    tag: 'Limited',
  },
  {
    id: 5,
    name: 'Raymond Formal Blazer',
    category: 'Raymond',
    price: '₹5,499',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
    description: 'Structured blazer with premium tailoring and sharp silhouette.',
    colors: ['Black', 'Midnight Blue', 'Taupe'],
    tag: 'Premium',
  },
  {
    id: 6,
    name: 'Cotton Office Shirt',
    category: 'Cotton',
    price: '₹1,799',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    description: 'Smart, breathable office essentials for a polished business look.',
    colors: ['White', 'Light Pink', 'Blue'],
    tag: 'Office Pick',
  },
  {
    id: 7,
    name: 'Linen Wedding Set',
    category: 'Linen',
    price: '₹3,299',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    description: 'Comfortable yet luxurious attire for festive and family occasions.',
    colors: ['Ivory', 'Sand', 'Olive'],
    tag: 'Signature',
  },
  {
    id: 8,
    name: 'Silk Evening Shirt',
    category: 'Silk',
    price: '₹2,499',
    image:
      'https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?auto=format&fit=crop&w=900&q=80',
    description: 'A polished evening style with rich fabric finish and elegance.',
    colors: ['Royal Blue', 'Wine', 'Black'],
    tag: 'Trending',
  },
];

const filterOptions = ['All', 'Raymond', 'Linen', 'Cotton', 'Silk'];

const stats = [
  { label: 'Premium Brands', value: '20+' },
  { label: 'Happy Clients', value: '1.5K+' },
  { label: 'Fabric Collection', value: '100+' },
  { label: 'Same-Day Support', value: '24/7' },
];

const reviews = [
  {
    name: 'Rahul Mehta',
    text: 'Excellent fit and premium fabric quality. The Raymond collection is worth every rupee.',
  },
  {
    name: 'Anita Shinde',
    text: 'Very helpful staff and the linen shirts feel luxurious and comfortable throughout the day.',
  },
  {
    name: 'Vikram Patil',
    text: 'I loved the collection variety. Easy to browse and easy to order via WhatsApp.',
  },
];

const inventory = [
  { name: 'Raymond Navy Suit', qty: 14, status: 'In Stock' },
  { name: 'Linen White Shirt', qty: 26, status: 'In Stock' },
  { name: 'Cotton Formal Trouser', qty: 18, status: 'Low Stock' },
  { name: 'Silk Festive Kurta', qty: 7, status: 'Limited' },
];

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const visibleProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const handleOrder = (productName) => {
    const message = `Hello UJIYAR Collection, I want to order ${productName}. Please share availability and pricing.`;
    const whatsappUrl = `https://wa.me/918623072903?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav">
          <div className="brand-wrap">
            <div className="brand-mark">U</div>
            <div>
              <p className="brand-name">UJIYAR Collection</p>
              <span className="brand-subtitle">Formal Wear & Fabrics</span>
            </div>
          </div>

          <nav className="nav-links">
            <a href="#collections">Collections</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="primary-btn small-btn" onClick={() => handleOrder('Premium Collection')}>
            Order on WhatsApp
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Tailored for every occasion</p>
              <h1>Formal clothing that speaks confidence.</h1>
              <p className="lead">
                Discover refined Raymond, linen, cotton, and silk selections at UJIYAR Collection in Pune Moshi Road, Chikhli.
              </p>

              <div className="hero-actions">
                <a href="#collections" className="primary-btn">Explore Collection</a>
                <button className="secondary-btn" onClick={() => handleOrder('Formal Clothing')}>
                  Enquire Now
                </button>
              </div>

              <div className="stats-grid">
                {stats.map((stat) => (
                  <div className="stat-box" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="image-card large-card">
                <img
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
                  alt="Formal clothing collection"
                />
                <div className="floating-tag">Premium Fabrics</div>
              </div>
            </div>
          </div>
        </section>

        <section id="collections" className="catalog">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Our Range</p>
                <h2>Shop by fabric and style</h2>
              </div>
            </div>

            <div className="toolbar">
              <div className="filter-row">
                {filterOptions.map((item) => (
                  <button
                    key={item}
                    className={item === activeCategory ? 'filter-btn active' : 'filter-btn'}
                    onClick={() => setActiveCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <label className="search-box">
                <span>Search</span>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search product name"
                />
              </label>
            </div>

            <div className="product-grid">
              {visibleProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-image-wrap">
                    <img src={product.image} alt={product.name} />
                    <span className="product-tag">{product.tag}</span>
                  </div>

                  <div className="product-body">
                    <div className="product-meta">
                      <span>{product.category}</span>
                      <span>{product.price}</span>
                    </div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>

                    <div className="color-row">
                      {product.colors.map((color) => (
                        <span key={color} className="color-pill">{color}</span>
                      ))}
                    </div>

                    <button className="primary-btn full-btn" onClick={() => handleOrder(product.name)}>
                      Order on WhatsApp
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {visibleProducts.length === 0 && (
              <div className="empty-state">
                No products found for this search. Try another category or product name.
              </div>
            )}
          </div>
        </section>

        <section id="about" className="about">
          <div className="container about-grid">
            <div className="about-visual">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
                alt="Elegant stitched garments"
              />
            </div>

            <div className="about-copy">
              <p className="eyebrow">Why choose us</p>
              <h2>Trusted formal wear destination for every lifestyle.</h2>
              <ul className="feature-list">
                <li>Curated premium fabric collection from trusted brands.</li>
                <li>Modern and elegant options for office, wedding and festive wear.</li>
                <li>Quick help through WhatsApp and direct in-shop support.</li>
                <li>Convenient shopping experience with easy product search.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="reviews" className="reviews">
          <div className="container">
            <div className="section-heading center">
              <div>
                <p className="eyebrow">Customer love</p>
                <h2>What our customers say</h2>
              </div>
            </div>

            <div className="review-grid">
              {reviews.map((review) => (
                <div className="review-card" key={review.name}>
                  <div className="stars">★★★★★</div>
                  <p>“{review.text}”</p>
                  <strong>{review.name}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="admin-panel">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Admin overview</p>
                <h2>Inventory & sales snapshot</h2>
              </div>
            </div>

            <div className="admin-grid">
              <div className="metric-card">
                <span>Total Sales</span>
                <strong>₹3.8L</strong>
                <small>+12% this month</small>
              </div>
              <div className="metric-card">
                <span>Orders</span>
                <strong>248</strong>
                <small>18 pending follow-ups</small>
              </div>
              <div className="metric-card">
                <span>Low Stock</span>
                <strong>4 SKUs</strong>
                <small>Need refill soon</small>
              </div>
            </div>

            <div className="inventory-table-wrap">
              <table className="inventory-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.map((item) => (
                    <tr key={item.name}>
                      <td>{item.name}</td>
                      <td>{item.qty}</td>
                      <td>
                        <span className={`status ${item.status.toLowerCase().replace(/\s+/g, '-')}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div>
            <p className="brand-name footer-brand">UJIYAR Collection</p>
            <p>Premium formal wear for modern men and women.</p>
          </div>

          <div>
            <h3>Visit us</h3>
            <p>Pune Moshi Road, Chikhli</p>
          </div>

          <div>
            <h3>Contact</h3>
            <p>8623072903</p>
            <p>javedijk9839@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
