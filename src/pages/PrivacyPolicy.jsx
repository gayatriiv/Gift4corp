import React from 'react'

const PrivacyPolicy = () => {
  return (
    <section className="border-t border-border-light">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-16">
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
        <p className="text-xs uppercase tracking-[0.2em] text-text-tertiary mt-3">
          Last updated: 12-30-2023
        </p>

        <div className="mt-10 space-y-8 text-sm text-text-secondary leading-7">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">1. Information We Collect</h2>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Contact details such as name, email address, and phone number.</li>
              <li>Billing and shipping details for order fulfillment.</li>
              <li>Company information, preferences, and transaction history.</li>
              <li>Device data, IP address, browser type, and cookies.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">2. How We Use Information</h2>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Process and fulfill orders.</li>
              <li>Communicate about orders, updates, and support.</li>
              <li>Improve products, services, and website performance.</li>
              <li>Personalize the shopping experience.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">3. Sharing Information</h2>
            <p className="mt-3">
              We may share data with trusted service providers for fulfillment, payment
              processing, and operational support, or when required by law.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">4. Your Choices</h2>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Update account information at any time.</li>
              <li>Opt out of marketing communications.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">5. Security</h2>
            <p className="mt-3">
              We take reasonable measures to protect information from unauthorized access
              or misuse.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">6. Cookies</h2>
            <p className="mt-3">
              Cookies help improve browsing experiences. You can manage preferences in your
              browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">7. Contact</h2>
            <p className="mt-3">
              Email: <a className="text-text-primary" href="mailto:sales@gifts4corp.com">sales@gifts4corp.com</a>
            </p>
            <p>
              Phone: <a className="text-text-primary" href="tel:+919620044002">+91-9620044002</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy
