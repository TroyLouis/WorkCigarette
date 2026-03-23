import EmailSignup from "@/components/EmailSignup";

export default function Home() {
  return (
    <main>
      {/* Hero with waitlist */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 pt-24 pb-24 bg-poppi-yellow">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-ink tracking-tight text-center max-w-4xl">
          cola & espresso
        </h1>
        <p className="mt-8 text-xl text-ink/80 max-w-xl mx-auto text-center lowercase">
          a little boost when you need it most. coming soon.
        </p>
        <div className="mt-14 flex flex-col items-center">
          <EmailSignup />
          <p className="mt-6 text-sm text-ink/60 lowercase">
            no spam. unsubscribe anytime.
          </p>
        </div>
      </section>

    </main>
  );
}
