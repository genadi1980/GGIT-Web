import { FAQS } from '../content/faq.js'

/* Native <details> keeps answers in the HTML (crawlable) and works without JS. */
export default function Faq() {
  return (
    <section id="faq" className="relative py-32 bg-white border-b border-divider">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-bold">FAQ</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-ink mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((item, idx) => (
            <details
              key={item.q}
              open={idx === 0}
              className="group bg-background border border-divider rounded-2xl p-6 open:border-primary/30 open:shadow-md transition"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-bold text-lg text-ink [&::-webkit-details-marker]:hidden">
                <h3>{item.q}</h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-muted text-sm sm:text-base leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
