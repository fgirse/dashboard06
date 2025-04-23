

"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import { cn } from "../../../../lib/lib/utils"
import { useTranslations } from "next-intl";



export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title)
  }

  const t = useTranslations("Navbar")  

  // Navigation data
const navigation = [

  { title: t("home"), href: "/" },
    {
      title: t("about"),
      href: "#",
      children: [
        { title: t("whoweare"), href: "werwirsind", description: "Track and visualize your data" },
        { title: t("whatwedo"), href: "waswirtun", description: "Einblicke in unser kreatives Schaffen" },
        { title: "cv", href: "curriculum", description: "Curriculum Fernanda Perreira" },
        { title: "frei", href: "#", description: "zur freien Verfügumg  " },
      ],
    },
    {
      title: "Rechtliches",
      href: "rechtliches",    
      children: [
        { title: "Impressum", href: "impressum", description: "Infos die laut Gesetzgeber zur Verfügung gstellt werden müssen" },
        { title: "For Enterprise", href: "Datenschutzerklärung", description: "Alles zum Datenschutz " },
        { title: "For E-commerce", href: "#", description: "Sell products online" },
        { title: "For Creators", href: "#", description: "zur freien Verfügumg  " },
      ],
    },
    { title: "Galery", href: "galleria" },
    { title: "Service", href: "services" },
    { title: "Kontakt", href: "contact" },
    {
      title: "Resources",
      href: "#",
      children: [
        { title: "Blog", href: "#", description: "Latest news and articles" },
        { title: "Documentation", href: "#", description: "Guides and references" },
        { title: "Community", href: "#", description: "Connect with other users" },
        { title: "Support", href: "#", description: "Get help from our team" },
      ],
    },
  ]
  

  return (
    <header className="bg-amber-500 shadow-sm uppercase white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <div className="h-8 w-auto font-bold text-xl">
              <Image src="/TextLogo4.png" alt="Logo" width={100} height={100} />
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.title} className="relative">
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                    aria-expanded={activeDropdown === item.title}
                  >
                    {item.title}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        activeDropdown === item.title ? "rotate-180" : "",
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Desktop dropdown menu */}
                  {activeDropdown === item.title && (
                    <div className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white p-6 sm:gap-8">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div>
                                <p className="text-sm font-medium text-gray-900">{child.title}</p>
                                <p className="mt-1 text-sm text-gray-500">{child.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="space-y-2 px-4 py-3">
          {navigation.map((item) => (
            <div key={item.title} className="py-2">
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className="flex w-full items-center justify-between text-base font-semibold leading-7 text-gray-900"
                    aria-expanded={activeDropdown === item.title}
                  >
                    {item.title}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        activeDropdown === item.title ? "rotate-180" : "",
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Mobile dropdown menu */}
                  {activeDropdown === item.title && (
                    <div className="mt-2 space-y-2 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="text-sm font-medium text-gray-900">{child.title}</div>
                          <div className="text-sm text-gray-500">{child.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block text-base font-semibold leading-7 text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 px-4 py-6">
          <Link
            href="/admin"
            className="block text-base font-semibold leading-7 bg-red-600 text-white hover:text-gray-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            t("Admin")
          </Link>
        </div>
      </div>
    </header>
  )
}






