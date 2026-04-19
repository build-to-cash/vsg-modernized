import Hero from "@/components/Hero";

export default function About() {
  const founders = [
    {
      name: "Vanessa James",
      role: "The Creative Architect | Jamaica",
      bio: "Bringing the rhythmic spirit of Kingston to the lounge floor, Vanessa oversees the sensory experience.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrthhNWv1TJTewaQbbHuOyIKGlZSnDjLdtpE6dtGks7dtevHuFQf6vDdXgWWcRSZapF7eItn9wxsLphSjm09Vhijm2xidhGl-4VM5CLGriBBQvo4MXJTO_G8S23gJ8eQ1EghqoWF_UCvP9pQlFmvQGhQR7GBSaWt_rFL7DwAz6XgU7beeEksSZnzfOuRgkaySYnCxT00CTPftAQR00KVHSDv_wbev5ng4Mux7L1ZChWeqNGIKDZ6DYvTkgWpeaHlIeGvqS7UwJZfvL",
    },
    {
      name: "Simon Claude",
      role: "The Cultural Liaison | West Africa",
      bio: "Simon's roots in West Africa drive the brand's commitment to hospitality.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-RBm6pBxiqqVYGnqBPD7u8YvDDHx7aeLlrNUmWtbiGCbl0DUafVGTfg_VoxR93CqOoOjL_mafUhLRrvR2oSZAcJVypxH2IoAE3N8nBTrqFlYmbQHZ8vywPWtX4fv3QHKDZgGywaMO5UjCBJ_nvvNtOIYSYlMi-X4pPW636LcAx9jhZFQ62UNFgi_t4NoRQE2u6LeOWBMOTsllKo43e6J1LbcR-JLVkcWt278KZudE8K7vF76kO5B0xxGRJ41jHZV7Fkk9oFd6PTCX",
    },
    {
      name: "Gabriel Slim",
      role: "The Strategic Pulse | Toronto",
      bio: "A Toronto native with a pulse on the city's evolving landscape, Gabriel manages operations.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJPJnsFiPuVhZyhSpE_wip3MthA54aR_EMu7wxxrbO1nUz3FgKt6RZD13dYBEl2LwBrecqSPX4jMUIQXXj18BVxFzAu5A8u08t5wZTr4B4rmpS0K6SmyVvuxQL6htWn5jxLJWgCPyYZASOmrioBG4vC2Tio6PuYhxcJupcPCdR4_F7Fn_PKnaSAwo3cB5gYaKDFUBE1IuouOXgvMWb1hTF3BkUieoV8sGpdlmhdJ2LcdhoNHRiJSaCdE1FFLy1sfhBJnxTlJ8qIu5F",
    },
  ];

  return (
    <>
      <Hero
        subtitle="The Visionaries"
        title={
          <>
            Crafting the <span className="italic text-[#E9C349]">Curated</span> Rhythm.
          </>
        }
        description="VSG Bliss was born from a singular desire: to bridge the gap between global heritage and local exclusivity. Founded by three friends, one mission."
      />

      <section className="py-16 md:py-32 px-4 md:px-24 bg-[#1c1b1b]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start max-w-7xl mx-auto">
          <div className="md:col-span-5 md:sticky md:top-32">
            <span className="text-[#E9C349] font-medium text-sm tracking-widest uppercase block mb-6">
              Our Roots
            </span>
            <h2 className="text-5xl font-bold mb-8 leading-tight font-serif">
              From Jamaica to West Africa, Rooted in Toronto.
            </h2>
            <p className="text-[#dbc0bd] leading-loose text-lg mb-8">
              The &quot;V&quot;, the &quot;S&quot;, and the &quot;G&quot; represent more than just names. They represent a collision of cultures—Jamaican warmth, West African soul, and the polished edge of Toronto&apos;s metropolitan nightlife.
            </p>
            <div className="p-8 bg-[#4E0707] rounded-xl">
              <span className="material-symbols-outlined text-[#E9C349] mb-4 block">
                auto_awesome
              </span>
              <p className="italic text-xl font-serif text-[#e5e2e1]">
                "Exclusivity isn't about who you let in, but the feeling you create once the doors are closed."
              </p>
            </div>
          </div>

          <div className="md:col-span-7 mt-16 md:mt-0 space-y-24">
            {founders.map((founder, index) => (
              <div key={founder.name} className="group relative">
                <div className="absolute -inset-4 bg-[#2a2a2a] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`relative flex flex-col ${index === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
                  <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden rounded-xl shadow-2xl bg-[#20201f]">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className={`w-full md:w-1/2 ${index === 1 ? 'text-right md:text-left' : ''}`}>
                    <h3 className="text-3xl font-bold text-[#E9C349] mb-2 font-serif">
                      {founder.name}
                    </h3>
                    <p className="text-xs tracking-widest uppercase text-[#dbc0bd] opacity-50 mb-4">
                      {founder.role}
                    </p>
                    <p className="text-[#dbc0bd] leading-relaxed mb-6">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#20201f]">
        <div className="max-w-7xl mx-auto px-6 md:px-24">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArwD6FsNaNes6OFK4N2coq_0a1u7lwvJIDzEZRwzmyAqzhYks2m_VCdDZvq6TaLl9G2CcbnYXaxPSEJGIMzoXJCFTEnU7RTt-nuSYiPf7D2LzBD1ynB4AgMSQ6gEs_UMda-XP3h0mvMuQF07ISLZlseXKnLEytk1ewxJTFJz6QENYzfRQ5xLt7lk2y7NUVu8VIRFUTuN4z_E0LwmsJrUoD4edngrk2jbHjYE7sWMzo4NANHLIY2tF4H6TSe_Xmq5ShAQ6M6lEPLGS6" 
                alt="Cocktail Detail"
                className="rounded-xl shadow-2xl bg-[#2a2a2a]"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 font-serif">
                More Than a Space. <br />A Legacy.
              </h2>
              <p className="text-[#dbc0bd] leading-relaxed mb-10">
                We didn&apos;t just build a lounge. We built a sanctuary for those who appreciate the finer details.
              </p>
              <button className="inline-flex items-center gap-4 px-10 py-4 bg-[#E9C349] text-[#3c2f00] font-bold rounded-md hover:shadow-[0_0_30px_rgba(233,195,73,0.4)] transition-all duration-500">
                Explore the Bliss Experience
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}