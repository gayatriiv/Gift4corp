import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Search, X, ArrowRight } from 'lucide-react'
import { ShopContext } from '../context/ShopContext'

const SearchOverlay = () => {
  const { search, setSearch, showSearch, setShowSearch, products, navigate, currency } =
    useContext(ShopContext)
  const [results, setResults] = useState([])

  const trimmedQuery = useMemo(() => search.trim().toLowerCase(), [search])

  useEffect(() => {
    if (!trimmedQuery) {
      setResults([])
      return
    }

    const filtered = products
      .filter((item) => item.name?.toLowerCase().includes(trimmedQuery))
      .slice(0, 8)
    setResults(filtered)
  }, [products, trimmedQuery])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowSearch(false)
      }
    }

    if (showSearch) {
      document.addEventListener('keydown', onKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [showSearch, setShowSearch])

  const handleSelect = (product) => {
    navigate(`/product/${product._id}`)
    setShowSearch(false)
    setSearch('')
  }

  if (!showSearch) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between pt-8 sm:pt-12">
          <p className="text-caption text-text-secondary">Search</p>
          <button
            type="button"
            onClick={() => setShowSearch(false)}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-text-tertiary hover:text-text-primary transition"
          >
            Close
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 border-b border-border-dark pb-4 flex items-center gap-3">
          <Search className="h-5 w-5 text-text-secondary" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full bg-transparent text-xl sm:text-2xl font-semibold uppercase tracking-tight outline-none placeholder:text-text-tertiary"
            type="text"
            placeholder="Search products"
            autoFocus
          />
        </div>

        <div className="mt-10">
          {trimmedQuery ? (
            results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {results.map((product) => (
                  <button
                    key={product._id}
                    type="button"
                    onClick={() => handleSelect(product)}
                    className="flex items-center gap-4 border border-border-light bg-white hover:border-border-dark transition p-4 text-left"
                  >
                    <div className="h-16 w-16 bg-brand-cream overflow-hidden">
                      {product.image?.[0] && (
                        <img
                          src={product.image[0]}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold uppercase tracking-wide text-text-primary line-clamp-2">
                        {product.name}
                      </p>
                      <p className="text-sm text-text-secondary mt-1">
                        {currency}
                        {product.price}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-text-tertiary" />
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-sm text-text-secondary">No products found.</p>
            )
          ) : (
            <p className="text-sm text-text-secondary">
              Start typing to discover products.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchOverlay
