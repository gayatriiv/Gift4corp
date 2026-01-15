import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="h-12 w-12 rounded-full border-2 border-border-light border-t-brand-black animate-spin" />
    </div>
  )
}

export default LoadingSpinner
