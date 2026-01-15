import React from 'react'

const ReturnsRefunds = () => {
  return (
    <section className="border-t border-border-light">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-16">
        <h1 className="text-3xl font-semibold">Returns and Refunds</h1>
        <p className="text-xs uppercase tracking-[0.2em] text-text-tertiary mt-3">
          Last updated: 12-12-2025
        </p>

        <div className="mt-10 space-y-8 text-sm text-text-secondary leading-7">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">1. Returns</h2>
            <p className="mt-3">
              Returns are accepted within 15 days of purchase. Items must be unused,
              in original packaging, and accompanied by proof of purchase.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">2. Refunds</h2>
            <p className="mt-3">
              Once your return is inspected, approved refunds are processed to the
              original payment method within 25-30 business days.
            </p>
            <p className="mt-3">
              If you have not received a refund, check with your bank or payment
              provider. For support, email sales@gifts4corp.com.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">3. Exchanges</h2>
            <p className="mt-3">
              Exchanges are available only for defective or damaged items. Please
              contact us before sending any products.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">4. Return Shipping</h2>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Return shipping costs are the responsibility of the customer.</li>
              <li>Shipping fees are non-refundable.</li>
              <li>Delivery timelines vary by location.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReturnsRefunds
