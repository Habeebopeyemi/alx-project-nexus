import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../domain/entities/Product";
import { ProductDTO } from "@/data/models/ProductDTO";
import { productDtoToEntity } from "@/data/mappers/productMapper";
import { LoginCredentials, LoginResponse } from "@/domain/entities/Auth";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  tagTypes: ["Products"],
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query: (payload: LoginCredentials) => ({
        url: process.env.NEXT_PUBLIC_LOGIN as string,
        method: "POST",
        body: payload,
        headers: { "Content-type": "application" },
      }),
    }),
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

export const { useGetProductsQuery, useGetProductByIdQuery, useLoginMutation } =
  productApi;
