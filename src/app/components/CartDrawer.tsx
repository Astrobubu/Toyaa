"use client";

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cart, removeFromCart, updateQuantity, cartTotal, discount, finalTotal, cartCount } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleCheckout = () => {
    const orderItems = cart.map(i => `${i.name} x${i.quantity} (${i.price * i.quantity} AED)`).join("\n");
    const message = `Hello! I would like to order:\n\n${orderItems}\n\nTotal: ${cartTotal} AED\nDiscount: -${discount} AED\nFinal Total: ${finalTotal} AED\n\nCustomer Details:\nName: ${name || "Not provided"}\nPhone: ${phone || "Not provided"}\nAddress: ${address || "Not provided"}\n\nI understand I will receive a payment link to complete this order.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/971558812252?text=${encoded}`, "_blank");
  };

  return (
    <div className={`fixed inset-0 z-[100] overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      <div className={`absolute inset-y-0 right-0 max-w-full flex transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="w-screen max-w-md bg-white shadow-xl flex flex-col">
          <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
            <div className="flex items-start justify-between">
              <h2 className="text-2xl font-bold text-[#1b1464]">Shopping Cart ({cartCount})</h2>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500"
                onClick={onClose}
              >
                <span className="sr-only">Close panel</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-8">
              {cart.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg">Your cart is empty.</p>
                </div>
              ) : (
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {cart.map((product) => (
                      <li key={product.id} className="py-6 flex">
                        <div className="relative flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden bg-gray-50">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="ml-4 flex-1 flex flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{product.name}</h3>
                              <p className="ml-4">{product.price * product.quantity} AED</p>
                            </div>
                          </div>
                          <div className="flex-1 flex items-end justify-between text-sm">
                            <div className="flex items-center gap-3">
                              <button 
                                onClick={() => updateQuantity(product.id, product.quantity - 1)}
                                className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                              >
                                -
                              </button>
                              <span className="font-bold text-lg">{product.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(product.id, product.quantity + 1)}
                                className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>

                            <div className="flex">
                              <button
                                type="button"
                                onClick={() => removeFromCart(product.id)}
                                className="font-medium text-[#e8453a] hover:text-red-600"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {cart.length > 0 && (
            <div className="border-t border-gray-200 py-6 px-4 sm:px-6 bg-gray-50">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-1">
                <p>Subtotal</p>
                <p>{cartTotal} AED</p>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-sm font-medium text-[#e8453a] mb-1">
                  <p>Bulk Discount (10%)</p>
                  <p>-{discount} AED</p>
                </div>
              )}
              <div className="flex justify-between text-xl font-bold text-[#1b1464] mt-2 mb-4">
                <p>Total</p>
                <p>{finalTotal} AED</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500 mb-4">
                Shipping and taxes calculated via WhatsApp.
              </p>
              
              <div className="mt-4 space-y-4 text-left">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1b1464] focus:ring-[#1b1464] sm:text-sm p-2.5 border" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1b1464] focus:ring-[#1b1464] sm:text-sm p-2.5 border" placeholder="+971 50 123 4567" />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                  <textarea id="address" value={address} onChange={e => setAddress(e.target.value)} rows={2} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1b1464] focus:ring-[#1b1464] sm:text-sm p-2.5 border" placeholder="City, Area, Street, Building, Apartment"></textarea>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 text-blue-800 p-3 rounded-lg text-sm mt-4">
                  <strong>Note:</strong> After sending this message, you will receive a secure payment link via WhatsApp to complete your order.
                </div>

                <button
                  onClick={handleCheckout}
                  className="flex justify-center items-center px-6 py-4 border border-transparent rounded-2xl shadow-sm text-lg font-bold text-white bg-[#e8453a] hover:bg-red-600 w-full mt-4"
                >
                  Order via WhatsApp
                </button>
              </div>
              <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                <p>
                  or{" "}
                  <button
                    type="button"
                    className="text-[#1b1464] font-medium hover:text-[#e8453a]"
                    onClick={onClose}
                  >
                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
