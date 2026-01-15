import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-caption text-text-tertiary">{text1}</span>
      <span className="text-sm uppercase tracking-[0.2em] text-text-primary font-semibold">
        {text2}
      </span>
      <span className="h-px w-10 bg-border-dark" />
    </div>
  )
}

export default Title
