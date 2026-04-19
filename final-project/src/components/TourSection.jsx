import React from 'react'
const tours = [
  {
    title: 'Mountain Adventure',
    image: '/images/tour1.jpg',
    text: 'Enjoy hiking and amazing mountain scenery.'
  },
  {
    title: 'City Discovery',
    image: '/images/tour2.jpg',
    text: 'Visit historical places and local markets.'
  },
  {
    title: 'Nature Escape',
    image: '/images/tour3.jpg',
    text: 'Relax with lakes, hills, and peaceful landscapes.'
  }
]

function TourSection() {
  return (
    <section id="tours">
      <h2 className="tour-destination">Popular Tours</h2>

      <div className="card-container">
        {tours.map((tour) => (
          <article className="card" key={tour.title}>
            <img src={tour.image} alt={tour.title} />
            <h2>{tour.title}</h2>
            <p>{tour.text}</p>
            <div className="rating">★★★★★</div>
            <button>Read More</button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TourSection