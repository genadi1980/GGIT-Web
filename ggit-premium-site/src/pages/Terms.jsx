import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Scale } from 'lucide-react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-ink py-16 px-4 sm:px-6 lg:px-8 grid-bg">
      <div className="max-w-3xl mx-auto glass p-8 sm:p-12 rounded-3xl border border-divider shadow-xl relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8 font-semibold">
          <ArrowLeft size={18} />
          Back to home
        </Link>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Scale size={24} />
          </div>
          <h1 className="text-3xl font-extrabold font-display">Terms of Service</h1>
        </div>
        <p className="text-muted mb-8 font-mono text-sm">Last updated: August 14, 2026</p>

        <div className="space-y-6 text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-ink mb-3 font-display">1. Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by ggit.ai (the "Service"), you agree to be bound by these Terms of Service. If you are entering into these terms on behalf of a dental clinic, practice, or organization, you represent that you have the authority to bind such entity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-3 font-display">2. Service SLA & AI Voice Limitations</h2>
            <p>
              ggit.ai provides a 24/7 AI Voice Assistant designed to field patient FAQs and book appointments into practice calendars. While our AI models operate with exceptional precision, we do not guarantee 100% voice latency or transcription accuracy under poor mobile connection qualities. The dental clinic is responsible for confirming emergency guidelines and pricing rules mapped to the AI guidelines database.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-3 font-display">3. Calendar Synchronizations</h2>
            <p>
              By integrating your Practice Management Software (PMS) calendar, you authorize ggit.ai to look up open slots and write patient booking appointments into your database in real-time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-3 font-display">4. Contact Information</h2>
            <p>
              For legal inquiries regarding licensing, usage, or operations, please contact us at <span className="text-ink font-semibold">legal@ggit.ai</span>.
            </p>
          </section>
        </div>
      </div>
      <div className="noise-overlay"></div>
    </div>
  )
}
