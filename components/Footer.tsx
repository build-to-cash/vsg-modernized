import Link from 'next/link';

const footerLinks = {
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/artists', label: 'Artists' },
    { href: '/contact', label: 'Contact Us' },
  ],
  social: [
    { href: '#', label: 'Instagram' },
    { href: '#', label: 'Twitter' },
    { href: '#', label: 'Facebook' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] pt-16 pb-8">
      <div className="px-4 md:px-12 mx-auto max-w-[1920px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold italic text-[#E9C349] font-serif mb-4">
              VSG Bliss
            </h3>
            <p className="text-[#dbc0bd] opacity-70 max-w-md">
              The curated lounge experience. A high-end, late-night venue where 
              Hip Hop, Afrobeat, and Caribbean rhythms converge.
            </p>
          </div>

          <div>
            <h4 className="text-[#E9C349] font-medium mb-4 tracking-wider text-sm uppercase">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-[#e5e2e1] opacity-70 hover:text-[#E9C349] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#E9C349] font-medium mb-4 tracking-wider text-sm uppercase">
              Connect
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-[#e5e2e1] opacity-70 hover:text-[#E9C349] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#554240] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#dbc0bd] opacity-50 text-sm">
            © {new Date().getFullYear()} VSG Bliss. All rights reserved.
          </p>
          <p className="text-[#dbc0bd] opacity-50 text-sm">
            21+ | Play Responsibly
          </p>
        </div>
      </div>
    </footer>
  );
}