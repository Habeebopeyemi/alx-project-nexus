import {
  AccommodationTypes,
  FooterProps,
  PolicyProps,
  PropertyProps,
} from "@/domain/entities";

const ASSETPATH = "/assets/images/svgs";


export const FooterData: FooterProps[] = [
  {
    title: "Explore",
    description: "",
    links: [
      { name: "Apartments in Dubai", href: "#" },
      { name: "Hotels in New York", href: "#" },
      { name: "Villa in Spain", href: "#" },
      { name: "Mansion in Indonesia", href: "#" },
    ],
  },
  {
    title: "Company",
    description: "",
    links: [
      { name: "About us", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Career", href: "#" },
      { name: "Customers", href: "#" },
      { name: "Brand", href: "#" },
    ],
  },
  {
    title: "Help",
    description: "",
    links: [
      { name: "Support", href: "#" },
      { name: "Cancel Booking", href: "#" },
      { name: "Refunds Process", href: "#" },
    ],
  },
];

export const PolicyData: PolicyProps = {
  description:
    "Some hotel requires you to cancel more than 24 hours before check-in. Details here",
  links: [
    { name: "Terms of Service", href: "#" },
    { name: "Policy Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Partners", href: "#" },
  ],
};
