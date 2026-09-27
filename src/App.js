import './App.css';

const imageIds = [
  '1617038220317-32175446a06d',
  '1599643478518-a784e5dc4c8f',
  '1602173572613',
  '1611652022419-a9419f74343d'
];

const categories = [
  { name: 'Pendants', types: ['Stone', 'Sterling Silver', 'Gold Micron', 'Pearl'] },
  { name: 'Rings', types: ['CZ', 'Stone', 'Sterling Silver', 'Gold Micron'] },
  { name: 'Earrings', types: ['Stud', 'Hoop', 'Drop', 'Pearl'] },
  { name: 'Bracelets', types: ['Tennis', 'Charm', 'Cuff', 'Pearl'] },
  { name: 'Necklaces', types: ['Layered', 'Solitaire', 'Pearl', 'Gold Micron'] },
  { name: 'Bridal Jewellery', types: ['Western Sets', 'Necklace Sets', 'Earrings', 'Bracelets'] }
];

const products = categories.flatMap((category, categoryIndex) =>
  category.types.map((type, typeIndex) => ({
    id: `${category.name}-${type}`,
    name: `${type} ${category.name.slice(0, -1)}`,
    category: category.name,
    type,
    material: type === 'Sterling Silver' ? '925 Sterling Silver' : `${type} finish`,
    price: `₹${(1899 + categoryIndex * 430 + typeIndex * 280).toLocaleString('en-IN')}`,
    rating: (3.9 + ((categoryIndex + typeIndex) % 6) * 0.1).toFixed(1),
    image: `https://images.unsplash.com/photo-${imageIds[(categoryIndex + typeIndex) % imageIds.length]}?auto=format&fit=crop&w=900&q=80`
  }))
);

const reviews = [
  ['Riya S.', 'The finish is elegant and the piece looks beautiful with both Indian and western outfits.', 5],
  ['Megha T.', 'A lovely bridal collection with delicate details. The team was helpful with my enquiry.', 4],
  ['Ananya P.', 'The pendant looks exactly like the information shown on the website. Very graceful.', 5],
  ['Priya K.', 'Beautiful designs and a premium presentation. I would happily recommend Auren India.', 4]
];

