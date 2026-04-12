import React, { useState } from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { z } from 'zod'

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters long'),
  email: z.string().email('Please enter a valid email address'),
  travelDate: z.string().min(1, 'Please select a travel date')
})

function FormPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    travelDate: ''
  })

  const [errors, setErrors] = useState({})
  const [responseData, setResponseData] = useState(null)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrors({})
    setMessage('')
    setResponseData(null)

    const result = formSchema.safeParse(formData)

    if (!result.success) {
      const newErrors = {}

      result.error.issues.forEach((issue) => {
        newErrors[issue.path[0]] = issue.message
      })

      setErrors(newErrors)
      return
    }

    try {
      setLoading(true)

      const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      const data = await response.json()
      setResponseData(data)
      setMessage('Form submitted successfully')
    } catch (error) {
      console.error(error)
      setMessage('Something went wrong while submitting the form')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <TopBar />
      <Navbar />

      <main className="form-page">
        <h1 className="form-title">Booking Form</h1>

        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <p className="error-text">{errors.fullName}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Travel Date</label>
            <input
              type="date"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
            />
            {errors.travelDate && <p className="error-text">{errors.travelDate}</p>}
          </div>

          <button type="submit" className="form-button" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        {message && (
          <p style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}>
            {message}
          </p>
        )}

        {responseData && (
          <div className="response-box">
            <h2 style={{ marginBottom: '15px', textAlign: 'center' }}>Response from httpbin</h2>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}

export default FormPage