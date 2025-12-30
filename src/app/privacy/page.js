'use client';
import React from 'react';

const page = () => {

  return (
    <section className='relative overflow-hidden bg-black'>
      <div className="max-w-6xl mx-auto pt-24 pb-20">
       <div className='px-12 text-center text-white'>
         <h1 className='text-lg md:text-xl font-semibold'>Privacy Policy for Nextom Studio</h1>
         <h2 className='text-xl md:text-3xl font-bold my-6'>Where innovation <span className='bg-gradient-to-r from-primary-aqua to-secondary-blue bg-clip-text text-transparent'>meets confidentiality.</span></h2>
         <p>Through this page, we are informing our website visitors about the policies regarding collecting, disclosure, and using personal information, if anyone decides to use our services. <br />Types of information we are collecting:
         </p>
       </div>
        <div className="shadow-md rounded-xl p-8 mt-10">
              <div className="grid gap-8">
          <div className="p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white mb-4">
              1. Collection of Personal Information
            </h3>
            <p className="leading-relaxed text-white/70">
             Nextomstudio.com collects your confidential data and personal information when you visit our website. The data is collected through multiple forms such as contact us form, newsletter sign-up, and career form. The details include your name, phone number, email address. We only collect information which is willingly and voluntarily submitted by the users on the website. 
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white mb-4">
              2. Purpose of Collecting User Information
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>
               We use the collected information on nextomstudio.com to improve the website’s services. This data will help us:
              </li>
              <li>
                Improve the website experience for visitors by requesting feedback and ratings.
              </li>
              <li>
               Resolve payment-related issues and queries.
              </li>
              <li>
                Protecting visitor’s information
              </li>
            </ul>
            <p className="mt-3 text-sm text-white/70">
              Nextom Studio uses ethical methods to protect the visitor’s data. We thoroughly check our complete website to make sure it is audited for security vulnerabilities and breaches. We don’t share or sell your personal information with any third-party entities. Your data is used exclusively to provide and improve our services. 
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white mb-4">
              3. Collection of Non-Personal User Information
            </h3>
            <p className="leading-relaxed text-white/70">
            We occasionally collect system and computer-related information from the visitors when the user visits the website. The details will include the type of browser used to access the site, computer system configuration, internet service provider details and connection type.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white mb-4">
              4. Use of Cookies
            </h3>
            <p className="leading-relaxed text-white/70">
             Nextom Studio uses cookies to give the best user experience and services to the website visitors. The visitors have a choice to accept or decline the cookies. These cookies will help us keep a track of new and returning visitors.
            </p>
          </div>
            <div className="p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white mb-4">
            Updates to Our Policy
            </h3>
            <p className="leading-relaxed text-white/70">
             This Privacy Policy may be updated periodically to reflect changes in our practices. We advise you to review this page occasionally to stay informed. Any changes become effective immediately upon being posted.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default page