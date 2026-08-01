/**
 * Types partagés du projet Chez Fatou.
 */

/** Une image avec métadonnées */
export interface SiteImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/** Un élément de navigation */
export interface NavItem {
  label: string;
  href: string;
}

/** Un plat ou cocktail */
export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  image?: SiteImage;
  tags?: string[];
}

/** Un avis client */
export interface Review {
  author: string;
  rating: number;
  text: string;
  date?: string;
  platform?: string;
}
