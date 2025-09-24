export interface CardProps {}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offer {
  bed: string;
  shower: string;
  occupants: string;
}
export interface PropertyProps {
  id: number;
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offer;
  image: string;
  discount: string;
  description?: string; // Optional field for property description
}

export interface AccommodationTypes {
  id?: number;
  name: string;
  image: string;
}

export interface PillProps {
  title: string;
}

export interface FooterProps {
  title: string;
  description: string;
  links: { name: string; href: string }[];
}

export interface PolicyProps {
  description: string;
  links: { name: string; href: string }[];
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
}
