'use client';
import React, { useEffect } from 'react'
import Link from 'next/link';
import { usePopup } from '@/utils/PopupProviderHook'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPaypal } from "react-icons/fa";
import { FiX } from "react-icons/fi"; // close icon

const PaymentPopup = () => {
  const { isOpen, closePopup } = usePopup();

  // ✅ Prevent background scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[1000]"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="relative bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl p-8 w-[350px] text-center text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-white/70 hover:text-white transition cursor-pointer"
              aria-label="Close popup"
            >
              <FiX className="w-6 h-6" />
            </button>

            <h2 className="text-xl font-semibold mb-4">💳 Payment Options UPI</h2>

            <div className="flex justify-center mb-3">
              <img
                src="/qr.jpeg"
                alt="payment-qr"
                className="rounded-lg shadow-md w-40 h-40 object-cover"
              />
            </div>

            <span className="block my-2 text-white/70">Or</span>

            <div className="mt-3 flex justify-center items-center gap-2">
              Pay with&nbsp;
              <Link
                href="https://paypal.me/ghost123fortnite"
                target="_blank"
                className="btn bg-white font-extrabold text-blue-800 flex justify-center items-center border hover:scale-95 italic border-white/30 hover:border-white/50 transition px-3 py-1 rounded-md"
              >
                <FaPaypal className="size-4" /> &nbsp;Pay
                <span className="text-blue-500">Pal</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaymentPopup;
