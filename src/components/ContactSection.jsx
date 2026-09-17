import { useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, CheckCircle2, Mail, MapPin, Phone, Upload } from 'lucide-react'
import { BOOKING_URL, EMAIL, PHONE_DISPLAY, PHONE_E164 } from '../seo.js'

// POST endpoint for the callback form (Formspree, Web3Forms, Basin, …).
// Without it the form falls back to opening a pre-filled email.
const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || ''

const MAX_FILES = 5
const MAX_FILE_SIZE = 5 * 1024 * 1024
const ALLOWED_EXT = /\.(pdf|docx|txt)$/i

const inputClass =
  'w-full bg-background border border-divider focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl px-4 py-3 text-sm text-ink outline-none transition'
const labelClass = 'block text-xs font-bold uppercase tracking-wider text-ink mb-2 font-mono'

function buildMailto(data) {
  const body = [
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Phone: ${data.get('phone')}`,
    `Clinic / PMS: ${data.get('clinic')}`,
    `Market: ${data.get('country')}`,
    '',
    String(data.get('details') || ''),
  ].join('\n')
  return `mailto:${EMAIL}?subject=${encodeURIComponent('Callback request — GiGi walkthrough')}&body=${encodeURIComponent(body)}`
}

export default function ContactSection() {
  const [formState, setFormState] = useState('idle') // 'idle' | 'sending' | 'sent' | 'error'
  const [contactMode, setContactMode] = useState('calendar') // 'calendar' | 'form'
  const [uploadedFiles, setFiles] = useState([])
  const [fileError, setFileError] = useState('')
  const fileInputRef = useRef(null)

  const addFiles = (fileList) => {
    const incoming = Array.from(fileList)
    const valid = incoming.filter((f) => ALLOWED_EXT.test(f.name) && f.size <= MAX_FILE_SIZE)
    setFileError(valid.length < incoming.length ? 'Only PDF, DOCX or TXT files up to 5MB are accepted.' : '')
    setFiles((prev) => [...prev, ...valid].slice(0, MAX_FILES))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    if (!FORM_ENDPOINT) {
      window.location.href = buildMailto(data)
      setFormState('sent')
      return
    }

    uploadedFiles.forEach((file) => data.append('attachments', file))
    setFormState('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setFormState('sent')
    } catch {
      setFormState('error')
    }
  }

  return (
    <section id="kontakt" className="relative py-32 bg-background border-b border-divider">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact cards */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-bold">Contact</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-ink mt-3 mb-6">
                Book a Live Walkthrough
              </h2>
              <p className="text-muted text-base leading-relaxed mb-10">
                Connect with our systems engineers to audit your clinic's missed call ratios and map out a custom voice guidelines playbook.
              </p>

              <address className="space-y-6 not-italic">
                <a href={`tel:${PHONE_E164}`} className="flex items-center gap-4 group">
                  <span className="w-11 h-11 rounded-full bg-white border border-divider flex items-center justify-center text-primary shadow-sm">
                    <Phone size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-muted font-bold">Call Us</span>
                    <span className="text-ink font-semibold group-hover:text-primary transition">{PHONE_DISPLAY}</span>
                  </span>
                </a>

                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                  <span className="w-11 h-11 rounded-full bg-white border border-divider flex items-center justify-center text-primary shadow-sm">
                    <Mail size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-muted font-bold">Email Us</span>
                    <span className="text-ink font-semibold group-hover:text-primary transition">{EMAIL}</span>
                  </span>
                </a>

                <div className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full bg-white border border-divider flex items-center justify-center text-primary shadow-sm">
                    <MapPin size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-muted font-bold">Markets</span>
                    <span className="text-ink font-semibold">United States, United Kingdom & Switzerland</span>
                  </span>
                </div>
              </address>
            </div>

            <div className="mt-12 pt-8 border-t border-divider text-xs text-muted leading-relaxed">
              *We sign formal Business Associate Agreements (BAAs) with all HIPAA-covered dental practitioners prior to voice stream activations.
            </div>
          </div>

          {/* Form card */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-divider rounded-3xl p-8 sm:p-12 shadow-2xl shadow-ink/5 relative z-10">
              {/* Mode Selector Tabs */}
              <div className="flex border-b border-divider mb-8" role="tablist" aria-label="Contact options">
                {[
                  { id: 'calendar', label: '📅 Book Instantly' },
                  { id: 'form', label: '📩 Request Callback' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={contactMode === tab.id}
                    onClick={() => setContactMode(tab.id)}
                    className={`flex-1 pb-4 text-xs font-bold uppercase tracking-wider transition outline-none focus-visible:text-primary ${
                      contactMode === tab.id
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-muted border-b border-transparent hover:text-ink'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {contactMode === 'calendar' ? (
                <div className="text-center py-6 flex flex-col items-center">
                  <div className="text-5xl mb-6 animate-float" aria-hidden="true">📅</div>
                  <h3 className="text-2xl font-bold font-display text-ink mb-3">Book Your Walkthrough Instantly</h3>
                  <p className="text-muted text-sm max-w-md mx-auto leading-relaxed mb-8">
                    Select your exact date and timeslot directly in our schedule calendar. Confirm your live ggit.ai dental voice system demo instantly with zero waiting.
                  </p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full text-base shadow-xl shadow-primary/25"
                  >
                    Launch Live Scheduler
                    <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
                  </a>
                  <p className="text-[10px] text-muted mt-6 font-semibold">📅 Direct integration with Google Calendar</p>
                </div>
              ) : formState === 'sent' ? (
                <div className="text-center py-12" role="status">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md shadow-emerald-500/10">
                    <CheckCircle2 size={36} aria-hidden="true" />
                  </div>
                  {FORM_ENDPOINT ? (
                    <>
                      <h3 className="text-2xl font-bold font-display text-ink mb-2">Request Received!</h3>
                      <p className="text-muted text-sm max-w-sm mx-auto leading-relaxed">
                        Our system integration engineers are reviewing your details. We will contact you shortly to schedule your live walkthrough session.
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold font-display text-ink mb-2">Almost done — send the email</h3>
                      <p className="text-muted text-sm max-w-sm mx-auto leading-relaxed">
                        Your email app has opened with your details pre-filled. Hit send and we will contact you shortly. Nothing opened? Email us at{' '}
                        <a href={`mailto:${EMAIL}`} className="text-primary font-semibold">{EMAIL}</a>.
                      </p>
                    </>
                  )}
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="text-left">
                      <label htmlFor="cf-name" className={labelClass}>Your Name</label>
                      <input id="cf-name" name="name" type="text" autoComplete="name" required placeholder="Dr. Alex Carter" className={inputClass} />
                    </div>
                    <div className="text-left">
                      <label htmlFor="cf-email" className={labelClass}>Work Email</label>
                      <input id="cf-email" name="email" type="email" autoComplete="email" required placeholder="alex@clinicname.com" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="text-left">
                      <label htmlFor="cf-phone" className={labelClass}>Phone Number</label>
                      <input id="cf-phone" name="phone" type="tel" autoComplete="tel" required placeholder="+1 (555) 000-0000" className={inputClass} />
                    </div>
                    <div className="text-left">
                      <label htmlFor="cf-clinic" className={labelClass}>Clinic Name / PMS</label>
                      <input id="cf-clinic" name="clinic" type="text" autoComplete="organization" required placeholder="Apex Dental Group / Dentrix" className={inputClass} />
                    </div>
                    <div className="text-left">
                      <label htmlFor="cf-country" className={labelClass}>Target Market</label>
                      <select id="cf-country" name="country" required className={inputClass}>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="CH">Switzerland</option>
                      </select>
                    </div>
                  </div>

                  <div className="text-left">
                    <label htmlFor="cf-details" className={labelClass}>Additional Details</label>
                    <textarea
                      id="cf-details"
                      name="details"
                      rows="4"
                      placeholder="Tell us about your weekly missed calls or specific guidelines..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* File upload needs a form endpoint — mailto cannot carry attachments */}
                  {FORM_ENDPOINT && (
                    <div className="text-left">
                      <label htmlFor="cf-files" className={labelClass}>Clinic Guidelines / FAQ Script (Optional)</label>
                      <div
                        role="button"
                        tabIndex={0}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                          e.preventDefault()
                          addFiles(e.dataTransfer.files)
                        }}
                        onClick={() => fileInputRef.current?.click()}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), fileInputRef.current?.click())}
                        className="group border-2 border-dashed border-divider hover:border-primary bg-background/50 hover:bg-background rounded-2xl p-6 text-center cursor-pointer transition"
                      >
                        <Upload className="h-6 w-6 text-muted mx-auto mb-2 group-hover:text-primary transition" aria-hidden="true" />
                        <p className="text-xs text-ink font-semibold">
                          Drag & drop FAQ document here or <span className="text-primary">browse</span>
                        </p>
                        <p className="text-[10px] text-muted mt-1">PDF, DOCX, TXT (Max 5MB, up to {MAX_FILES} files)</p>
                        <input
                          id="cf-files"
                          type="file"
                          ref={fileInputRef}
                          onChange={(e) => {
                            addFiles(e.target.files)
                            e.target.value = '' // allow re-selecting the same file
                          }}
                          className="hidden"
                          accept=".pdf,.docx,.txt"
                          multiple
                        />
                      </div>
                      {fileError && <p className="text-xs text-red-600 mt-2">{fileError}</p>}

                      {uploadedFiles.length > 0 && (
                        <ul className="mt-3 space-y-1.5">
                          {uploadedFiles.map((file, i) => (
                            <li
                              key={`${file.name}-${file.size}-${i}`}
                              className="flex items-center justify-between bg-background border border-divider px-3 py-1.5 rounded-lg text-xs"
                            >
                              <span className="truncate text-ink font-medium">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => setFiles((prev) => prev.filter((_, idx) => idx !== i))}
                                className="text-red-500 hover:text-red-600 font-bold px-1"
                                aria-label={`Remove ${file.name}`}
                              >
                                Remove
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {formState === 'error' && (
                    <p className="text-sm text-red-600" role="alert">
                      Something went wrong sending your request. Please try again or email us at{' '}
                      <a href={`mailto:${EMAIL}`} className="font-semibold underline">{EMAIL}</a>.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'sending'}
                    className="w-full bg-primary hover:bg-primary-dark disabled:opacity-70 text-white font-bold py-4 rounded-2xl text-sm transition shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                  >
                    {formState === 'sending' ? (
                      <>Sending your request... 🕒</>
                    ) : (
                      <>
                        Secure My Live Walkthrough Call
                        <ArrowRight size={16} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
