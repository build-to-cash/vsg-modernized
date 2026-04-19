import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero
        subtitle="The Curated Lounge"
        title={
          <>
            Rhythm <span className="italic text-[#E9C349]">Refined.</span>
          </>
        }
        description="A nocturnal sanctuary where the pulse of Afrobeat meets the prestige of high-end mixology. Experience entertainment curated for the global elite."
        ctaText="DISCOVER THE EXPERIENCE"
        ctaLink="/about"
        secondaryCtaText="VIEW CALENDAR"
        secondaryCtaLink="/events"
      />

      <section className="py-16 md:py-32 px-4 bg-[#1c1b1b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="col-span-1 lg:col-span-5 order-2 lg:order-1">
              <span className="text-[#E9C349] text-xs tracking-[0.4em] uppercase mb-6 block font-medium">
                Our Philosophy
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Intersection of <br />
                <span className="text-[#E9C349]">Culture and Class</span>
              </h2>
              <div className="space-y-6 text-[#dbc0bd] leading-relaxed text-base md:text-lg">
                <p>
                  VSG Bliss isn&apos;t just a venue; it&apos;s a statement. We have
                  meticulously crafted an environment that bridges the gap between
                  raw cultural energy and sophisticated luxury.
                </p>
                <p>
                  From the acoustic treatment that preserves the soul of Caribbean
                  rhythms to the bespoke velvet furnishings, every inch of the
                  lounge is designed to host the most exclusive gatherings.
                </p>
              </div>
              <div className="mt-8 md:mt-12 flex items-center gap-4">
                <div className="h-1 w-12 bg-[#E9C349]/30 rounded-full" />
                <span className="italic text-[#E9C349] text-lg md:text-xl font-serif">
                  The Gold Standard of Nightlife
                </span>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-7 order-1 lg:order-2">
              <div className="relative">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl z-20">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url(https://lh3.googleusercontent.com/aida-public/AB6AXuCJAeJDm7jXoX-RVr6XowXA6Sg2zPG6R0ayrYImAwfdKJSBu6jmKOB0Gbx6eWjamhxdMilgfDXevY1YimenSczbXn1-igic5U9x-fVxMWGC1H8Ku18CwX5Q0iOyFDRg14e00bp92spWNx99Se8_JR_T_BtEQqCysB9smPmoV9IXUZ3zpTzmJIpjvd5F6K1EFPqHZ9AfdhgfcNRWqqfj7yIqDYqI2Ycq2Wv-SjJW2ip8BNWaUMic-CFN8-GHppjUXdMkF8EvN9Zw4JNM)',
                    }}
                  />
                </div>
                <div className="hidden md:block absolute -bottom-12 -left-12 w-48 md:w-64 aspect-square bg-[#4E0707] rounded-xl z-10 shadow-2xl" />
                <div className="hidden md:block absolute -top-6 -right-6 w-32 md:w-48 aspect-square bg-[#2a2a2a] rounded-xl z-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 bg-[#131313]">
        <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[#E9C349] text-xs tracking-[0.4em] uppercase mb-4 block font-medium">
              Live Program
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold">
              Exclusive Gatherings
            </h2>
          </div>
          <button className="flex items-center gap-2 text-[#E9C349] font-bold hover:gap-4 transition-all">
            <span>SEE ALL EVENTS</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 md:row-span-2 relative group rounded-xl overflow-hidden bg-[#2a2a2a] min-h-[400px]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBvSzSJbeqW334NiCTw0yTPT2I2cu_zOK4SkZ_Y0UGxUFQ_o18UkyrBpt1_bjVPQN13KGinFr_cj71x2i3TCG5zXerUDLqQhO6COJgCnmghhD6u4cs4hTONV5TcxDuToGzKo3r5QXuzAE73DofCf7HH_xkIdLuSQ6wMoUFnJfLvPSlKw6jhldPHdL_va29hVVE9YrBKxdVP0j-8QFNGSrg9Z9SFezwtjcmPRhGigL7IiazmS5OuEHE8v1V9GZQtJACQjb43yq9og29A)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent" />
            <div className="absolute bottom-0 p-6 md:p-10">
              <span className="bg-[#E9C349] text-[#3c2f00] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 inline-block">
                Vibe Spotlight
              </span>
              <h3 className="text-2xl md:text-4xl font-serif font-bold mb-2">Midnight in Lagos</h3>
              <p className="text-[#dbc0bd] mb-4 md:mb-6 font-light">
                The ultimate Afrobeat fusion night with international guest DJs.
              </p>
              <span className="font-serif italic text-[#E9C349]">
                Friday, Oct 18 • 10:00 PM
              </span>
            </div>
          </div>

          <div className="md:col-span-2 relative group rounded-xl overflow-hidden bg-[#4E0707] min-h-[200px] md:h-80">
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-1">Rhythm &amp; Rosé</h3>
              <p className="text-[#dbc0bd] text-sm mb-4">
                A sunset session featuring deep house and premium vintages.
              </p>
              <span className="font-serif italic text-[#E9C349] text-sm">
                Sunday, Oct 20 • 05:00 PM
              </span>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-40 pointer-events-none">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBDEQglY0ltgg9QZmHuYuPXXUaSqThFA_gfQiCCaExlYO_-tMghB_VHu5e6Dy9p0lcBw907HbaXIJc7MAXGbq2cCV14SZsijhRd3rQ6paJ7toB1m3J5FF4xTzinEWFfRcKHAatl2MbzPrdPHE_y6ozQ-ydIYKnA41QukhacaskArjjl_54LKTbne37k5dsC9ri3pVTqPGru_R6u-MnNEWyS35JBb_4dFnAvbXJsmyf-_igzoafXGyUs5Yf_3nFpwGpiz8qX-N5Auuv6)',
                }}
              />
            </div>
          </div>

          <div className="relative group rounded-xl overflow-hidden bg-[#2a2a2a] p-6 md:p-8 flex flex-col justify-between transition-all hover:bg-[#393939]">
            <div>
              <span className="material-symbols-outlined text-[#E9C349] text-2xl md:text-3xl mb-4 block">
                piano
              </span>
              <h3 className="text-lg md:text-xl font-serif font-bold mb-2">Velvet Jazz</h3>
            </div>
            <span className="text-sm text-[#dbc0bd] uppercase tracking-widest">
              Tuesdays • 08 PM
            </span>
          </div>

          <div className="relative group rounded-xl overflow-hidden bg-[#2a2a2a] p-6 md:p-8 flex flex-col justify-between transition-all hover:bg-[#393939]">
            <div>
              <span className="material-symbols-outlined text-[#E9C349] text-2xl md:text-3xl mb-4 block">
                liquor
              </span>
              <h3 className="text-lg md:text-xl font-serif font-bold mb-2">Cigar Social</h3>
            </div>
            <span className="text-sm text-[#dbc0bd] uppercase tracking-widest">
              Thursdays • 09 PM
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-4 bg-[#1c1b1b]">
        <div className="bg-[#131313] rounded-2xl md:rounded-[4rem] p-8 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl mx-auto max-w-4xl">
          <div className="absolute inset-0 bg-[#4E0707]/05 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Request Your Invitation
            </h2>
            <p className="text-[#dbc0bd] mb-8 md:mb-10 leading-relaxed">
              Access to VSG Bliss is reserved for those who appreciate the finer
              rhythms of life. Join our community for priority booking and exclusive
              event access.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                className="bg-[#2a2a2a] border-none px-6 py-4 rounded-md focus:ring-1 focus:ring-[#E9C349] text-[#e5e2e1] w-full md:w-80 focus:outline-none"
                placeholder="Email Address"
                type="email"
              />
              <button className="bg-[#E9C349] text-[#3c2f00] font-bold px-6 md:px-8 py-4 rounded-md hover:brightness-110 transition-all">
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}