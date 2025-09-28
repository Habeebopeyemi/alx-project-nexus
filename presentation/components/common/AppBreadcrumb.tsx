import React from "react";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const AppBreadcrumb: React.FC = () => {
  const router = useRouter();
  const pathSnippets = router.asPath.split("/").filter(i => i);

  const breadcrumbItems = [
    {
      title: <Link href="/">Home</Link>,
    },
    ...pathSnippets.map((_, index) => {
      const url = "/" + pathSnippets.slice(0, index + 1).join("/");
      const name = pathSnippets[index].replace(/-/g, " "); //replaces hyphens with spaces
      return {
        title:
          index === pathSnippets.length - 1 ? (
            <span className="font-semibold capitalize">{name}</span>
          ) : (
            <Link href={url} className="capitalize">
              {name}
            </Link>
          ),
      };
    }),
  ];

  return <Breadcrumb items={breadcrumbItems} />;
};

export default AppBreadcrumb;
