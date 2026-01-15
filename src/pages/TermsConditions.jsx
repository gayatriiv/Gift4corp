import React from 'react'

const TermsConditions = () => {
  return (
    <section className="border-t border-border-light">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-16">
        <h1 className="text-3xl font-semibold">Terms and Conditions</h1>
        <p className="text-xs uppercase tracking-[0.2em] text-text-tertiary mt-3">
          Last updated: 12-12-2025
        </p>

        <div className="mt-10 space-y-8 text-sm text-text-secondary leading-7">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">1. Agreement</h2>
            <p className="mt-3">
              By using Gift4corp services, you agree to these terms and our privacy policy.
              We may update terms periodically; please review them regularly.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">2. Use of Services</h2>
            <p className="mt-3">
              You agree to provide accurate information and remain responsible for activity
              on your account.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">3. Payments</h2>
            <p className="mt-3">
              You agree to pay charges associated with orders and services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">4. Intellectual Property</h2>
            <p className="mt-3">
              All content on the site is proprietary and may not be reproduced without
              permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">5. Limitation of Liability</h2>
            <p className="mt-3">
              Services are provided as-is without warranties to the extent permitted by law.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">6. Governing Law</h2>
            <p className="mt-3">
              These terms are governed by the laws of India, with exclusive jurisdiction in
              Bengaluru, Karnataka.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TermsConditions
