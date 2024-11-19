import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { HiMinusSmall } from "react-icons/hi2";

const faqs = [
  {
    id: 1,
    question: "Why organic farming?",
    answer:
      "Organic food production eliminates soil and water contamination. Since organic food production strictly avoids the use of all synthetic chemicals, it does not pose any risk of soil and underground water contamination like conventional farming which uses tons of artificial fertilizers and pesticides.",
  },
  {
    id: 2,
    question: "How does your Farm Box Program work?",
    answer:
      "Our Farm Box Program is a subscription plan that provides our customers with supply of our produce straight from our farm. With this program a customer gets fresh produce on and off season at a relatively cheaper product. Since we operate an organic farm, our clients enjoy the health benefit",
  },
  {
    id: 3,
    question: "How do I place order?",
    answer:
      "Kindly contact us via email or phone numbers listed on this site Our customer representatives will take you through the simple 5-minutes process of registration and order.",
  },
  {
    id: 4,
    question: "What type of produce can you expect?",
    answer:
      "We currently grow major local Nigerian vegetables like Uqwu, Oha, Okra, Efo, Tomatoes, Pepper and Onions. Order products include potatoes, maize and yams. In the nearest future we will provide herbs, livestocks, poultry products and fish",
  },
  {
    id: 5,
    question: "Can I take a tour of your farm?",
    answer:
      "We can arrange a collective tour for group of individuals and businesses interested in seeing what we do at our farm. Kindly contact us via email and we will provide information on tour dates.",
  },
];

const FAQsFarm = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const handleToggle = (id) => {
    setActiveFaq((prev) => (prev === id ? null : id));
  };

  return (
    <section id="farm-faqs" className="px-6 py-8 lg:py-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold font-montserratAlternates text-center mb-12 text-mavlin-farms-green">
          FREQUENTLY ASKED{" "}
          <span className="text-mavlin-farms-green">QUESTIONS</span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-mavlin-farms-orange/50 rounded-lg shadow-sm overflow-hidden"
            >
              <div
                className="flex items-center justify-between px-4 lg:px-6 py-4 cursor-pointer hover:bg-gray-100"
                onClick={() => handleToggle(faq.id)}
                aria-expanded={activeFaq === faq.id}
                aria-controls={`faq-${faq.id}`}
              >
                <p className="text-lg lg:text-xl font-semibold text-mavlin-farms-green">
                  {faq.question}
                </p>
                <div className="text-mavlin-farms-orange">
                  {activeFaq === faq.id ? (
                    <HiMinusSmall size={28} />
                  ) : (
                    <BsPlus size={28} />
                  )}
                </div>
              </div>

              <div
                id={`faq-${faq.id}`}
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  activeFaq === faq.id ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <p className="px-4 lg:px-6 py-4 text-sm lg:text-base text-mavlin-farms-green">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsFarm;
