import Hero from "@/components/Hero";

export default function Events() {
  return (
    <>
      <Hero
        subtitle="The Curated Calendar"
        title={
          <>
            Moments of <span className="text-[#E9C349]">Prestige</span>
          </>
        }
        description="From the rhythmic pulse of Afrobeat nights to the intimacy of curated food fairs, experience the intersection of high culture and lifestyle."
        ctaText="SECURE ACCESS"
        ctaLink="/contact"
      />

      {/* Featured Spotlight */}
      <section className="px-4 md:px-12 py-24 bg-[#1c1b1b]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative group">
            <div className="absolute -inset-4 bg-[#4E0707]/20 rounded-xl blur-2xl group-hover:bg-[#4E0707]/30 transition-all duration-700" />
            <div className="relative rounded-xl w-full h-[500px] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtUZsXjPrMt6pWQGnY2FZLJzhiRXm34WiudVqmLMfFasW542meP9yd3zdvenmhmy3OYV6Lu-bmjLdsUykKq3wt4qFZUyNurYdjLkxTZ7lFPotC8UjrLVPISkdBOZKt16nnNIvg71b2z8egTcBSzndjeRRla_DGEOE4l3mZkbSPbTXYR8NL7E0FR1IEQWvfoxih43aRNzL1BbJjnJAlyvjd3cWXCykORnLNiuTvG4hc3ClYitH_Xi5orEycnIar2GY3XKskWuGaEXsw" 
                alt="Spotlight Event"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 text-[#E9C349] text-xs tracking-widest uppercase">
              <span className="w-12 h-px bg-[#E9C349]"></span> Spotlight Event
            </span>
            <h2 className="text-5xl font-serif font-bold text-[#e5e2e1] leading-tight">
              Vibe &amp; Vine: <br />Afrobeat Collective
            </h2>
            <p className="text-[#dbc0bd] leading-relaxed text-lg italic font-light">
              A sensory journey through West African rhythms paired with curated wine selections.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-4 text-[#e5e2e1]/80">
                <span className="material-symbols-outlined text-[#E9C349]">calendar_today</span>
                <span className="font-medium tracking-wide uppercase text-sm">October 24, 2024 • 9:00 PM</span>
              </div>
            </div>
            <div className="pt-6">
              <button className="bg-[#E9C349] text-[#3c2f00] px-8 py-4 rounded-md font-bold tracking-widest uppercase text-xs hover:shadow-[0_0_20px_rgba(233,195,73,0.4)] transition-all">
                Secure Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="px-4 md:px-12 py-32 bg-[#131313]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12">
            <div className="max-w-2xl">
              <h3 className="text-4xl font-serif italic text-[#e5e2e1] mb-4">Upcoming Engagements</h3>
              <p className="text-[#dbc0bd] font-light">
                Browse our curated selection of concerts, lifestyle fairs, and exclusive social gatherings.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-[#1c1b1b] rounded-xl overflow-hidden shadow-xl flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwI7THm58NLW4ODdNpHPxtMEOYF5IvgMGGMHzH0-Un9go_TxJ9F7N5-rxxdOku7ldyhDu2jLhzWks0K6MPsJOYXJF_QQIZ22jkM5-3bl6TTM65DnwdTjXTaqGcC9kzxppbRMejMMB-8JW2oy4vSNf-7ZxA9H1oFkneqfV9Th04Dtr6zr6Hk9Vzq6NEaEBcV13XHf-aqPfy-2Y3kasHrCDtjM9NjSCb4LHYlpH-GYUWuDb14UFLzsaKMjn-xZO8ezt70D6oh9NHQs54" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Event"
                />
                <div className="absolute top-4 left-4 bg-[#131313]/80 backdrop-blur-md px-3 py-1 rounded-sm">
                  <span className="text-[#E9C349] text-[10px] font-bold uppercase tracking-widest">Hip Hop</span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-serif font-bold mb-3 group-hover:text-[#E9C349] transition-colors">Late Night Lyrics</h4>
                  <p className="text-sm text-[#dbc0bd] mb-6 line-clamp-2">An intimate R&amp;B and Hip Hop showcase featuring underground legends.</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[#E9C349] font-bold">$45</span>
                </div>
              </div>
            </div>

            {/* Card 2 - Featured Wide */}
            <div className="group relative bg-[#4E0707] rounded-xl overflow-hidden shadow-xl md:col-span-2 flex flex-col md:flex-row">
              <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfXT3xp6Ve9sAMPs9026q_RLvxsJ6MKamCvoTrUABL6Vg7xCDDyhMcqQ61O8LAPbf_kp6Zd3vGYgilYKjeVFfAAWoLx1sd-6bj_H8YnYuFwMJJgFQ6PrPkiUaHir9hy7LIdyA1FVjT83GfIH0Sid4WXPVH8hvcV1ClwnfzDK3doyLNNS9XluUaxybJysvCcewWyyL_qM-mjXX2XEUN_cALCs2RxQ7gFSA7nLgLQkdUkplg57R5jEQe9CEm-pDn187ok1AUYVUEVeFM" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Event"
                />
              </div>
              <div className="p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-[#E9C349] text-[10px] tracking-[0.2em] uppercase mb-4 block font-medium">Lifestyle Series</span>
                <h4 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight text-[#e5e2e1]">Bliss Barbecue &amp; Soul Food Fair</h4>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-[#1c1b1b] rounded-xl overflow-hidden shadow-xl flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTk9jNkyCRquTNpedilbEfD0j55o5C-I4jarMinq9FaAm-OLkYMLJW7j2aMUuw4lR4EWRWnKdb3MXayA9s6bZMVXPmuoeu7kE62AMJM-7rgf-GqVHjO053wSqA74gN6EXgYFnyIz0ByMSL8H0CtA4gxU-sWrt18uVNNYRENjimtej49_W79V6Zrz-CGOP3SPkvwJUtdgo_uysC-s5DP7R8e9gS2W9e8lulGFrDD5UWFATlySbx56HxTmTSn2LxSt8rni73ty1QOt3Y" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Event"
                />
                <div className="absolute top-4 left-4 bg-[#131313]/80 backdrop-blur-md px-3 py-1 rounded-sm">
                  <span className="text-[#E9C349] text-[10px] font-bold uppercase tracking-widest">R&amp;B</span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <h4 className="text-2xl font-serif font-bold mb-3 group-hover:text-[#E9C349] transition-colors">Silk &amp; Satin Echoes</h4>
                <span className="text-[#E9C349] font-bold">$30</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-[#1c1b1b] rounded-xl overflow-hidden shadow-xl flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_I7i2YxgkmPgEQFeOjakihgIb6bivVXpk29DYKufW0aqPat6SRsdwYushgf0zwVGvq0Q9UcI7H6Tqlr94N-aVYJeVZjKuyrocNhAvbPWDfjbHXPjVaLToC8XAwzYYn8ZvJcLtVozOUbswww5bvvIjUPPRoqaivZrFjNRtQDMJFybFFgN7NEl2o12uUmE7JxpKF6TAzYbqK43S0AItD1RJMx4f-OmCYx_mRR_u_6ywI4EqwU0yvqvDS8S9TWqg9dc0xxzgRhBU8dkV" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Event"
                />
                <div className="absolute top-4 left-4 bg-[#131313]/80 backdrop-blur-md px-3 py-1 rounded-sm">
                  <span className="text-[#E9C349] text-[10px] font-bold uppercase tracking-widest">Pop</span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <h4 className="text-2xl font-serif font-bold mb-3 group-hover:text-[#E9C349] transition-colors">Neo-Pop Sessions</h4>
                <span className="text-[#E9C349] font-bold">$55</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 md:px-12 bg-[#4E0707] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-serif font-bold italic mb-6 text-[#e5e2e1]">
            Never Miss a <span className="text-[#E9C349]">Moment</span>
          </h2>
          <p className="text-[#e5e2e1]/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join our inner circle for priority bookings and secret event announcements.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input 
              className="w-full md:w-96 bg-[#2a2a2a]/50 border-none rounded-md px-6 py-4 text-sm font-medium tracking-widest focus:ring-1 focus:ring-[#E9C349] text-[#e5e2e1] placeholder:text-[#e5e2e1]/30 focus:outline-none" 
              placeholder="ENTER YOUR EMAIL" 
              type="email"
            />
            <button className="w-full md:w-auto bg-[#E9C349] text-[#3c2f00] px-10 py-4 rounded-md font-bold text-xs uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}