import Hero from "@/components/Hero";

const artists = [
  {
    name: "Malik Thorne",
    genre: "R&B / Soul",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdfPa6b1rcLFqPQFKIC8XkXKQa4Mf1VsTikn-TVxNK7bSkFVyMwYH-w6aqFJ5L6Ryv6-Uv4uuEhmjEBnnhGdLTeQXeuXitQlx8HOVAe4kMnESU1bL5SByAVdaIXuGk2G3fjNTsLhY-7QCmFS-HxeuFS05Giw0HSOzyt_Zfw6ohKL1WANVwug-g1FBY3bSfRW4yZEimirOOV4sh02hxiwLQuWGcMIjjSHE4gfsV5w9w5QmO3MGH1GT86nJle0ANjH_tbRO2Vryd4DCc",
  },
  {
    name: "Sasha Vane",
    genre: "Hip Hop",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhSkiCDKp0yVnsBiCTwKkP55JYFi62ldDIrLD1hjMONsqVJQR_Tv02QJt0PEetxhYZF_tOuvQMQm0FU1uWAn8itkXOW5cPzTjJJbn6N9jLnHQgijsnXZC9R2uBwmFrcMT4JgKF_7vMMtMRHnpVU87Yu_-WCiigUg3mOXI1Ll4J1fp-fw1MbPk0UWg6m6Q8EZbeKJZSdWZd-0laSjwph6FJyhfZ9iHGRMrBj4ctm1UIwpaDeOU0aRMdhAizfW-Y4rignKRzB7ktIa4T",
  },
  {
    name: "Kojo Rhythm",
    genre: "Afrobeats",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCeQkFZGGYNGlNk8y6g7vmBQ7eP2uRxoJraVyIyO5LDBu4BK9-che9hm2Cla2UWWdcJa9IaDO2IuzFooGuTXn9oSbgbvxIhexeLTMrgUf91CK3ZivN8p_wordGvGUqCZixfcdvvGIKmO8sysOS6zXDoXfpLXMSSYoRz53m10SxASw66B8d6rqmOQzV0ZskLW9Yua6dJTzWmpoHDGTMJiAdfyEiJpCsnQdWU_KS83ecydAyiz5SL_tyuAPCuBki2RapeBOKbt_JHVwX",
  },
  {
    name: "Emani Rose",
    genre: "Neo-Soul",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvYfkCXGHk5z1jTvarhdGTmgkxPCTr6XvXr7NpNAtNB4OtLb0lqUELo05hHP7jsYRRwXhpfMyELmG4VuarrEr-Hx9CBYWQoMm2SCAYQ0ZqqVx6G5jtAgjYT7_3p7xzCIrBNhpl4TlwOOvxVSlSy9WKOr-X47mo2nNKfDVPRSKzMxgz1hPQaF6OlSaQkfvAYtVX2yL8uCBjHPWXh5QqnR0qO_uwIFtU2uIzqVmvktJvY_EvKqo6bwvJPNkrEO582zjR3mWVWsnR9t5M",
  },
  {
    name: "Ghost Writer",
    genre: "Hip Hop",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrgvAn1qVrulPs8338qQvQpElaPWKnDaD4GgKSjOEDtK9qH-MZb4WxOyLhwWn-wEOGUDDvDg58DMVQHfSSadRenQRli1Mt3n8vUfM3QsTWZQQINy-5IDmH_90o-kD7emYLRmjBUJd6lnp9zc_CHtO37HRQbSQAyLsD_f-RgdLTNjxwkMLa1xFrtvHtViKu6QMAmwCEIRRexZQBAo52fIf3Z6P2HRRhnuxSldTpqLtfN1WbfsZb6g1gjDSF5Nh2Kqf827BC7OxSnK7z",
  },
  {
    name: "Lumi Bass",
    genre: "Afrobeats",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2CRqGaD9eGcJZB4_uvKk5dcImgZYR9LnQTa3eWjd826SPKNp7v9ajKPxKia-AsWQc8icUU3wNoYYoe5kOxbg2tDq1HVZr128L4wGRfxmE2oMxcLr6O-JQl5Y8o8TXIn2Y-JBbPd6-vaAV3LM9-ZBu4L0gY1s50Np5vRqoQptmfFoadXrBsGVZEvRRGR1ibeljbVXM8CnoEh-GUOI53KWI31HJ66TNi9sDo2kI8RCmIHcoT_2Umq-rhkT9ivBK4cCrlf_FxPZYCgbt",
  },
];

export default function Artists() {
  return (
    <>
      <Hero
        subtitle="The Curated Collective"
        title="Our Artists"
        description="Experience a curated collective of soulful R&B, rhythmic Hip Hop, and vibrant Afrobeats."
        ctaText="JOIN THE EXPERIENCE"
        ctaLink="/about"
      />

      <section className="py-20 px-4 md:px-12 bg-[#1c1b1b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="group relative bg-[#4E0707] rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 bg-gradient-to-t from-[#4E0707] via-[#4E0707] to-transparent">
                  <span className="text-xs font-medium uppercase tracking-widest text-[#E9C349] opacity-80 mb-2 block">
                    {artist.genre}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 font-serif text-[#e5e2e1]">
                    {artist.name}
                  </h3>
                  <button className="bg-[#E9C349] text-[#3c2f00] px-6 py-2 rounded-full font-bold text-xs uppercase transition-all hover:shadow-[0_0_20px_rgba(233,195,73,0.4)]">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}