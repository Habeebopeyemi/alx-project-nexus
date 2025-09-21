import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  productApi,
  useGetProductsQuery,
} from "@/infrastructure/api/productApi";

// Mock server
const server = setupServer(
  http.get("http://localhost/products", () => {
    return HttpResponse.json([
      {
        id: 1,
        name: "Test Product",
        description: "A mock description",
        price: "100",
        image_url: "http://example.com/image.png",
        sku: "SKU123",
        category: "Electronics",
      },
    ]);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderWithStore = (hook: () => any) => {
  const store = configureStore({
    reducer: { [productApi.reducerPath]: productApi.reducer },
    middleware: gDM => gDM().concat(productApi.middleware),
  });

  return renderHook(hook, {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
  });
};

test("fetches and maps products correctly", async () => {
  const { result } = renderWithStore(() => useGetProductsQuery(undefined));

  await waitFor(() => {
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data).toBeDefined();
  });

  expect(result.current.data).toEqual([
    {
      id: "1",
      title: "Test Product",
      description: "A mock description",
      price: 100,
      image: "http://example.com/image.png",
      sku: "SKU123",
      category: "Electronics",
    },
  ]);
});
