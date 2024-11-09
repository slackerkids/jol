import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-24 bg-base-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied users who have already transformed their workflow.
        </p>
        <Link href="/signup" className="btn btn-primary btn-lg">
          Start Free Trial
        </Link>
      </div>
    </section>
  )
} 