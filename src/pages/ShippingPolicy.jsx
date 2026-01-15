import React from 'react'

const ShippingPolicy = () => {
  return (
    <section className="border-t border-border-light">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-16">
        <h1 className="text-3xl font-semibold">Shipping Policy</h1>
        <p className="text-xs uppercase tracking-[0.2em] text-text-tertiary mt-3">
          Last updated: 12-12-2025
        </p>

        <div className="mt-10 space-y-8 text-sm text-text-secondary leading-7">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">1. Shipping Locations</h2>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>We currently ship only within India.</li>
              <li>International shipping is not available at this time.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">2. Delivery Timeline</h2>
            <p className="mt-3">
              Orders are typically delivered within 7-10 business days. Delivery timelines
              may vary based on product type, customization, and destination.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">3. Order Processing</h2>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Orders are processed after payment confirmation.</li>
              <li>Tracking details will be shared when available.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">4. Shipping Charges</h2>
            <p className="mt-3">
              Shipping charges, if applicable, are shown during checkout and are
              non-refundable.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">5. Delays</h2>
            <p className="mt-3">
              Delays may occur due to courier issues, weather, or regional restrictions.
              We will assist where possible if delays occur.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">6. Contact</h2>
            <p className="mt-3">
              Email: <a className="text-text-primary" href="mailto:sales@gifts4corp.com">sales@gifts4corp.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShippingPolicy
