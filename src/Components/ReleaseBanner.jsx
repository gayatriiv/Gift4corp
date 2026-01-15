import React from 'react'
import { Link } from 'react-router-dom'

const ReleaseBanner = () => {
  return (
    <section className="full-bleed bg-accent text-brand-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6 sm:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="text-caption">New Release</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            2026 Corporate Essentials Edit
          </h2>
        </div>
        <Link
          to="/collection"
          className="border border-brand-black px-6 py-3 text-button hover:bg-brand-black hover:text-white transition"
        >
          Explore the Drop
        </Link>
      </div>
    </section>
  )
}

export default ReleaseBanner
