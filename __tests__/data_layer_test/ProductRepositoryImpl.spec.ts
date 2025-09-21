import "reflect-metadata";
import { setupServer } from "msw/node";
import { http as rest, HttpResponse } from "msw";
import { ProductRepositoryImpl } from "@/infrastructure/repositories/ProductRepositoryImpl";

// Mock API server
const server = setupServer(
  rest.get("http://localhost:3000/products", ({ request, params, cookies }) =>
    HttpResponse.json([{ id: "1", title: "Mock API Product", price: 200 }])
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("ProductRepositoryImpl", () => {
  it("fetches products via RTK Query", async () => {

    const repo = new ProductRepositoryImpl();
    const products = await repo.getProducts();

    expect(products[0].title).toBe("Mock API Product");
  });
});
