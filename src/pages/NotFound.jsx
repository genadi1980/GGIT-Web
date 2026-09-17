import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-ink grid-bg flex items-center justify-center px-6">
      <div className="glass max-w-lg w-full rounded-3xl border border-divider shadow-xl p-10 text-center relative z-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-bold">Error 404</p>
        <h1 className="text-4xl font-extrabold font-display tracking-tight mt-3 mb-4">Page not found</h1>
        <p className="text-muted mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-primary/25"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </main>
  )
}
