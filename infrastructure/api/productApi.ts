import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../domain/entities/Product";
import { ProductDTO } from "@/data/models/ProductDTO";
import { productDtoToEntity } from "@/data/mappers/productMapper";

export const productApi = createApi({
  reducerPath: "productApi",
  //baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost" }),
  tagTypes: ["Products"],
  endpoints: builder => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
      transformResponse: (dtos: ProductDTO[]) => dtos.map(productDtoToEntity),
      providesTags: ["Products"],
    }),
    getProductById: builder.query<Product, string>({
      query: id => `/products/${id}`,
      providesTags: (_result, _err, id) => [{ type: "Products", id }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
