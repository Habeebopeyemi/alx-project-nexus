import { IconType } from "react-icons";
import { StaticImageData } from "next/image";

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

export interface ProductCardProps {
  image: StaticImageData | string; // can handle Next.js static imports or URLs
  title: string;
  price: string | number;
  buttonLabel?: string;
  buttonLink?: string;
  showFavorite?: boolean;
  FavoriteIcon?: IconType; // allows passing custom icons (e.g., AiFillHeart)
  className?: string; // extra styles for flexibility
}

export interface AddressCardProps {
  id: string;
  label: string; // e.g. "HOME", "WORK"
  name: string; // e.g. "2118 Thornridge"
  address: string; // e.g. "2118 Thornridge Cir. Syracuse, Connecticut 35624"
  phone: string; // e.g. "(209) 555-0104"
  selected?: boolean; // for radio selection
  onSelect?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export interface AddressFormData {
  id?: string;
  label: string;
  name: string;
  address: string;
  phone: string;
}

export interface AddressModalProps {
  isOpen: boolean;
  initialData?: AddressFormData | null;
  onClose: () => void;
  onSave: (data: AddressFormData) => void;
}

export type ShippingOptionProps = {
  id: string;
  label: string;
  description: string;
  date?: string;
  selected: boolean;
  onSelect: (id: string) => void;
};

export type ShippingScheduleOptionProps = {
  id: string;
  label: string;
  description: string;
  selected: boolean;
  onSelect: (id: string) => void;
  scheduleDate: Date | null;
  onDateChange: (date: Date | null) => void;
};

export type PaymentCardDetailsProps = {
  defaultValues?: {
    cardholder?: string;
    cardNumber?: string;
    expiry?: string;
    cvv?: string;
  };
  showAddressOption?: boolean;
  onSubmit?: (data: {
    cardHolder: string;
    cardNumber: string;
    expiry: string;
    cvv: string;
    sameAsBilling: boolean;
  }) => void;
  isSubmitting?: boolean;
};

export type InputFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export type SummaryCardProps = {
  image: string;
  title: string;
  price: number;
  quantity?: number;
};

export type SummaryCardProduct = {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity?: number;
};

export type SummaryProps = {
  products: SummaryCardProduct[];
  address: string;
  shippingMethod: string;
  totals: {
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
  };
};
