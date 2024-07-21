export type AuthorsConfig = {
  name: string
  url: string
  twitter?: string
}
export type ProductLink = {
  url: string
  name: string
}
export type navigationItem = {
  text: string
  href: string
  icon?: string
}
export type ThemeColor = {
  media: string
  color: string
}
export type socialItem = {
  text: string
  href: string
  isPicture?: boolean
}
export type SiteConfig = {
  name: string
  authorsCN: string
  description: string
  url: string
  email: string
  siteHostList: string[]
  keywords: string[]
  authors: string
  authorsUrl?: string
  ogImage: string
  social: socialItem[]
  navigationItems: navigationItem[]
  footerItems: navigationItem[]
  footerProducts: ProductLink[]
  metadataBase: URL | string
  themeColors?: string | ThemeColor[]
  defaultNextTheme?: string
  icons: {
    icon: string
    shortcut?: string
    apple?: string
  }
  openGraph?: {
    type: string
    locale: string
    url: string
    title: string
    description: string
    siteName: string
    images?: string[]
  }
  twitter?: {
    card: string
    title: string
    description: string
    images?: string[]
    creator: string
  }
  locale: string
}
