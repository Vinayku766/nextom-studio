'use client';
import React from 'react';

const page = () => {

    const sections = [
    {
      id: 1,
      title: "Eligibility",
      content: `By accessing nextomstudio.com, you confirm that you are of legal age to access and use the services, content, and products available on this Website.`,
    },
    {
      id: 2,
      title: "Use of Content",
      content: `By using this Website, you agree not to copy, reproduce, repurpose, reprint, or misuse any information, design, video, or content available on our Website without prior written permission.`,
    },
    {
      id: 3,
      title: "Pricing & Services",
      content: `Nextom Studio reserves the right to revise the pricing of services at any time. We may also discontinue or modify any service without prior notice. Pricing may vary depending on the type of service chosen (Video Production, Editing, Graphic Designing, Influencer Marketing, etc.) and the resources required.`,
    },
    {
      id: 4,
      title: "External Links",
      content: `Our Website may include links to third-party websites for informational purposes. However, Nextom Studio has no control over these websites and is not responsible for their content, accuracy, or services. We do not endorse any product or service offered on third-party platforms.`,
    },
    {
      id: 5,
      title: "Cancellation & Refunds",
      content: `If you are unsatisfied with your order, cancellations may be made as per our Refund & Cancellation Policy. Refund eligibility will be communicated in writing and mentioned in the contract/agreement prior to starting the project. Approved refunds will be processed within 5–8 working days. A service fee or percentage of the order value may be retained to cover resources and workforce already invested.`,
    },
    {
      id: 6,
      title: "Project Approval & Deliverables",
      content: `We create and share scripts for client approval before proceeding with video production. Once a script is approved, and the video is created based on that approval, the client remains liable for the agreed payment—even if they later reject the content. Two rounds of video revision may be offered, subject to conditions. No reshoots are included—only editing revisions are provided.`,
    },
    {
      id: 7,
      title: "Engagement & Performance Disclaimer",
      content: `Our goal is to deliver high-quality videos and creative content that enhance branding, brand awareness, and engagement. While our work can support marketing and social commerce growth, we do not guarantee 100% sales or conversions. Nextom Studio does not endorse fake followers, likes, comments, or engagement. We work ethically to create organic results.`,
    },
    {
      id: 8,
      title: "Timelines & Requests",
      content: `Clients must provide 15 days prior notice for new video requests or plan changes, as we manage multiple projects in our pipeline. Last-minute requests may not be entertained.`,
    },
    {
      id: 9,
      title: "Prohibited Use",
      content: (
        <ul className="list-disc pl-6 space-y-1">
          <li>Engage in illegal activities or actions against the law.</li>
          <li>Violate the intellectual property rights of individuals or organizations.</li>
          <li>
            Share offensive, abusive, or hateful comments that may hurt the
            sentiments of any religion, caste, creed, sexual orientation,
            nationality, age, or gender.
          </li>
        </ul>
      ),
    },
    {
      id: 10,
      title: "Accuracy of Information",
      content: `Although we strive to provide accurate and updated content, Nextom Studio does not guarantee that all information, data, or content on this Website is 100% error-free, reliable, or complete.`,
    },
    {
      id: 11,
      title: "Limitation of Liability",
      content: `The directors, employees, affiliates, and service providers of Nextom Studio are not responsible for any business loss, harm, or damages arising from the use of our services, products, or information. By agreeing to these Terms, you release Nextom Studio, its employees, and representatives from any claims, warranties, or liabilities.`,
    },
    {
      id: 12,
      title: "Contact Us",
      content: (
        <p>
          For queries regarding these Terms & Conditions, you may reach us at:
          <br />
          <a
            href="mailto:nextomstudio@gmail.com"
            className="text-indigo-600"
          >
            ✉️ nextomstudio@gmail.com
          </a>
          <br />
          <a
            href="tel:+919315084010"
            className="text-indigo-600"
          >
            📞 +91 9315084010
          </a>
        </p>
      ),
    },
  ];

  return (
    <section className='relative overflow-hidden bg-black'>
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent/80 pointer-events-none"></div> */}
      <div className="max-w-6xl mx-auto pt-24 pb-20">
       <div className='px-12 text-center text-white'>
         <h1 className='text-lg md:text-xl font-semibold'>Terms and Conditions</h1>
         <h2 className='text-xl md:text-3xl font-bold my-6'>We abide <span className='bg-gradient-to-r from-primary-aqua to-secondary-blue bg-clip-text text-transparent'>by These Rules</span></h2>
         <p>Welcome to Nextom Studio. Visitors are requested to carefully read these Terms and Conditions before using www.nextomstudio.com (“Website”). Your access to and use of our services are subject to your acceptance and compliance with these terms. <br />
            All the terms apply to all visitors, users, and clients who wish to access or use our services. By visiting this website, you voluntarily agree to be bound by these Terms. If you disagree with any part of these Terms, please discontinue the use of our Website and Services immediately. We encourage all visitors to review this page periodically for the latest version of our Terms.
         </p>
       </div>
        <div className="bg-white shadow-md rounded-xl p-8 mt-10">
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.id}>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {section.id}. {section.title}
              </h2>
              <div className="text-gray-700 text-sm leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}

export default page