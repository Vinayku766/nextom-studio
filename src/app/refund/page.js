'use client';
import React from 'react';

const page = () => {

  return (
    <section className='relative overflow-hidden bg-black'>
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent/80 pointer-events-none"></div> */}
      <div className="max-w-6xl mx-auto pt-24 pb-20">
       <div className='px-12 text-center text-white'>
         <h1 className='text-lg md:text-xl font-semibold'>Refund & Cancellation Policy</h1>
         <h2 className='text-xl md:text-3xl font-bold my-6'>Creative Work, <span className='bg-gradient-to-r from-primary-aqua to-secondary-blue bg-clip-text text-transparent'>Transparent Terms.</span></h2>
         <p>At Nextom Studio, we are committed to delivering high-quality services at fair and transparent prices. {<br />} Our goal is to ensure that every client is satisfied with the work we provide. Following are the policies regarding payment: 
         </p>
       </div>
        <div className="shadow-md rounded-xl p-8 mt-10">
              <div className="grid gap-8">
          {/* Advance Payment */}
          <div className="p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white mb-4">
              1. Advance Payment
            </h3>
            <p className="leading-relaxed text-white/70">
              For all services (Video Production, Editing, Graphic Designing,
              Influencer Marketing, etc.), we require{" "}
              <span className="font-medium text-white/70">50% advance payment</span>{" "}
              at the time of confirming the purchase order. Work begins only
              after the advance payment is received.
            </p>
          </div>

          {/* Cancellations & Refunds */}
          <div className="p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white mb-4">
              2. Cancellations & Refunds
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>
                If the project is <span className="font-medium">not yet started</span>,
                you’ll be eligible for a complete refund.
              </li>
              <li>
                If the project is <span className="font-medium">less than 50% complete</span>,
                you may be eligible for a partial refund.
              </li>
              <li>
                If the project is <span className="font-medium">more than 50% complete</span>,
                refunds may not apply, unless otherwise specified in the contract.
              </li>
            </ul>
            <p className="mt-3 text-white/70">
              The exact refund amount will be clearly communicated and documented in
              the agreement before the work begins.
            </p>
          </div>

          {/* Refund Processing */}
          <div className="p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white mb-4">
              3. Refund Processing
            </h3>
            <p className="leading-relaxed text-white/70">
              If a refund is approved by our team, it will be processed within{" "}
              <span className="font-medium">5-8 working days</span> and credited to the{" "}
              <span className="font-medium">original payment method</span>. A small
              service fee or percentage of the order value may be retained to cover
              resources, time, and workforce invested in your project.
            </p>
          </div>

          {/* Company Rights */}
          <div className="p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white mb-4">
              4. Company Rights
            </h3>
            <p className="leading-relaxed text-white/70">
              We reserve the right to withhold or cancel any order if it does not
              align with our real-time policies or business values. In such cases,
              our representative will contact you through your registered email ID
              and/or phone number to resolve the matter.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default page