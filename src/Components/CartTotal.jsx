import React, { useContext } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'

const CartTotal = ({ customShippingFee = null }) => {
  const { currency, getCartAmount, getCartGST } = useContext(ShopContext)
  const subtotal = getCartAmount()
  const gstData = getCartGST()
  const shippingFee = customShippingFee !== null ? customShippingFee : null
  const total =
    subtotal === 0 ? 0 : subtotal + gstData.totalGST + (shippingFee !== null ? shippingFee : 0)

  return (
    <div className="border border-border-light bg-white p-6">
      <Title text1="Cart" text2="Total" />
      <div className="mt-6 space-y-3 text-sm text-text-secondary">
        <div className="flex items-center justify-between border-b border-border-light pb-3">
          <span>Subtotal</span>
          <span>
            {currency}
            {subtotal.toFixed(2)}
          </span>
        </div>
        {gstData.totalGST > 0 && (
          <div className="flex items-center justify-between border-b border-border-light pb-3">
            <span>GST Charges</span>
            <span>
              {currency}
              {gstData.totalGST.toFixed(2)}
            </span>
          </div>
        )}
        {shippingFee !== null && (
          <div className="flex items-center justify-between border-b border-border-light pb-3">
            <span>Shipping Fee</span>
            <span>
              {currency}
              {shippingFee.toFixed(2)}
            </span>
          </div>
        )}
        <div className="flex items-center justify-between pt-2 text-text-primary font-semibold">
          <span>Total</span>
          <span>
            {currency}
            {total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
