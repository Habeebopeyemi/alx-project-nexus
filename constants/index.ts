import { FooterProps, PolicyProps } from "@/domain/entities";

const ASSETPATH = "/assets/images/svgs";

export const FooterData: FooterProps[] = [
  {
    title: "Services",
    description: "",
    links: [
      { name: "Bonus program", href: "#" },
      { name: "Gift cards", href: "#" },
      { name: "Credit and payment", href: "#" },
      { name: "Service contracts", href: "#" },
      { name: "Non-cash account", href: "#" },
      { name: "Payment", href: "#" },
    ],
  },
  {
    title: "Assistance to the buyer",
    description: "",
    links: [
      { name: "Find an order", href: "#" },
      { name: "Terms of delivery", href: "#" },
      { name: "Exchange and return of goods", href: "#" },
      { name: "Guarantee", href: "#" },
      { name: "Frequently asked questions", href: "#" },
      { name: "Terms of use of the site", href: "#" },
    ],
  },
];

export const PolicyData: PolicyProps = {
  description: "",
  links: [
    { name: `${ASSETPATH}/Twitter.svg`, href: "#" },
    { name: `${ASSETPATH}/Facebook.svg`, href: "#" },
    { name: `${ASSETPATH}/Tiktok.svg`, href: "#" },
    { name: `${ASSETPATH}/Instagram.svg`, href: "#" },
  ],
};
