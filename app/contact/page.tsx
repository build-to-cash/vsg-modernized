import Hero from "@/components/Hero";

export default function Contact() {
  return (
    <>
      <Hero
        subtitle="Get In Touch"
        title="Contact Us"
        description="Have questions or want to book a table? We'd love to hear from you."
        ctaText="DISCOVER THE EXPERIENCE"
        ctaLink="/about"
        secondaryCtaText="VIEW CALENDAR"
        secondaryCtaLink="/events"
      />

      <section className="py-16 md:py-32 px-4 md:px-12 bg-[#1c1b1b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">
                Get in <span className="text-[#E9C349] italic">Touch</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#E9C349] text-sm uppercase tracking-wider mb-2">
                    Address
                  </h4>
                  <p className="text-[#e5e2e1]">123 Bliss Street, Downtown</p>
                </div>
                <div>
                  <h4 className="text-[#E9C349] text-sm uppercase tracking-wider mb-2">
                    Phone
                  </h4>
                  <p className="text-[#e5e2e1]">(555) 123-4567</p>
                </div>
                <div>
                  <h4 className="text-[#E9C349] text-sm uppercase tracking-wider mb-2">
                    Email
                  </h4>
                  <p className="text-[#e5e2e1]">hello@vsgbliss.com</p>
                </div>
                <div>
                  <h4 className="text-[#E9C349] text-sm uppercase tracking-wider mb-2">
                    Hours
                  </h4>
                  <p className="text-[#e5e2e1]">Tue-Sun: 6PM - 3AM</p>
                </div>
              </div>
            </div>

            <div className="bg-[#20201f] p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6 font-serif">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-[#dbc0bd] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[#2a2a2a] text-[#e5e2e1] rounded-md border border-[#554240]/15 focus:border-[#E9C349] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-[#dbc0bd] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[#2a2a2a] text-[#e5e2e1] rounded-md border border-[#554240]/15 focus:border-[#E9C349] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-[#dbc0bd] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-[#2a2a2a] text-[#e5e2e1] rounded-md border border-[#554240]/15 focus:border-[#E9C349] focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#E9C349] text-[#3c2f00] font-bold text-sm rounded-md transition-all hover:shadow-[0_0_20px_rgba(233,195,73,0.3)]"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}