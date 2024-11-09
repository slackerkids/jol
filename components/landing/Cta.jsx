import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-24 bg-base-200" id="cta">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Готов начать свою поездку?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Туристический сервис, который поможет вам сделать свою поездку незабываемой.
        </p>
        <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/dashboard" });
            }}
          >
            <button type="submit" className="btn btn-primary btn-lg">
              Начать свою поездку
            </button>
          </form>
      </div>
    </section>
  )
} 