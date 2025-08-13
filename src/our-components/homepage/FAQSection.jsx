'use client'
import { FiChevronDown } from 'react-icons/fi'


const faqData = [
  {
    question: "How do revisions work?",
    answer:
      "We include structured review rounds with time‑stamped comments. Minor tweaks under 20 minutes are free.",
  },
  {
    question: "Can you edit from phone footage?",
    answer:
      "Yes. We stabilize, denoise, and upscale where possible, then color‑match to your brand palette.",
  },
  {
    question: "Do you handle thumbnails and captions?",
    answer:
      "Absolutely—thumbnail design and burned‑in captions are available on Pro and Studio plans.",
  },
  {
    question: "What about raw file transfer?",
    answer:
      "We share a Drive/Dropbox folder or an S3 bucket. Proxies are generated automatically for smooth review.",
  },
]

const FAQSection = () => {
  return (
    <section id="faq" className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Frequently Asked Questions &nbsp;?
        </h2>

        {/* FAQ Accordion */}
              <div className="space-y-4">
          {faqData.map((faq, i) => (
            <details
              key={i}
              className="group border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 transition-all"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none text-white font-medium text-lg">
                <span>{faq.question}</span>
                <FiChevronDown className="w-5 h-5 text-white transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-white/80 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection


