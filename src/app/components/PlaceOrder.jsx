import { ShoppingCart } from 'lucide-react'
import React from 'react'

export default function PlaceOrder() {
  return (
    <div className="min-h-screen mt-20 w-full bg-gradient-to-r from-[#e6e6f2] via-[#f1b6d8] to-[#f57bb2] px-6 py-10">
      
     
      <h1 className="text-center py-5 text-2xl md:text-3xl font-bold mb-10 bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
        তাই আর দেরি না করে আজই অর্ডার করুন
      </h1>

      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
       
        <div className='mx-7'>
         
          <h2 className="text-xl font-semibold font-['Times_New_Roman',serif]  mb-4">Billing details</h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="আপনার নাম লিখুন *"
              className="w-full text-sm bg-white rounded-lg px-4 py-3 outline-none"
            />
            <input
              type="text"
              placeholder="আপনার মোবাইল নাম্বার লিখুন *"
              className="w-full text-sm bg-white rounded-lg px-4 py-3 outline-none"
            />
            <input
              type="text"
              placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন *"
              className="w-full text-sm bg-white rounded-lg px-4 py-3 outline-none"
            />
          </div>

          {/* Payment */}
          <div className="mt-10 w-[280px] bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 font-['Times_New_Roman',serif]">Payment</h3>

            <label className="flex items-center gap-2 mb-4">
              <input type="checkbox" defaultChecked className="accent-pink-500 " />
              <span className='italic'>ক্যাশ অন ডেলিভারি</span>
            </label>

            <button className="w-full py-3 rounded-lg text-white font-medium bg-gradient-to-r from-pink-500 to-blue-500">
              Pay with cash on delivery.
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='w-[400px]'>
          <h2 className="text-xl  font-semibold font-['Times_New_Roman',serif] mb-4">Your order</h2>

          <div className="bg-pink-300/40 rounded-xl border border-white/40 overflow-hidden">
            
            {/* Header */}
            <div className="flex text-sm font-['Times_New_Roman',serif] justify-between px-6 py-4 font-semibold">
              <span>Product</span>
              <span>Subtotal</span>
            </div>

            {/* Product */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-white/40">
              <div className="flex items-center gap-3">
                <img src="/product.svg" alt="Product" className="w-12 h-12 rounded-md" />
                <div className="text-sm text-gray-500 font-['Times_New_Roman',serif]">
                  Flower Of Story <br />
                  Men’s Perfume Set <br />
                  Boss
                </div>
              </div>
              <span>৳ 1,690</span>
            </div>

            {/* Subtotal */}
            <div className="flex text-sm font-['Times_New_Roman',serif] justify-between px-6 py-4 border-t border-white/40">
              <span>Subtotal</span>
              <span>1,690.00</span>
            </div>

            {/* Shipping */}
            <div className="px-6 font-['Times_New_Roman',serif] text-sm py-4 border-t border-white/40">
              <p className="mb-2">Shipping</p>
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="shipping" defaultChecked />
                Inside Dhaka : ৳ 60.00
              </label>
              <label className="flex items-center gap-2 text-sm mt-1">
                <input type="radio" name="shipping" />
                Outside Dhaka : ৳ 100.00
              </label>
            </div>

            {/* Total */}
            <div className="flex font-['Times_New_Roman',serif] text-sm justify-between px-6 py-4 border-t border-white/40 font-semibold">
              <span>Total</span>
              <span>1,690.00</span>
            </div>
          </div>

          {/* Place Order */}
          <button className="mt-6 w-full py-4 rounded-lg bg-[#ff4d6d] text-white font-semibold flex items-center justify-center gap-2">
            <ShoppingCart className="w-5 h-5" /> Place Order BDT 1,690.00
          </button>
        </div>

      </div>
    </div>
  )
}
