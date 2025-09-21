import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import { ProductList } from "@/presentation/components/product/ProductList";

export default function Cart() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find(
    item => item.id === parseInt(id as string)
  );

  if (!property) return <p>Property not found</p>;

  return (
    <div>
      <ProductList />
    </div>
  );
}
