import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export const PageFAQ = ({ faqs }: { faqs: FAQItem[] }) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-semibold mb-2">
          Frequently asked questions
        </h2>
        <p className="text-gray-500">Everything you need to know</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-medium"
            >
              {faq.question}
              <ChevronDown
                className={`transition ${open === i ? "rotate-180" : ""}`}
              />
            </button>

            {open === i && (
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
