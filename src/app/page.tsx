import EmailSignup from "@/components/EmailSignup";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-ink tracking-tight">
          Something great is on the way
        </h1>
        <p className="mt-6 text-lg text-ink/70 max-w-md mx-auto">
          We&apos;re building something new. Join the waitlist to be the first to know when we launch.
        </p>
        <div className="mt-10 flex justify-center">
          <EmailSignup />
        </div>
        <p className="mt-8 text-sm text-ink/50">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </main>
  );
}
