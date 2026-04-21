import React from 'react'
const featured = [
  { name: 'Pokhara', image: '/images/pokhara.jpg' },
  { name: 'Kathmandu', image: '/images/kathmandu.jpg' },
  { name: 'Mustang', image: '/images/mustang.jpg' }
]

function FeaturedDestinations() {
  return (
    <section id="destinations">
      <h2 className="feature-destination">Featured Destinations</h2>

      <div className="destinations">
        {featured.map((item) => (
          <div className="destination" key={item.name}>
            <img src={item.image} alt={item.name} />
            <div className="destination-text">{item.name}</div>
          </div>
        ))}
      </div>

      <div className="destination-cards">
        {featured.map((item) => (
          <article className="destination-card" key={item.name}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Explore the beauty of {item.name} with amazing views and local culture.</p>
            <a href="#contact" className="btn">Book Now</a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturedDestinations