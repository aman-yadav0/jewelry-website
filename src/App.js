import './App.css';

const productNames = [
  'Aurelia', 'Celeste', 'Luna', 'Sienna', 'Rosalie', 'Evelyn',
  'Vera', 'Amara', 'Nadia', 'Isla', 'Marina', 'Arielle', 'Sofia',
  'Mira', 'Noor', 'Elise', 'Ziva', 'Ivory', 'Aria', 'Mila'
];

const generateProducts = ({ baseName, basePrice, variant, style, offset = 0, ratingBase = 4.2 }) =>
  Array.from({ length: 15 }, (_, index) => {
    const productNumber = index + 1 + offset;
    const name = `${baseName} ${productNumber}`;
    const price = basePrice + index * 12;
    const original = Math.round(price * (1 + (index % 5) * 0.12 + 0.18));
    const discount = 10 + (index % 5) * 5;
    const rating = Number((ratingBase + (index % 5) * 0.1 + (index % 3) * 0.05).toFixed(1));

    return {
      id: `${variant}-${productNumber}`,
      name,
      price: `₹${price.toLocaleString('en-IN')}`,
      originalPrice: `₹${original.toLocaleString('en-IN')}`,
      discount: `${discount}% OFF`,
      rating,
      reviews: 120 + index * 14,
      image: `https://images.unsplash.com/photo-${[1573408301185, 1602173572613, 1617038220317, 1617038220317, 1599643478518, 1617038220317][index % 6]}?auto=format&fit=crop&w=900&q=80`,
      material: style,
      badge: ['Best Seller', 'Trending', 'New', 'Limited'][index % 4],
      style,
      category: variant,
    };
  });

const categories = [
  {
    title: 'Pendant',
    short: 'pendant',
    subcategories: [
      {
        name: 'Stone Pendants',
        products: generateProducts({ baseName: 'Stone', basePrice: 2000, variant: 'stone-pendant', style: 'Lab-Grown Stone', ratingBase: 3.9 })
      },
      {
        name: 'Sterling Silver Pendants',
        products: generateProducts({ baseName: 'Silver', basePrice: 2400, variant: 'silver-pendant', style: '925 Sterling Silver', ratingBase: 4.1 })
      },
      {
        name: 'Gold Micron Pendants',
        products: generateProducts({ baseName: 'Gold', basePrice: 3200, variant: 'gold-micron-pendant', style: 'Gold Micron', ratingBase: 4.3 })
      },
      {
        name: 'Pearl Pendants',
        products: generateProducts({ baseName: 'Pearl', basePrice: 2800, variant: 'pearl-pendant', style: 'Freshwater Pearl', ratingBase: 4.0 })
      }
    ]
  },
  {
    title: 'Rings',
    short: 'ring',
    subcategories: [
      {
        name: 'CZ Rings',
        products: generateProducts({ baseName: 'CZ', basePrice: 2600, variant: 'cz-ring', style: 'CZ Stone', ratingBase: 4.0 })
      },
      {
        name: 'Stone Rings',
        products: generateProducts({ baseName: 'Stone Ring', basePrice: 3200, variant: 'stone-ring', style: 'Semi-Precious Stone', ratingBase: 4.2 })
      },
      {
        name: 'Sterling Silver Rings',
        products: generateProducts({ baseName: 'Silver Ring', basePrice: 2500, variant: 'silver-ring', style: '925 Sterling Silver', ratingBase: 4.1 })
      },
      {
        name: 'Gold Micron Rings',
        products: generateProducts({ baseName: 'Gold Ring', basePrice: 3600, variant: 'gold-ring', style: 'Gold Micron', ratingBase: 4.4 })
      }
    ]
  },
  {
    title: 'Earrings',
    short: 'earring',
    subcategories: [
      {
        name: 'Stud Earrings',
        products: generateProducts({ baseName: 'Stud', basePrice: 2100, variant: 'stud-earring', style: 'Fine Finish', ratingBase: 3.9 })
      },
      {
        name: 'Hoop Earrings',
        products: generateProducts({ baseName: 'Hoop', basePrice: 2400, variant: 'hoop-earring', style: 'Sterling Silver', ratingBase: 4.1 })
      },
      {
        name: 'Drop Earrings',
        products: generateProducts({ baseName: 'Drop', basePrice: 3300, variant: 'drop-earring', style: 'Stone & Gold', ratingBase: 4.2 })
      },
      {
        name: 'Pearl Earrings',
        products: generateProducts({ baseName: 'Pearl Earring', basePrice: 2800, variant: 'pearl-earring', style: 'Freshwater Pearl', ratingBase: 4.0 })
      }
    ]
  },
  {
    title: 'Bracelets',
    short: 'bracelet',
    subcategories: [
      {
        name: 'Tennis Bracelets',
        products: generateProducts({ baseName: 'Tennis', basePrice: 4200, variant: 'tennis-bracelet', style: 'Gold Micron', ratingBase: 4.3 })
      },
      {
        name: 'Charm Bracelets',
        products: generateProducts({ baseName: 'Charm', basePrice: 2600, variant: 'charm-bracelet', style: 'Customisable Gold Finish', ratingBase: 4.1 })
      },
      {
        name: 'Cuff Bracelets',
        products: generateProducts({ baseName: 'Cuff', basePrice: 3500, variant: 'cuff-bracelet', style: '925 Silver', ratingBase: 4.2 })
      },
      {
        name: 'Pearl Bracelets',
        products: generateProducts({ baseName: 'Pearl Bracelet', basePrice: 2900, variant: 'pearl-bracelet', style: 'Pearl & Silver', ratingBase: 4.0 })
      }
    ]
  },
  {
    title: 'Necklaces',
    short: 'necklace',
    subcategories: [
      {
        name: 'Layered Necklaces',
        products: generateProducts({ baseName: 'Layered', basePrice: 3600, variant: 'layered-necklace', style: 'Gold Micron', ratingBase: 4.3 })
      },
      {
        name: 'Solitaire Necklaces',
        products: generateProducts({ baseName: 'Solitaire', basePrice: 5200, variant: 'solitaire-necklace', style: 'Diamond Look Stone', ratingBase: 4.4 })
      },
      {
        name: 'Pearl Necklaces',
        products: generateProducts({ baseName: 'Pearl Necklace', basePrice: 3100, variant: 'pearl-necklace', style: 'Pearl string', ratingBase: 4.0 })
      },
      {
        name: 'Gold Micron Necklaces',
        products: generateProducts({ baseName: 'Gold Neck', basePrice: 4500, variant: 'gold-necklace', style: 'Gold Micron', ratingBase: 4.4 })
      }
    ]
  },
  {
    title: 'Bridal Jewellery',
    short: 'bridal',
    subcategories: [
      {
        name: 'Western Bridal Sets',
        products: generateProducts({ baseName: 'Western Set', basePrice: 6800, variant: 'western-bridal', style: 'Premium Bridal Finish', ratingBase: 4.4 })
      },
      {
        name: 'Bridal Necklace Sets',
        products: generateProducts({ baseName: 'Bridal Necklace', basePrice: 7200, variant: 'bridal-necklace', style: 'Luxury Bridal', ratingBase: 4.4 })
      },
      {
        name: 'Bridal Earrings',
        products: generateProducts({ baseName: 'Bridal Earring', basePrice: 3800, variant: 'bridal-earring', style: 'Wedding Ready', ratingBase: 4.3 })
      },
      {
        name: 'Bridal Bracelets',
        products: generateProducts({ baseName: 'Bridal Bracelet', basePrice: 4200, variant: 'bridal-bracelet', style: 'Bridal Gold Finish', ratingBase: 4.2 })
      }
    ]
  }
];

