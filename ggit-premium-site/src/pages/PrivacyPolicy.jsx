import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-ink py-16 px-4 sm:px-6 lg:px-8 grid-bg animate-fadeIn">
      <div className="max-w-4xl mx-auto glass p-8 sm:p-12 rounded-3xl border border-divider shadow-xl relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8 font-semibold">
          <ArrowLeft size={18} />
          Back to home
        </Link>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
            <Shield size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold font-display tracking-tight text-ink">Privacy Policy</h1>
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
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">1. Who We Are</h2>
            <p>
              Global Group Intelligence Technologies Ltd ("<strong>GGIT</strong>," "<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>") is a company registered in England and Wales under company number 17355071, with its registered office at 41 Rowan Court, Peter Street, Folkestone, England, CT20 1JE.
            </p>
            <p>
              GGIT provides AI integration consulting, AI voice and chat agents (including our GiGi product), and related software and marketplace services to businesses and their customers.
            </p>
            <p className="font-semibold text-ink">Contact us:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>General enquiries: <a href="mailto:info@ggit.ai" className="text-primary hover:underline font-semibold">info@ggit.ai</a></li>
              <li>Privacy enquiries / Data Protection contact: <a href="mailto:privacy@ggit.ai" className="text-primary hover:underline font-semibold">privacy@ggit.ai</a></li>
            </ul>
            <p>
              We are the <strong>controller</strong> of personal data we collect directly (for example, through our website or as part of our own client relationships), and in many cases we act as a <strong>processor</strong> on behalf of our clients when we deliver AI voice agents, chatbots, or related services that process our clients' customers' personal data. Section 10 explains this distinction in more detail.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">2. Scope of This Policy</h2>
            <p>This policy applies to personal data processed through:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The ggit.ai website and any related GGIT-operated domains (including ggit.world, ggit.store, and ggit.shop where applicable);</li>
              <li>Our AI voice agent and chatbot products, including GiGi;</li>
              <li>Our direct communications with prospective and existing clients, partners, and suppliers;</li>
              <li>Our billing and payment processes.</li>
            </ul>
            <p>It does not apply to third-party websites or services we link to, which have their own privacy policies.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">3. What Personal Data We Collect</h2>
            <p>Depending on how you interact with us, we may collect:</p>
            
            <div className="space-y-4 pl-2 border-l-2 border-divider mt-2">
              <div>
                <h3 className="font-bold text-ink">a) Information you provide directly</h3>
                <ul className="list-disc pl-6 space-y-1 mt-1">
                  <li>Contact details (name, email address, phone number, company name, job title)</li>
                  <li>Billing and account information</li>
                  <li>Messages, enquiries, and correspondence you send us</li>
                  <li>Information provided during onboarding or configuration of AI agents</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-ink">b) Information collected through our AI voice agents and chatbots</h3>
                <ul className="list-disc pl-6 space-y-1 mt-1">
                  <li>Call audio recordings (only where necessary and appropriately disclosed — see Section 6)</li>
                  <li>Transcripts and summaries generated from calls or chats</li>
                  <li>Metadata such as call duration, timestamps, and call outcomes</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-ink">c) Information collected automatically</h3>
                <ul className="list-disc pl-6 space-y-1 mt-1">
                  <li>IP address, device and browser type, general location (city/country level)</li>
                  <li>Website usage data collected via cookies and analytics tools (see Section 9)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-ink">d) Payment information</h3>
                <p className="mt-1">
                  We do not store full card details. Payments are processed by <strong>Stripe</strong> and <strong>Wise</strong>, who each act as independent controllers of the payment data they process. Please see <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Stripe's Privacy Policy</a> and <a href="https://wise.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Wise's Privacy Policy</a> for details.
                </p>
              </div>
            </div>
            <p className="pt-2">
              We do not knowingly collect special category data (e.g., health, biometric, or other sensitive data) through general use of our website or products, unless a specific client use case requires it under a documented lawful basis and contract.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">4. How We Use Personal Data and Our Lawful Bases</h2>
            <div className="overflow-x-auto border border-divider rounded-xl">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-background border-b border-divider">
                    <th className="p-3 font-bold text-ink">Purpose</th>
                    <th className="p-3 font-bold text-ink">Lawful Basis (UK/EU GDPR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-divider">
                  <tr>
                    <td className="p-3">Providing and operating our AI voice/chat agent services</td>
                    <td className="p-3">Performance of a contract</td>
                  </tr>
                  <tr>
                    <td className="p-3">Responding to enquiries and communicating with prospective/existing clients</td>
                    <td className="p-3">Legitimate interests / pre-contractual steps</td>
                  </tr>
                  <tr>
                    <td className="p-3">Processing payments via Stripe and Wise</td>
                    <td className="p-3">Performance of a contract; legal obligation</td>
                  </tr>
                  <tr>
                    <td className="p-3">Improving, securing, and troubleshooting our services</td>
                    <td className="p-3">Legitimate interests</td>
                  </tr>
                  <tr>
                    <td className="p-3">Website analytics and marketing cookies</td>
                    <td className="p-3">Consent (see Section 9)</td>
                  </tr>
                  <tr>
                    <td className="p-3">Complying with legal and regulatory obligations</td>
                    <td className="p-3">Legal obligation</td>
                  </tr>
                  <tr>
                    <td className="p-3">Preventing fraud and misuse</td>
                    <td className="p-3">Legitimate interests</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted/80">
              Where we rely on legitimate interests, we have considered that these interests are not overridden by your rights and freedoms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">5. AI Systems, Automated Processing, and Training</h2>
            <p>GGIT's core products involve AI voice agents and chatbots. We take the following approach:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>No default training on client/customer data.</strong> Personal data belonging to our clients or their customers is <strong>not used to train general-purpose AI models by default</strong>. We use such data only to deliver the contracted AI service, ensure security, troubleshoot issues, and improve the specific service delivered — subject to the applicable lawful basis and any contractual terms agreed with the relevant client.
              </li>
              <li>
                <strong>Third-party AI providers.</strong> To deliver our services, we may process data using infrastructure or models from providers such as OpenAI, Anthropic, Google, Microsoft Azure, ElevenLabs, and other equivalent AI or cloud providers. These providers act as our subprocessors and are bound by data processing terms consistent with UK GDPR requirements.
              </li>
              <li>
                <strong>Automated decision-making.</strong> Our AI agents may generate responses, summaries, or recommendations automatically. Where any processing could produce a legal or similarly significant effect on an individual without human involvement, we provide for human oversight and a route to request human review. We do not currently carry out fully automated decision-making that produces such effects without the option of human review.
              </li>
              <li>
                <strong>Your rights in relation to AI processing.</strong> You may request information about how your personal data is used in our AI systems, object to certain processing, and request human review of decisions materially affecting you, as further described in Section 11.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">6. AI Voice Agents — Specific Provisions</h2>
            <p>Where you interact with a GGIT AI voice agent (such as GiGi) on behalf of us or one of our clients:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>AI disclosure:</strong> The system will identify itself as an AI, not a human, at the outset of the interaction.</li>
              <li><strong>Recording:</strong> Calls are recorded only when necessary for the purpose of the service and where appropriately disclosed to you at the start of the call.</li>
              <li><strong>Transcription:</strong> Call recordings may be transcribed, and summaries may be generated, to support service delivery, quality assurance, and troubleshooting.</li>
              <li>
                <strong>Retention periods:</strong>
                <ul className="list-circle pl-6 space-y-1 mt-1">
                  <li>Voice recordings: retained for <strong>30 days</strong></li>
                  <li>Transcripts: retained for <strong>90 days</strong></li>
                  <li>AI-generated summaries: retained for <strong>90 days</strong></li>
                </ul>
              </li>
              <li>After these periods, the relevant data is deleted or irreversibly anonymised, unless a longer period is required by law, requested by the relevant client under a signed agreement, or necessary to resolve an active dispute or complaint.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">7. Who We Share Personal Data With</h2>
            <p>We may share personal data with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Subprocessors and service providers</strong>, including AI model and cloud infrastructure providers (e.g., OpenAI, Anthropic, Google, Microsoft Azure, ElevenLabs), hosting providers, and analytics providers, strictly to the extent needed to deliver our services.</li>
              <li><strong>Payment processors</strong>, Stripe and Wise, to process transactions.</li>
              <li><strong>Our clients</strong>, where GGIT is processing data on their behalf as a processor (see Section 10) — for example, providing a client with call transcripts relating to their own customers.</li>
              <li><strong>Professional advisers and regulators</strong>, where necessary for legal, accounting, or compliance purposes.</li>
              <li><strong>Successors in a business transaction</strong>, such as a merger, acquisition, or asset sale, subject to equivalent protections for your data.</li>
            </ul>
            <p>We do not sell personal data.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">8. International Data Transfers</h2>
            <p>GGIT and its subprocessors operate internationally, and personal data may be transferred outside the UK, including to the EU, the USA, and Switzerland.</p>
            <p>Where we make a <strong>restricted transfer</strong> of personal data outside the UK, we rely on appropriate safeguards recognised under the current ICO framework, which may include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The <strong>UK International Data Transfer Agreement (IDTA)</strong>, or</li>
              <li>The <strong>UK Addendum to the EU Standard Contractual Clauses</strong>,</li>
            </ul>
            <p>together with a transfer risk assessment (data protection test), as appropriate to the destination and receiving party, consistent with the ICO's international transfer guidance.</p>
            <p>Where a transfer is made to a country not covered by a current UK adequacy regulation, we take steps to ensure the safeguards above are in place before the transfer occurs.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">9. Cookies and Analytics</h2>
            <p>Our website may use cookies and similar technologies for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Essential functionality</strong> (no consent required)</li>
              <li><strong>Analytics</strong> (to understand website usage)</li>
              <li><strong>Marketing/tracking</strong> (where applicable)</li>
            </ul>
            <p>
              Where analytics or marketing cookies are used, we obtain your consent through a cookie banner before non-essential cookies are set, and you can withdraw consent at any time via your cookie preferences or browser settings. A separate Cookie Notice, available on our website, sets out the specific cookies in use and their purposes and durations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">10. Controller and Processor Roles</h2>
            <p>Depending on the service:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>As controller:</strong> When you contact GGIT directly, visit our website, or engage us as a client, we determine the purposes and means of processing and act as controller.</li>
              <li><strong>As processor:</strong> When we deliver AI voice agents, chatbots, or related services on behalf of a client, we typically process that client's customers' personal data <strong>on the client's instructions</strong>, under a <strong>Data Processing Agreement (DPA)</strong>. In these cases, our client is the controller, and individuals should also refer to that client's own privacy notice. GGIT processes such data only as instructed, subject to confidentiality, security, and subprocessor obligations set out in the relevant DPA.</li>
            </ul>
            <p>
              Client DPAs are available on request and set out subprocessor arrangements, security measures, and international transfer mechanisms applicable to that client relationship.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">11. Your Rights</h2>
            <p>Subject to applicable law (UK GDPR, EU GDPR, and/or applicable US state privacy laws), you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request erasure of your data</li>
              <li>Restrict or object to certain processing, including processing based on legitimate interests</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time, where processing is based on consent</li>
              <li>Request human review of, or object to, decisions based solely on automated processing that significantly affect you</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="mt-2">
              <strong>To exercise these rights</strong>, contact us at <a href="mailto:privacy@ggit.ai" className="text-primary hover:underline font-semibold">privacy@ggit.ai</a>. We will respond within the timeframes required by applicable law.
            </p>
            <p>
              <strong>UK/EU complaints:</strong> You have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">ico.org.uk</a>, or with your local EU supervisory authority if you are located in the EU.
            </p>
            <p>
              <strong>US residents:</strong> Depending on your state of residence, you may have additional rights under applicable US state privacy laws (such as the right to know, delete, correct, or opt out of certain processing or "sale/sharing" of personal data, where applicable). GGIT does not sell personal data. Requests can be submitted to <a href="mailto:privacy@ggit.ai" className="text-primary hover:underline font-semibold">privacy@ggit.ai</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">12. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary for the purposes described in this policy, including to satisfy legal, accounting, or reporting requirements. Specific retention periods for AI voice/chat data are set out in Section 6. Other data (e.g., account and billing records) is retained in line with our internal retention schedule and applicable legal requirements, after which it is deleted or anonymised.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">13. Security</h2>
            <p>
              We implement appropriate technical and organisational measures designed to protect personal data against unauthorised access, alteration, disclosure, or destruction, including access controls, encryption in transit, and contractual security obligations on our subprocessors. No system is completely secure, and we cannot guarantee absolute security.
            </p>
            <p>
              In the event of a personal data breach that poses a risk to individuals, we will notify affected individuals and/or the relevant supervisory authority as required by applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">14. Children's Privacy</h2>
            <p>
              Our services are not directed at children, and we do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact <a href="mailto:privacy@ggit.ai" className="text-primary hover:underline font-semibold">privacy@ggit.ai</a> and we will take appropriate steps to remove it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">15. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. The "Last updated" date at the top of this policy indicates when it was last revised. Material changes will be highlighted on our website.
            </p>
          </section>

          <section className="space-y-3 border-t border-divider pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-ink font-display">16. Contact Us</h2>
            <div className="bg-background border border-divider rounded-2xl p-6 space-y-2">
              <p className="font-bold text-ink">GLOBAL GROUP INTELLIGENCE TECHNOLOGIES LTD</p>
              <p className="text-xs font-mono text-muted">Company No. 17355071</p>
              <p className="text-sm">41 Rowan Court, Peter Street, Folkestone, England, CT20 1JE</p>
              <div className="pt-2 text-sm space-y-1">
                <p>General enquiries: <a href="mailto:info@ggit.ai" className="text-primary hover:underline font-semibold">info@ggit.ai</a></p>
                <p>Privacy enquiries: <a href="mailto:privacy@ggit.ai" className="text-primary hover:underline font-semibold">privacy@ggit.ai</a></p>
              </div>
            </div>
          </section>

          <section className="pt-6">
            <p className="text-xs text-muted/70 italic bg-background p-4 rounded-xl border border-divider">
              *This document does not constitute legal advice. GGIT does not claim certifications or compliance frameworks it has not formally established. We recommend having this policy reviewed by a qualified data protection professional or solicitor prior to publication, particularly given the multi-jurisdictional scope (UK, EU, Switzerland, and US state laws).*
            </p>
          </section>
        </div>
      </div>
      <div className="noise-overlay"></div>
    </div>
  )
}
