import React, { useContext, useEffect, useState } from 'react'
import { Trash2 } from 'lucide-react'
import { ShopContext } from '../context/ShopContext'
import Title from '../Components/Title.jsx'
import CartTotal from '../Components/CartTotal.jsx'
import PincodeChecker from '../Components/PincodeChecker.jsx'

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])
  const [shippingFee, setShippingFee] = useState(null)

  useEffect(() => {
    const hasItems = Object.values(cartItems).some((itemGroup) =>
      Object.values(itemGroup).some((qty) => qty > 0)
    )
    if (!hasItems) {
      navigate('/')
    }
  }, [cartItems, navigate])

  useEffect(() => {
    if (products.length === 0) return
    const tempData = []

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          })
        }
      }
    }

    setCartData(tempData)
  }, [cartItems, products])

  return (
    <section className="border-t border-border-light">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <Title text1="Your" text2="Cart" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
          <div className="space-y-6">
            {cartData.map((item) => {
              const productData = products.find((product) => product._id === item._id)
              if (!productData) return null

              let itemPrice = productData.price
              let availableStock = productData.quantity || 0

              if (productData.sizeVariants && productData.sizeVariants.length > 0) {
                const sizeVariant = productData.sizeVariants.find((v) => v.size === item.size)
                if (sizeVariant) {
                  itemPrice = sizeVariant.price
                  availableStock = sizeVariant.quantity
                }
              }

              return (
                <div
                  key={`${item._id}-${item.size}`}
                  className="border border-border-light bg-white p-5 flex flex-col md:flex-row md:items-center gap-6"
                >
                  <img
                    className="w-24 h-24 object-cover border border-border-light"
                    src={productData.image[0]}
                    alt={productData.name}
                  />

                  <div className="flex-1">
                    <p className="text-sm font-semibold uppercase tracking-wide">
                      {productData.name}
                    </p>
                    <div className="mt-2 flex items-center gap-4 text-sm text-text-secondary">
                      <span>
                        {currency}
                        {itemPrice}
                      </span>
                      <span className="border border-border-light px-3 py-1 text-xs uppercase tracking-[0.2em]">
                        {item.size}
                      </span>
                    </div>
                    {availableStock < 10 && availableStock > 0 && (
                      <p className="text-xs text-text-tertiary mt-2">
                        Only {availableStock} left in stock
                      </p>
                    )}
                    {availableStock === 0 && (
                      <p className="text-xs text-text-tertiary mt-2">Out of stock</p>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <input
                      onChange={(e) => {
                        const value = Number(e.target.value)
                        if (e.target.value === '' || value === 0) return
                        if (value > availableStock) {
                          e.target.value = item.quantity
                          return
                        }
                        updateQuantity(item._id, item.size, value)
                      }}
                      className="border border-border-light px-2 py-1 w-16 text-sm"
                      type="number"
                      min={1}
                      max={availableStock}
                      defaultValue={item.quantity}
                    />
                    <button
                      type="button"
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                      className="h-10 w-10 border border-border-light flex items-center justify-center"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4 text-text-tertiary" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="space-y-6">
            <PincodeChecker
              productWeight={0.5}
              onServiceabilityCheck={(result) => {
                if (result && result.available && result.shipping_fee) {
                  setShippingFee(result.shipping_fee)
                } else if (result && result.available) {
                  setShippingFee(100)
                } else {
                  setShippingFee(null)
                }
              }}
            />
            <div>
              <CartTotal customShippingFee={shippingFee} />
              <button
                type="button"
                onClick={() => navigate('/place-order')}
                className="mt-6 w-full bg-brand-black text-brand-white py-3 text-button"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