const reviews = [
  { name: 'Riya S.', rating: 5, text: 'The quality felt premium and the packaging was elegant. My pendant looked even better in person.', badge: 'Verified Purchase' },
  { name: 'Megha T.', rating: 4, text: 'Ordered a bridal set for a family function. Loved the finish and timely delivery. Definitely worth it.', badge: 'Verified Purchase' },
  { name: 'Ananya P.', rating: 5, text: 'The gold micron ring looks classy and dainty. I get compliments every time I wear it.', badge: 'Verified Purchase' },
  { name: 'Priya K.', rating: 4, text: 'Beautiful design, subtle luxury and honest pricing. Very happy with my purchase.', badge: 'Verified Purchase' }
];

const reasons = [
  ['500+ Happy Customers', 'Loved by women who want graceful everyday jewellery.'],
  ['3000+ Units Sold', 'Trusted by shoppers across cities and celebrations.'],
  ['Premium Quality', 'Crafted with polished finishes and secure packaging.'],
  ['Secure Payments', 'Protected checkout with a seamless shopping experience.']
];

const flatProducts = categories.flatMap((category) =>
  category.subcategories.flatMap((sub) => sub.products.slice(0, 4))
);

const heroImages = [
  'https://images.unsplash.com/photo-1617038220317-32175446a06d?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80'
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand-wrap">
            <span className="brand-mark">V</span>
            <div>
              <div className="brand-name">Veloura</div>
              <small>Fine Jewellery</small>
            </div>
          </div>

          <nav className="nav">
            <a href="#collection">Collection</a>
            <a href="#bestsellers">Best Sellers</a>
            <a href="#bridal">Bridal</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="cta-button">Shop Now</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-layout">
            <div className="hero-copy">
              <span className="eyebrow">Curated for everyday luxury</span>
              <h1>Jewellery that feels personal, refined and unforgettable.</h1>
              <p>
                Discover handcrafted designs in pendants, rings, earrings, bracelets and bridal sets made to glow with you.
              </p>

              <div className="hero-actions">
                <button className="cta-button">Explore Collection</button>
                <button className="secondary-button">Book Consultation</button>
              </div>

              <div className="stat-strip">
                <div>
                  <strong>500+</strong>
                  <span>Happy Customers</span>
                </div>
                <div>
                  <strong>3000+</strong>
                  <span>Units Sold</span>
                </div>
                <div>
                  <strong>4.4★</strong>
                  <span>Average Rating</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card primary">
                <img src={heroImages[0]} alt="Luxury jewellery" />
              </div>
              <div className="hero-card secondary">
                <img src={heroImages[1]} alt="Fine pendant" />
              </div>
              <div className="badge-tag">New Arrival</div>
            </div>
          </div>
        </section>

        <section className="trust-bar">
          <div className="container trust-row">
            <span>Premium Quality Guarantee</span>
            <span>Secure Payments</span>
            <span>Worldwide Shipping</span>
            <span>Easy Returns</span>
          </div>
        </section>

        <section id="collection" className="category-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Shop by category</span>
              <h2>Designed to match every moment</h2>
            </div>

            <div className="category-grid">
              {categories.map((category) => (
                <div key={category.title} className="category-tile">
                  <div className="category-icon">{category.title.charAt(0)}</div>
                  <h3>{category.title}</h3>
                  <ul>
                    {category.subcategories.map((item) => (
                      <li key={item.name}>{item.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="bestsellers" className="product-showcase">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Best sellers</span>
              <h2>Luxury favourites loved by our customers</h2>
            </div>

            <div className="product-grid">
              {flatProducts.map((product) => (
                <article key={product.id} className="product-card">
                  <div className="product-image-wrap">
                    <img src={product.image} alt={product.name} />
                    <span className="product-badge">{product.badge}</span>
                  </div>

                  <div className="product-body">
                    <div className="product-meta-row">
                      <span>{product.style}</span>
                      <span className="rating">{product.rating}★</span>
                    </div>

                    <h3>{product.name}</h3>
                    <p className="product-material">{product.material}</p>

                    <div className="price-row">
                      <strong>{product.price}</strong>
                      <span>{product.originalPrice}</span>
                    </div>

                    <div className="discount-row">
                      <span className="discount-pill">{product.discount}</span>
                      <small>{product.reviews}+ reviews</small>
                    </div>

                    <div className="product-actions">
                      <button>Add to Cart</button>
                      <button className="ghost">Buy Now</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="bridal" className="bridal-banner">
          <div className="container bridal-inner">
            <div className="bridal-copy">
              <span className="eyebrow">Bridal Signature</span>
              <h2>Celebrate life’s most precious moments with heirloom-worthy pieces.</h2>
              <p>
                Explore premium bridal jewellery designed for grand entrances, close family rituals and unforgettable wedding memories.
              </p>
              <button className="cta-button">Explore Bridal Collection</button>
            </div>

            <div className="bridal-gallery">
              <img src={heroImages[2]} alt="Bridal jewellery" />
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow">Why choose us</span>
              <h2>Luxury with trust at every step</h2>
            </div>

            <div className="features-grid">
              {reasons.map(([title, text]) => (
                <div key={title} className="feature-card">
                  <div className="feature-icon">✓</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="reviews-section">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow">Customer reviews</span>
              <h2>Real stories from happy customers</h2>
            </div>

            <div className="reviews-grid">
              {reviews.map((review) => (
                <div key={review.name} className="review-card">
                  <div className="review-header">
                    <div className="avatar">{review.name.charAt(0)}</div>
                    <div>
                      <h3>{review.name}</h3>
                      <span>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                    </div>
                  </div>
                  <p>{review.text}</p>
                  <small>{review.badge}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="newsletter">
          <div className="container newsletter-inner">
            <div>
              <span className="eyebrow">Stay connected</span>
              <h2>Get the latest drops and wedding styling ideas.</h2>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Join Now</button>
            </form>
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand-wrap footer-brand">
              <span className="brand-mark">V</span>
              <div>
                <div className="brand-name">Veloura</div>
                <small>Fine Jewellery</small>
              </div>
            </div>
            <p>Minimal luxury jewellery for everyday elegance and bridal brilliance.</p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#collection">Collections</a></li>
              <li><a href="#bestsellers">Best Sellers</a></li>
              <li><a href="#bridal">Bridal</a></li>
              <li><a href="#reviews">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h3>Customer Care</h3>
            <ul>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              <li>hello@veloura.com</li>
              <li>+91 98765 43210</li>
              <li>Mon-Sat, 10 AM - 7 PM</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