const contactEmail = 'mailto:hello@aurenindia.com?subject=Jewellery%20Enquiry';

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand-wrap" href="#top" aria-label="Auren India home">
            <span className="brand-mark">A</span>
            <span><strong className="brand-name">Auren India</strong><small>Fine Jewellery</small></span>
          </a>
          <nav className="nav" aria-label="Main navigation">
            <a href="#collection">Collection</a>
            <a href="#highlights">Highlights</a>
            <a href="#bridal">Bridal</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Enquire</a>
          </nav>
          <a className="text-link" href="#collection">View collection <span>↗</span></a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-layout">
            <div className="hero-copy">
              <span className="eyebrow">Auren India · Informational catalogue</span>
              <h1>Jewellery that makes every moment feel yours.</h1>
              <p>Explore our curated collection of elegant everyday pieces and bridal jewellery. Browse the details, then contact Auren India for availability, styling guidance and personalised enquiries.</p>
              <div className="hero-actions"><a className="primary-link" href="#collection">Browse the collection <span>↓</span></a><a className="secondary-link" href={contactEmail}>Make an enquiry</a></div>
              <div className="stat-strip"><div><strong>500+</strong><span>Happy customers</span></div><div><strong>3000+</strong><span>Units showcased</span></div><div><strong>4.4★</strong><span>Customer rating</span></div></div>
            </div>
            <div className="hero-visual"><div className="hero-card primary"><img src={`https://images.unsplash.com/photo-${imageIds[0]}?auto=format&fit=crop&w=1000&q=80`} alt="Auren India jewellery" /></div><div className="hero-card secondary"><img src={`https://images.unsplash.com/photo-${imageIds[1]}?auto=format&fit=crop&w=700&q=80`} alt="Auren India pendant" /></div><span className="badge-tag">Curated in India</span></div>
          </div>
        </section>

        <section className="trust-bar"><div className="container trust-row"><span>Premium quality information</span><span>Indian design sensibility</span><span>Personalised enquiries</span><span>Bridal styling guidance</span></div></section>

        <section id="collection" className="category-section"><div className="container"><div className="section-heading"><span className="eyebrow">Explore by category</span><h2>Find a style that feels like you</h2><p>Each category includes focused subcategories to help you discover the right piece quickly.</p></div><div className="category-grid">{categories.map((category) => <article className="category-tile" key={category.name}><div className="category-icon">{category.name.charAt(0)}</div><h3>{category.name}</h3><ul>{category.types.map((type) => <li key={type}><a href={`#${category.name}`}>{type} {category.name}</a></li>)}</ul></article>)}</div></div></section>

        <section id="highlights" className="product-showcase"><div className="container"><div className="section-heading"><span className="eyebrow">Collection highlights</span><h2>Pieces to discover</h2><p>Shown for information and styling reference. Contact us to ask about a design.</p></div><div className="product-grid">{products.map((product) => <article className="product-card" key={product.id} id={product.category}><div className="product-image-wrap"><img src={product.image} alt={product.name} loading="lazy" /><span className="product-badge">{product.type}</span></div><div className="product-body"><div className="product-meta-row"><span>{product.material}</span><span className="rating">{product.rating}★</span></div><h3>{product.name}</h3><p className="product-description">A thoughtfully styled {product.type.toLowerCase()} design from the Auren India collection.</p><div className="price-row"><strong>{product.price}</strong><span>Reference price</span></div><a className="enquiry-link" href={`${contactEmail}&body=I%20am%20interested%20in%20the%20${encodeURIComponent(product.name)}`}>Ask about this piece <span>↗</span></a></div></article>)}</div></div></section>

        <section id="bridal" className="bridal-banner"><div className="container bridal-inner"><div className="bridal-copy"><span className="eyebrow">Auren India bridal</span><h2>Pieces for the moments you will remember forever.</h2><p>Discover western bridal sets, necklace sets, bridal earrings and bracelets. Share your occasion with us for a considered recommendation.</p><a className="primary-link" href={`${contactEmail}&subject=Bridal%20Jewellery%20Enquiry`}>Discuss bridal jewellery <span>↗</span></a></div><img src={`https://images.unsplash.com/photo-${imageIds[3]}?auto=format&fit=crop&w=1000&q=80`} alt="Auren India bridal jewellery" /></div></section>

        <section id="reviews" className="reviews-section"><div className="container"><div className="section-heading center"><span className="eyebrow">Customer voices</span><h2>What our customers say</h2></div><div className="reviews-grid">{reviews.map(([name, text, rating]) => <article className="review-card" key={name}><div className="review-header"><div className="avatar">{name.charAt(0)}</div><div><h3>{name}</h3><span>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span></div></div><p>“{text}”</p><small>Customer feedback</small></article>)}</div></div></section>

        <section className="information-panel"><div className="container"><span className="eyebrow">Good to know</span><h2>This is an information-first jewellery catalogue.</h2><p>Prices, ratings and descriptions are provided as a guide. For current availability, customisation, exact pricing or purchase information, please contact Auren India directly.</p><a className="primary-link" href={contactEmail}>Contact Auren India <span>↗</span></a></div></section>
      </main>

      <footer id="contact" className="site-footer"><div className="container footer-grid"><div><div className="brand-wrap footer-brand"><span className="brand-mark">A</span><span><strong className="brand-name">Auren India</strong><small>Fine Jewellery</small></span></div><p>Minimal jewellery, thoughtfully presented for India and beyond.</p></div><div><h3>Navigate</h3><ul><li><a href="#collection">Collection</a></li><li><a href="#bridal">Bridal jewellery</a></li><li><a href="#reviews">Reviews</a></li></ul></div><div><h3>Enquiries</h3><ul><li><a href={contactEmail}>Email Auren India</a></li><li><a href="#top">Back to top ↑</a></li></ul></div><div><h3>Contact</h3><p><a href={contactEmail}>hello@aurenindia.com</a></p><p>India · By appointment</p></div></div><div className="footer-bottom">© 2026 Auren India · Jewellery information catalogue</div></footer>
    </div>
  );
}

export default App;
