//This part of the code base aims to improve the maintainability and scalability
// of the application by providing a clear separation between
// the data layer and the domain layer.
// It ensures that changes in the external data source
// or API do not directly impact the core business logic of the application.
//they're working together with the RTK Query Transform Response option

import { Product } from "@/domain/entities/Product";
import { ProductDTO } from "@/data/models/ProductDTO";

export const productDtoToEntity = (dto: ProductDTO): Product => ({
  id: String(dto.product_id),
  title: dto.name,
  description: dto.description,
  price: typeof dto.price === "string" ? Number(dto.price) : dto.price,
  sku: dto.slug,
  stock: dto.stock,
  in_stock: dto.in_stock,
});
