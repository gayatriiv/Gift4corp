import React, { useContext, useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { ShopContext } from '../context/ShopContext'

const Contact = () => {
  const { backendURL } = useContext(ShopContext)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    location: '',
    organisation: '',
    info: '',
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('')
    setIsSubmitting(true)

    try {
      const res = await fetch(`${backendURL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('Message sent successfully.')
        setForm({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          location: '',
          organisation: '',
          info: '',
        })
      } else {
        setStatus(data.error || 'Failed to send message.')
      }
    } catch {
      setStatus('Failed to send message.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="border-t border-border-light">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">
          <div>
            <p className="text-caption text-text-tertiary">Contact</p>
            <h1 className="text-3xl font-semibold mt-3">Start Your Project</h1>
            <p className="text-text-secondary mt-4">
              Share your gifting requirements and our team will respond with a curated plan.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="border border-border-light px-3 py-2 text-sm"
                  placeholder="First name"
                />
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="border border-border-light px-3 py-2 text-sm"
                  placeholder="Last name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="border border-border-light px-3 py-2 text-sm"
                  placeholder="Phone"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="border border-border-light px-3 py-2 text-sm"
                  placeholder="Email"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="border border-border-light px-3 py-2 text-sm"
                  placeholder="Location"
                />
                <input
                  type="text"
                  name="organisation"
                  value={form.organisation}
                  onChange={handleChange}
                  className="border border-border-light px-3 py-2 text-sm"
                  placeholder="Organisation"
                />
              </div>

              <textarea
                name="info"
                value={form.info}
                onChange={handleChange}
                rows="4"
                className="border border-border-light px-3 py-2 text-sm w-full"
                placeholder="Project details"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-black text-brand-white py-3 text-button disabled:bg-border-medium"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {status && (
                <p className="text-sm text-text-secondary border border-border-light bg-brand-cream px-3 py-2">
                  {status}
                </p>
              )}
            </form>
          </div>

          <div className="bg-brand-black text-brand-white p-8">
            <p className="text-caption text-white/70">Get In Touch</p>
            <h2 className="text-xl font-semibold mt-4">Contact Information</h2>
            <div className="mt-6 space-y-4 text-sm text-white/80">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+919620044401" className="hover:text-white">
                  +91 9620044401
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:sales@gifts4corp.com" className="hover:text-white">
                  sales@gifts4corp.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Bangalore, India</span>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-white/60">
              Mon - Sat: 9 AM - 6 PM IST
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
