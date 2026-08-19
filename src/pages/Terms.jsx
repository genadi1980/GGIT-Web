import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Scale } from 'lucide-react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-ink py-16 px-4 sm:px-6 lg:px-8 grid-bg animate-fadeIn">
      <div className="max-w-4xl mx-auto glass p-8 sm:p-12 rounded-3xl border border-divider shadow-xl relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8 font-semibold">
          <ArrowLeft size={18} />
          Back to home
        </Link>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
            <Scale size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold font-display tracking-tight text-ink">Terms of Service</h1>
            <p className="text-sm text-muted mt-1 font-semibold">GLOBAL GROUP INTELLIGENCE TECHNOLOGIES LTD</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted/80 font-mono mb-8 border-b border-divider pb-6">
          <span>Company No. 17355071</span>
          <span className="hidden sm:inline">•</span>
          <span>Registered: England & Wales</span>
          <span className="hidden sm:inline">•</span>
          <span>Last updated: August 14, 2026</span>
        </div>

        <div className="space-y-8 text-muted leading-relaxed text-sm sm:text-base">
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 text-xs sm:text-sm text-primary-dark">
            <p className="font-semibold mb-1">Company Registered Address:</p>
            <p>41 Rowan Court Peter Street, Folkestone, England CT20 1JE</p>
            <p className="mt-1">Website: <a href="https://ggit.ai" className="underline hover:text-primary transition-colors">ggit.ai</a></p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">1. Introduction and Acceptance</h2>
            <p>
              These Terms of Service ("Terms") govern access to and use of the website, products, and services (the "Services") provided by Global Group Intelligence Technologies Ltd, company number 17355071, registered office 41 Rowan Court, Peter Street, Folkestone, England, CT20 1JE ("GGIT," "we," "us," or "our").
            </p>
            <p>
              By accessing our website, signing an order form, or otherwise using our Services, you ("Client," "you," "your") agree to be bound by these Terms. If entering these Terms on behalf of an organization, you represent that you have authority to bind that entity.
            </p>
            <p className="font-semibold text-ink">
              If you do not agree to these Terms, you must not access or use the Services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">2. Eligibility</h2>
            <div className="space-y-3 pl-2 border-l-2 border-divider">
              <p>
                <strong>2.1 Business use only.</strong> The Services are provided exclusively for business-to-business ("B2B") use and are not intended for individual consumers acting outside a trade, business, or profession.
              </p>
              <p>
                <strong>2.2 Authority.</strong> You confirm you are at least 18, acting in a business capacity, and authorized to bind your organization.
              </p>
              <p>
                <strong>2.3 End-Users.</strong> Where our AI voice agents, chatbots, or related products (including GiGi) interact with your own customers or contacts ("End-Users"), you are responsible for your own terms and privacy notices governing that relationship. GGIT's role toward End-Users is set out in the applicable Data Processing Agreement ("DPA") and Section 14.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">3. Description of Services</h2>
            <p>
              GGIT provides: AI integration consulting; AI voice agents and chatbot products (including GiGi); a SaaS/affiliate marketplace connecting clients with third-party AI and business tools; white-label reseller services; and related onboarding and support.
            </p>
            <p>
              Scope, deliverables, and pricing for any engagement are set out in an order form, statement of work, or written agreement ("Order"). An Order takes precedence over these Terms for that engagement only.
            </p>
            <p>
              We may modify, update, or discontinue features of the Services, using reasonable efforts to notify Clients of material changes affecting an active subscription.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">4. Account Registration and Security</h2>
            <p>
              You are responsible for: accurate registration information; confidentiality of credentials/API keys; and all activity under your account (except where caused by GGIT's breach). Notify us promptly at <a href="mailto:info@ggit.ai" className="text-primary hover:underline font-semibold">info@ggit.ai</a> of any unauthorized use.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">5. Payment Terms</h2>
            <div className="space-y-3 pl-2 border-l-2 border-divider">
              <p>
                <strong>5.1 Fees.</strong> As set out in the applicable Order or published on our website (e.g., GiGi at $299/month), in USD, GBP, or CHF as applicable.
              </p>
              <p>
                <strong>5.2 Billing.</strong> Fees are billed in advance on a recurring basis via Stripe and Wise. Providing payment details authorizes us to charge the applicable fees.
              </p>
              <p>
                <strong>5.3 Refunds.</strong> Refund eligibility is assessed case-by-case, considering the nature of the Service, delivery stage, and circumstances of the request. Absent specific terms in an Order, requests go to <a href="mailto:info@ggit.ai" className="text-primary hover:underline font-semibold">info@ggit.ai</a> and are considered at GGIT's reasonable discretion. This doesn't affect non-excludable statutory rights.
              </p>
              <p>
                <strong>5.4 Cancellation.</strong> Cancel anytime; unless otherwise agreed, cancellation takes effect at the end of the current billing period.
              </p>
              <p>
                <strong>5.5 Late payment.</strong> We may suspend access if payment isn't received within a reasonable period after notice.
              </p>
              <p>
                <strong>5.6 Taxes.</strong> Fees are exclusive of applicable taxes, which you are responsible for (other than taxes on GGIT's income).
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">6. Acceptable Use</h2>
            <p>
              You agree not to: violate applicable law; infringe third-party rights; transmit unlawful/defamatory/fraudulent content; gain unauthorized access to GGIT systems, other clients' data, or underlying AI models; reverse-engineer the Services (except where legally protected); build a directly competing product; exceed agreed usage/API limits; use AI agents to impersonate real people or hide their AI nature (contrary to Section 8); or introduce malware or conduct unauthorized security testing.
            </p>
            <p>Breach may result in investigation, suspension, or termination.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">7. Intellectual Property</h2>
            <div className="space-y-3 pl-2 border-l-2 border-divider">
              <p>
                <strong>7.1 GGIT IP.</strong> GGIT retains all rights in the Services, software, AI agent configurations, platform, documentation, and trademarks ("GGIT IP"). You receive a limited, non-exclusive, non-transferable license to use the Services during your subscription for internal business purposes.
              </p>
              <p>
                <strong>7.2 Client Content.</strong> You retain ownership of data/content you or your End-Users submit ("Client Content"). You grant GGIT a limited license to use it solely to provide, secure, and improve the Services, per our Privacy Policy.
              </p>
              <p>
                <strong>7.3 AI outputs.</strong> Outputs generated specifically for your account (transcripts, summaries, responses) belong to you, subject to GGIT's underlying IP rights. You're responsible for reviewing AI outputs before relying on them for material decisions (see Section 8).
              </p>
              <p>
                <strong>7.4 Feedback.</strong> Feedback you provide may be used by GGIT without restriction under a perpetual, royalty-free license.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">8. AI-Specific Terms</h2>
            <div className="space-y-2 pl-2 border-l-2 border-divider">
              <p>
                <strong>8.1 Limitations.</strong> The Services rely on AI, including third-party models (OpenAI, Anthropic, Google, Microsoft Azure, ElevenLabs). AI outputs may be inaccurate or incomplete and are provided "as-is"; review before relying on them for significant decisions.
              </p>
              <p>
                <strong>8.2 AI disclosure.</strong> GGIT's AI voice/chat agents identify themselves as AI at the outset. You must not configure the Services to misrepresent an agent as human.
              </p>
              <p>
                <strong>8.3 Professional advice.</strong> AI outputs do not constitute legal, financial, medical, or other professional advice.
              </p>
              <p>
                <strong>8.4 Training.</strong> GGIT does not use Client Content to train general-purpose AI models by default (see Privacy Policy).
              </p>
              <p>
                <strong>8.5 Fair use.</strong> Sustained use beyond agreed limits may result in throttling, additional charges, or suspension, with notice where practicable.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">9. Disclaimers</h2>
            <p>
              The Services are provided "as is" and "as available." To the maximum extent permitted by law, GGIT disclaims all warranties, including satisfactory quality, fitness for purpose, and non-infringement, and does not warrant uninterrupted service or AI output accuracy. Nothing here limits warranties that cannot lawfully be excluded.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">10. Limitation of Liability</h2>
            <p>
              GGIT is not liable for indirect, incidental, special, or consequential damages, or loss of profits, revenue, data, or goodwill. Except for liability that cannot be limited by law (e.g., death/personal injury from negligence, fraud), GGIT's total aggregate liability is capped at fees paid in the 12 months preceding the claim.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">11. Indemnification</h2>
            <p>
              You indemnify GGIT against third-party claims arising from: your breach of these Terms; your Client Content; unlawful use of the Services; or misuse of AI outputs.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">12. Confidentiality</h2>
            <p>
              Each party protects the other's confidential information with reasonable care, disclosing only as necessary to perform obligations, as required by law, or with consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">13. Term, Suspension, and Termination</h2>
            <p>
              Suspension may occur for overdue payment, breach of Section 6, harm prevention, or legal requirement, with notice where practicable. Either party may terminate for cause on 14 days' written notice if breach is unremedied. Sections 7, 9–12, and 15 survive termination.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">14. Data Protection</h2>
            <p>
              Governed by our Privacy Policy and, where applicable, a Data Processing Agreement ("DPA"). You're responsible for having a lawful basis to share personal data (including End-Users' data) via the Services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">15. Governing Law and Dispute Resolution</h2>
            <p>
              Governed by the laws of England and Wales. Disputes are first addressed through good-faith negotiation between authorized representatives within 30 days of written notice; unresolved disputes go to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">16. General Provisions</h2>
            <p>
              Entire agreement; no assignment without consent (except GGIT on M&A); severability; no waiver by non-enforcement; force majeure; no third-party rights under the Contracts (Rights of Third Parties) Act 1999; Terms may be updated with notice, continued use = acceptance.
            </p>
          </section>

          <section className="space-y-3 border-t border-divider pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">17. Contact Us</h2>
            <div className="bg-background border border-divider rounded-2xl p-6 space-y-2">
              <p className="font-bold text-ink">GLOBAL GROUP INTELLIGENCE TECHNOLOGIES LTD</p>
              <p className="text-xs font-mono text-muted">Company No. 17355071</p>
              <p className="text-sm">41 Rowan Court, Peter Street, Folkestone, England, CT20 1JE</p>
              <div className="pt-2 text-sm space-y-1">
                <p>General enquiries: <a href="mailto:info@ggit.ai" className="text-primary hover:underline font-semibold">info@ggit.ai</a></p>
                <p>Legal enquiries: <a href="mailto:legal@ggit.ai" className="text-primary hover:underline font-semibold">legal@ggit.ai</a></p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="noise-overlay"></div>
    </div>
  )
}
