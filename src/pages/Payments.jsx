import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CreditCard, Check, ShieldCheck, Lock, Sparkles, AlertCircle } from 'lucide-react'

export default function Payments() {
  const [selectedRegion, setSelectedRegion] = useState('US')
  const [showWarning, setShowWarning] = useState(false)
  const [selectedVerifyCurrency, setSelectedVerifyCurrency] = useState('USD')
  const [showVerifyWarning, setShowVerifyWarning] = useState(false)

  const plans = {
    US: {
      currency: 'USD',
      symbol: '$',
      price: '250',
      unit: '/month',
      label: 'United States',
      link: import.meta.env.VITE_STRIPE_PAYMENT_LINK_US || '',
      desc: 'GiGi AI Dental Assistant for US clinics, synced with American HIPAA guidelines.'
    },
    UK: {
      currency: 'GBP',
      symbol: '£',
      price: '249',
      unit: '/month',
      label: 'United Kingdom',
      link: import.meta.env.VITE_STRIPE_PAYMENT_LINK_UK || '',
      desc: 'GiGi AI Dental Assistant for UK clinics, aligned with UK GDPR privacy specifications.'
    },
    CH: {
      currency: 'CHF',
      symbol: 'CHF ',
      price: '279',
      unit: '/month',
      label: 'Switzerland',
      link: import.meta.env.VITE_STRIPE_PAYMENT_LINK_CH || '',
      desc: 'GiGi AI Dental Assistant for Swiss clinics, fully compliant with FADP architectures.'
    }
  }

  const verificationPlans = {
    USD: {
      id: 'USD',
      currency: 'USD',
      symbol: '$',
      amount: '1',
      label: 'United States',
      link: import.meta.env.VITE_STRIPE_VERIFY_LINK_USD || '',
      desc: 'US verification check. Settle a $1 micro-transaction verification charge to authenticate credit or debit cards on our secure system.'
    },
    EUR: {
      id: 'EUR',
      currency: 'EUR',
      symbol: '€',
      amount: '1',
      label: 'Eurozone',
      link: import.meta.env.VITE_STRIPE_VERIFY_LINK_EUR || '',
      desc: 'European verification check. Settle a €1 micro-transaction verification charge to authenticate credit or debit cards on our secure system.'
    },
    GBP: {
      id: 'GBP',
      currency: 'GBP',
      symbol: '£',
      amount: '1',
      label: 'United Kingdom',
      link: import.meta.env.VITE_STRIPE_VERIFY_LINK_GBP || '',
      desc: 'UK verification check. Settle a £1 micro-transaction verification charge to authenticate credit or debit cards on our secure system.'
    }
  }

  const activePlan = plans[selectedRegion]
  const activeVerifyPlan = verificationPlans[selectedVerifyCurrency]

  const features = [
    '24/7 AI Voice Reception (instantly answers first ring)',
    'Live Smart PMS Calendar Sync (Dentrix, Open Dental, etc.)',
    'Accurate Local Clinic FAQ Custom Playbooks',
    'Automated Database Recall & Reactivation Campaigns',
    'Military-grade 256-bit HIPAA & GDPR Secure Compliance',
    'Done-For-You System Engineering & setup within 7 days',
    'Unlimited simultaneous call handling (no busy signals)',
    'Full call transcripts & smart actionable CRM summaries'
  ]

  const handleSubscribe = (e) => {
    if (!activePlan.link || activePlan.link.includes('mock_') || activePlan.link.includes('placeholder')) {
      e.preventDefault()
      setShowWarning(true)
    } else {
      window.location.href = activePlan.link
    }
  }

  const handleVerifyPayment = (e) => {
    if (!activeVerifyPlan.link || activeVerifyPlan.link.includes('mock_') || activeVerifyPlan.link.includes('placeholder')) {
      e.preventDefault()
      setShowVerifyWarning(true)
    } else {
      window.location.href = activeVerifyPlan.link
    }
  }

  return (
    <div className="min-h-screen bg-background text-ink py-16 px-4 sm:px-6 lg:px-8 grid-bg animate-fadeIn relative">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Back navigation */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8 font-semibold text-sm"
        >
          <ArrowLeft size={18} />
          Back to home
        </Link>
        
        {/* Brand Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 border-b border-divider pb-8">
          <div className="flex items-center gap-3.5">
            {/* Enlarged circular brand logo paired next to bold capital brand name text */}
            <img 
              src="/logo.png" 
              alt="GGIT Logo" 
              className="h-16 w-16 object-cover rounded-full bg-white p-1 border border-divider shadow-md"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black tracking-tight text-3xl text-ink">GGIT</span>
                <span className="font-mono text-[10px] bg-primary/10 border border-primary/20 text-primary px-2 py-0.5 rounded-full font-bold">SECURE PORTAL</span>
              </div>
              <p className="text-xs text-muted font-mono mt-0.5">GLOBAL GROUP INTELLIGENCE TECHNOLOGIES LTD</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2.5 bg-emerald-500/5 border border-emerald-500/15 rounded-2xl px-4 py-2 text-xs text-emerald-700 font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Stripe Verified Partner · Secure Checkout
          </div>
        </div>

        {/* main layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Product Details & Features */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass p-6 sm:p-8 rounded-3xl border border-divider shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-ink font-display">GiGi AI Voice Assistant</h2>
                  <p className="text-xs text-muted">Complete Digital Reception & Automations Suite</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Empower your dental practice with clinical-grade artificial intelligence. GiGi handles phone inquiries, answers intricate local dental FAQs, coordinates scheduling directly with your PMS, and runs database recall campaigns to recover lost clinic revenue.
              </p>

              <div className="border-t border-divider pt-6">
                <h3 className="text-xs font-mono uppercase tracking-widest text-ink font-bold mb-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  What is included in your subscription:
                </h3>
                <ul className="space-y-3">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Compliance Badge card */}
            <div className="bg-surface/50 border border-divider rounded-2xl p-5 flex items-start gap-4">
              <ShieldCheck className="text-primary shrink-0 mt-0.5" size={24} />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-ink font-mono uppercase tracking-wider">HIPAA, GDPR & FADP Compliant</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Engineered with end-to-end 256-bit encryption. All voice records, calendar sync pipelines, and patient metadata are strictly contained within clinical data boundaries, completely compliant with international health and privacy regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Checkout Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-8 space-y-6">
            <div className="glass p-6 sm:p-8 rounded-3xl border-2 border-primary/20 shadow-xl relative overflow-hidden bg-white/80">
              {/* Highlight ribbon */}
              <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-mono tracking-widest uppercase font-bold py-1 px-4 rounded-bl-xl">
                Active Subscription
              </div>

              <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-4">
                1. Select Region / Currency
              </h3>

              {/* Currency Selector */}
              <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1 rounded-2xl mb-6">
                {Object.keys(plans).map((region) => (
                  <button
                    key={region}
                    onClick={() => {
                      setSelectedRegion(region)
                      setShowWarning(false)
                    }}
                    className={`py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                      selectedRegion === region
                        ? 'bg-white text-ink shadow-sm'
                        : 'text-muted hover:text-ink'
                    }`}
                  >
                    {region} ({plans[region].currency})
                  </button>
                ))}
              </div>

              {/* Price display */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-medium text-muted block">Monthly Subscription Fee</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-ink font-display tracking-tight">
                    {activePlan.symbol}{activePlan.price}
                  </span>
                  <span className="text-muted text-sm font-semibold">{activePlan.unit}</span>
                </div>
                <p className="text-xs text-muted leading-relaxed mt-2 pt-2 border-t border-divider">
                  {activePlan.desc}
                </p>
              </div>

              {/* Subscribe button */}
              <button
                onClick={handleSubscribe}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition duration-300 flex items-center justify-center gap-2 group transform active:scale-95"
              >
                <CreditCard size={18} className="group-hover:scale-110 transition duration-300" />
                Proceed to Secure Checkout
              </button>

              {/* Security info list */}
              <div className="mt-6 pt-6 border-t border-divider space-y-3.5">
                <div className="flex items-center gap-2.5 text-xs text-muted">
                  <Lock size={14} className="text-emerald-500" />
                  <span>256-Bit SSL Encrypted Connection</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-muted">
                  <ShieldCheck size={14} className="text-primary" />
                  <span>Cancel subscription anytime in 1-click</span>
                </div>
              </div>
            </div>

            {/* Warning popup / Modal block for unconfigured stripe link */}
            {showWarning && (
              <div className="bg-amber-500/10 border-2 border-amber-500/20 text-amber-900 p-5 rounded-2xl shadow-sm space-y-3 animate-fadeIn">
                <div className="flex items-center gap-2.5 text-amber-700">
                  <AlertCircle size={20} className="shrink-0" />
                  <h4 className="font-bold text-sm font-display">Stripe Link Configuration Required</h4>
                </div>
                <p className="text-xs leading-relaxed text-amber-800">
                  This checkout is correctly integrated with environment variables. However, the Stripe Payment Link for <strong>{activePlan.label}</strong> (<code>VITE_STRIPE_PAYMENT_LINK_{selectedRegion}</code>) has not been set yet.
                </p>
                <div className="text-[11px] font-mono bg-white/60 p-2.5 rounded-lg border border-amber-500/10 text-amber-900 overflow-x-auto">
                  To set this up, add the following to your <code>.env.local</code> file or production environment:<br />
                  <span className="font-bold mt-1 block">VITE_STRIPE_PAYMENT_LINK_{selectedRegion}=https://buy.stripe.com/your_actual_link</span>
                </div>
              </div>
            )}

            {/* Wise Alternative notice */}
            <div className="bg-slate-100/80 border border-divider rounded-2xl p-5 text-center space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted block">Alternative Billing</span>
              <p className="text-xs text-muted leading-relaxed">
                Need to settle via Wise transfer, SEPA, or direct wire?
              </p>
              <a 
                href="mailto:info@ggit.ai?subject=Billing%20Alternative%20Request" 
                className="inline-block text-xs font-bold text-primary hover:text-primary-dark transition"
              >
                Contact Billing Support &rarr;
              </a>
            </div>

          </div>

        </div>

        {/* Verification Card Products Section */}
        <div className="mt-20 border-t border-divider pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-[10px] bg-primary/10 border border-primary/20 text-primary px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
              Card Verification System
            </span>
            <h3 className="text-3xl font-bold font-display text-ink mt-3">
              Micro-Transaction Verification Portal
            </h3>
            <p className="text-xs sm:text-sm text-muted mt-2 leading-relaxed">
              Verify your billing details, card compatibility, and payment routing pipelines instantly using secure, low-value test charges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Verification Guidelines */}
            <div className="lg:col-span-7 space-y-6">
              <div className="glass p-6 sm:p-8 rounded-3xl border border-divider shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold tracking-tight text-ink font-display">Global Verification Pipeline</h4>
                    <p className="text-xs text-muted">Stripe & Merchant Routing Verification</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Before onboarding or launching high-volume dental voice campaigns, our system checks merchant settlement layers and latency pipelines across primary card issuers (Visa, Mastercard, Amex).
                </p>

                <div className="border-t border-divider pt-6 space-y-4">
                  <h5 className="text-xs font-mono uppercase tracking-widest text-ink font-bold mb-2 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Verification Check specifications:
                  </h5>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-muted">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </span>
                      <span>Instant card linkage status check on Stripe global network</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </span>
                      <span>Jurisdictional latency validation for multi-currency settlement</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </span>
                      <span>Secure authorization token generated for immediate linkage routing</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </span>
                      <span>100% credited back or refunded upon onboarding validation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Verification Card (USD, EUR, GBP) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass p-6 sm:p-8 rounded-3xl border-2 border-primary/10 shadow-xl relative overflow-hidden bg-white/80">
                <div className="absolute top-0 right-0 bg-primary/10 border border-primary/25 text-primary text-[9px] font-mono tracking-widest uppercase font-bold py-1 px-3 rounded-bl-xl">
                  Micro-Charge
                </div>

                <h4 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-4">
                  1. Choose Verification Currency
                </h4>

                {/* Currency selector tab */}
                <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1 rounded-2xl mb-6">
                  {Object.keys(verificationPlans).map((cur) => (
                    <button
                      key={cur}
                      onClick={() => {
                        setSelectedVerifyCurrency(cur)
                        setShowVerifyWarning(false)
                      }}
                      className={`py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                        selectedVerifyCurrency === cur
                          ? 'bg-white text-ink shadow-sm'
                          : 'text-muted hover:text-ink'
                      }`}
                    >
                      {cur} ({verificationPlans[cur].symbol.trim()})
                    </button>
                  ))}
                </div>

                {/* Price display */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-medium text-muted block">One-time Verification Charge</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-ink font-display tracking-tight">
                      {activeVerifyPlan.symbol}{activeVerifyPlan.amount}
                    </span>
                    <span className="text-muted text-xs font-mono">one-time</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed mt-2 pt-2 border-t border-divider">
                    {activeVerifyPlan.desc}
                  </p>
                </div>

                {/* Verification payment button */}
                <button
                  onClick={handleVerifyPayment}
                  className="w-full py-3.5 px-6 rounded-2xl bg-slate-900 hover:bg-black text-white font-bold text-xs tracking-wide shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center gap-2 transform active:scale-95"
                >
                  <CreditCard size={16} />
                  Proceed with {activeVerifyPlan.symbol}{activeVerifyPlan.amount} Verification
                </button>

                {/* Security elements */}
                <div className="mt-6 pt-6 border-t border-divider space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-muted">
                    <Lock size={12} className="text-emerald-500" />
                    <span>Secure Stripe routing & encryption protocol</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-muted">
                    <ShieldCheck size={12} className="text-primary" />
                    <span>100% compliant with PCI-DSS guidelines</span>
                  </div>
                </div>
              </div>

              {/* Verification warning block */}
              {showVerifyWarning && (
                <div className="bg-amber-500/10 border-2 border-amber-500/20 text-amber-900 p-5 rounded-2xl shadow-sm space-y-3 animate-fadeIn">
                  <div className="flex items-center gap-2.5 text-amber-700">
                    <AlertCircle size={20} className="shrink-0" />
                    <h4 className="font-bold text-sm font-display">Stripe Verification Link Required</h4>
                  </div>
                  <p className="text-xs leading-relaxed text-amber-800">
                    The micro-transaction link for <strong>{activeVerifyPlan.label} ({activeVerifyPlan.currency})</strong> (<code>VITE_STRIPE_VERIFY_LINK_{activeVerifyPlan.id}</code>) has not been set in your environment variables.
                  </p>
                  <div className="text-[11px] font-mono bg-white/60 p-2.5 rounded-lg border border-amber-500/10 text-amber-900 overflow-x-auto">
                    To configure this link, add the following to your <code>.env.local</code> file or production environment:<br />
                    <span className="font-bold mt-1 block">VITE_STRIPE_VERIFY_LINK_{activeVerifyPlan.id}=https://buy.stripe.com/your_verification_link</span>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* Corporate Address Footer inside content */}
        <div className="mt-16 pt-8 border-t border-divider text-center text-xs text-muted/60 space-y-2">
          <p className="font-bold text-ink">GLOBAL GROUP INTELLIGENCE TECHNOLOGIES LTD</p>
          <p>Company Number: 17355071 | Registered in England & Wales</p>
          <p>Registered Address: 41 Rowan Court Peter Street, Folkestone, England CT20 1JE</p>
          <p className="pt-2 font-mono">Secure Payment Processing via Stripe Inc.</p>
        </div>

      </div>

      <div className="noise-overlay"></div>
    </div>
  )
}
