import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../domain/entities/Product";
import { ProductDTO } from "@/data/models/ProductDTO";
import { productDtoToEntity } from "@/data/mappers/productMapper";
import { LoginCredentials, LoginResponse } from "@/domain/entities/Auth";
import { GetAllProductsResponse } from "@/data/models/ProductDTO";
import { GetCartItemsResponse } from "@/data/models/CartDTO";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: headers => {
      if (typeof window !== "undefined") {
        const token = sessionStorage.getItem("auth-token");
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
      }
      return headers;
    },
  }),
  tagTypes: ["Products"],
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query: (payload: LoginCredentials) => ({
        url: process.env.NEXT_PUBLIC_LOGIN as string,
        method: "POST",
        body: payload,
        headers: { "Content-type": "application/json" },
      }),
    }),
    getProducts: builder.query<GetAllProductsResponse, void>({
      query: () => ({
        url: "/products/?category=Mobile%20Accessories&in_stock=true&page=1",
      }),
      //transformResponse: (dtos: ProductDTO[]) => dtos.map(productDtoToEntity),
      providesTags: ["Products"],
    }),
    getCarts: builder.query<GetCartItemsResponse, void>({
      query: () => ({
        url: "/cart/items?page=1",
      }),
      //transformResponse: (dtos: ProductDTO[]) => dtos.map(productDtoToEntity),
      providesTags: ["Products"],
    }),
    getProductById: builder.query<Product, string>({
      query: id => `/products/${id}`,
      providesTags: (_result, _err, id) => [{ type: "Products", id }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useLoginMutation,
  useGetCartsQuery,
} = productApi;
