import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faq } from "@/data/content";

function FAQRow({ item, isOpen, onToggle }: { item: (typeof faq)[number]; isOpen: boolean; onToggle: () => void }) {
  const panelId = useId();

  return (
    <div className="border-b border-border-hairline">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className="font-display text-h3 text-text-primary">{item.question}</span>
          <span
            aria-hidden="true"
            className={`shrink-0 font-mono text-h3 text-accent transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 text-body text-text-secondary">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="container-page py-section">
      <div className="mb-16 max-w-2xl">
        <p className="eyebrow mb-4">FAQ</p>
        <h2 className="font-display text-h1 text-text-primary">Questions, answered.</h2>
      </div>

      <div className="mx-auto max-w-3xl">
        {faq.map((item, index) => (
          <FAQRow
            key={item.question}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}
