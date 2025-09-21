import "reflect-metadata";
import "@testing-library/jest-dom"; // Import jest-dom matchers to extend expect
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@/store";
import { ProductList } from "@/presentation/components/product/ProductList";
import { setupServer } from "msw/node";
import { http as rest, HttpResponse } from "msw";

const server = setupServer(
  rest.get("http://localhost:3000/products", ({ request, params, cookies }) =>
    HttpResponse.json([{ id: "1", title: "UI Product", price: 300 }])
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("ProductGrid", () => {
  it("renders products from API", async () => {
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText("UI Product")).toBeInTheDocument();
    });
  });
});
