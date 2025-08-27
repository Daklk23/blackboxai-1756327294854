import Link from 'next/link'
import { Logo } from './logo'
import { ThemeToggle } from './theme-toggle'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Navigacija': [
      { href: '/', label: 'Početna' },
      { href: '/o-nama', label: 'O nama' },
      { href: '/team', label: 'Team' },
      { href: '/kako-poceti', label: 'Kako početi' },
    ],
    'Zajednica': [
      { href: '/discord', label: 'Discord' },
      { href: '/pravila', label: 'Pravila' },
      { href: '/poslovi', label: 'Poslovi' },
      { href: '/kontakt', label: 'Kontakt' },
    ],
    'Podrška': [
      { href: '/donacije', label: 'Donacije' },
      { href: '/kontakt', label: 'Kontakt' },
    ],
  }

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Logo />
              <span className="text-xl font-bold">
                Vantage <span className="text-lime-500">RP</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Zajednica fokusirana na kvalitetan RP, poštenu ekonomiju i nezaboravne priče. 
              Pridruži se i postani deo Vantage grada.
            </p>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <span className="text-sm text-muted-foreground">
                Promeni temu
              </span>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-foreground mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-lime-500 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Vantage Roleplay. Sva prava zadržana.
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <Link href="/pravila" className="hover:text-lime-500 transition-colors">
              Pravila servera
            </Link>
            <Link href="/kontakt" className="hover:text-lime-500 transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
