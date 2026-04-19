import React from 'react'
function ContactSection() {
  return (
    <section id="contact" className="container">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your email" />
        <textarea rows="5" placeholder="Your message"></textarea>
        <input type="submit" value="Send Message" />
      </form>
    </section>
  )
}

export default ContactSection