"use client";

export function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1731266806784-123YYCP5HJCJDHFQ19NH/BAS_background_winter1.jpg?format=2500w"
          alt="Swiss Alps at sunset"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 pt-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-proxima font-bold tracking-wide leading-relaxed text-shadow uppercase">
            A bright new dawn for digital transfers, sound money and personal freedom.
          </h1>
        </div>
      </div>
    </section>
  );
}
