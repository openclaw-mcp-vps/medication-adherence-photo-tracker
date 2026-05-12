export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Medication Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Miss a Dose.<br />
          <span className="text-[#58a6ff]">Prove It with a Photo.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Snap a photo of your daily pills. Our AI instantly verifies the correct medications and dosages, then sends a compliance report straight to your doctor.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card surprises.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '📸', title: 'Photo Verification', desc: 'Upload a daily pill photo and AI confirms every medication matches your profile.' },
            { icon: '📋', title: 'Doctor Reports', desc: 'Automated weekly adherence reports delivered directly to your healthcare provider.' },
            { icon: '🔔', title: 'Smart Reminders', desc: 'Timely reminders keep patients on schedule and caregivers informed.' }
          ].map(f => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited daily photo uploads',
              'AI medication verification',
              'Weekly doctor adherence reports',
              'Automated patient reminders',
              'Caregiver dashboard access'
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the AI verify my medications?',
              a: 'You photograph your pills each day. Our AI compares them against your saved medication profile, checking pill shape, color, and count to confirm everything matches.'
            },
            {
              q: 'Who receives the adherence reports?',
              a: 'Reports are sent to the healthcare providers you designate during setup. You control who has access at all times.'
            },
            {
              q: 'Is my health data kept private?',
              a: 'Yes. All photos and health data are encrypted in transit and at rest. We never sell your data and comply with HIPAA guidelines.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} MedTrack. All rights reserved.
      </footer>
    </main>
  )
}
