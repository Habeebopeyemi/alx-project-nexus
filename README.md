# 🏗 Clean Architecture with Next.js + TypeScript + RTK Query + DI

This project demonstrates how to integrate **Clean Architecture** principles with **Next.js (Page Router)**, **TypeScript**, **RTK Query**, and **Dependency Injection** (`tsyringe`).

The goal is to:

- Keep **domain logic independent** of frameworks.
- Use **repositories + use cases** for business rules.
- Leverage **RTK Query caching** while preserving **Clean Architecture boundaries**.
- Support **multiple entry points**: SSR, UI hooks, and background tasks.

---

## 📂 High-Level Folder Structure

- /domain
- /entities # Business models (e.g., Product)
- /repositories # Interfaces (IProductRepository)
- /application # Application services (GetProductsUseCase)

- /data
- /infrastructure # RTK Query API and Repository implementations (ProductRepositoryImpl)
- /mappers # Optional DTO ↔ Domain transformations

- /store # setup Redux store and slice
- /core # Dependency injection container config

- /pages
- /products # Next.js SSR pages

- /presentation # house the components and UI hooks

---

## 🔄 Flow of Control

### 1. Application Startup

- `reflect-metadata` is imported once in `_app.tsx`.
- `tsyringe` container is configured.
- `ProductRepositoryImpl` is registered as implementation of `IProductRepository`.
- `productApi` (RTK Query API slice) is registered inside Redux store.

**Result:** Infrastructure and DI graph are ready.

---

### 2. SSR Path (Server-Side Rendering)

Used when:

- SEO is critical (Google must see the catalog).
- First paint must include full product list.
- Data doesn’t change _every second_.

**Flow:**

1. Next.js runs `getServerSideProps` / `getStaticProps`.
2. `GetProductsUseCase` is resolved from DI container.
3. Use case calls `ProductRepositoryImpl.getProducts()`.
4. Repository dispatches `productApi.endpoints.getProducts.initiate()`.
5. RTK Query fetches data → caches it in Redux store.
6. Use case returns **domain entities (`Product[]`)**.
7. Page is hydrated with `products` as props.

**Result:**

- Fully rendered HTML is returned.
- SEO bots and users see products immediately.

---

### 3. UI Hook Path (Client-Side React Components)

Used when:

- Data is **user-specific** (cart, dashboard).
- SEO is not required.
- You want **auto-caching, re-fetching, invalidation**.

**Flow:**

1. React component calls `useGetProductsQuery()`.
2. RTK Query checks cache:
   - ✅ Cached → returns instantly.
   - ❌ Missing/stale → fetches from API.
3. API response updates Redux store.
4. React automatically re-renders with fresh data.

**Result:**

- Live updates.
- Efficient caching and network calls.

---

### 4. Background Task Path (Workers / Cron Jobs)

Used when:

- Logic must run outside UI.
- Jobs are scheduled or event-driven.
- Workflows involve chaining multiple repositories.

**Flow:**

1. Background worker resolves `GetProductsUseCase` from DI.
2. Use case calls `ProductRepositoryImpl.getProducts()`.
3. Repo fetches products using RTK Query under the hood.
4. Results are processed (e.g., sync with ERP, send notifications).

**Result:**

- Background logic reuses the same domain rules.
- No coupling to React or UI.

---

## 🔑 When to Use Each Path

| Situation                               | Use Case Path          | Why                                 |
| --------------------------------------- | ---------------------- | ----------------------------------- |
| SEO-friendly catalog / fast first paint | **SSR + UseCase**      | Ensures HTML is preloaded with data |
| User-specific or dynamic UI data        | **UI Hook**            | Auto-managed caching & re-fetching  |
| Scheduled jobs, workflows, automation   | **Background UseCase** | Domain logic reused outside UI      |

---

## 📊 Visual Diagram

```
[ Next.js SSR ] ──► [ GetProductsUseCase ] ──► [ ProductRepositoryImpl ] ──► [ RTK Query API ] ──► [ Remote API ]
│ │
│ ▼
│ [ Redux Cache ]
│ ▲
▼ │
[ HTML Props ] [ React UI Hooks ]
```

And separately:

```
[ Background Worker ] ──► [ GetProductsUseCase ] ──► [ ProductRepositoryImpl ] ──► [ RTK Query API ]
```

---

## 🧩 About Mappers

- If **API DTO matches Domain Entity** → mappers may be skipped.
- If API returns verbose/nested fields → keep `data/mappers` to transform into clean domain models.

---

## ✅ Summary

- **Use Cases**: Reusable across SSR, UI, and background.
- **Repositories**: Bridge domain to RTK Query (data access).
- **RTK Query**: Provides caching, invalidation, and store updates.
- **DI Container**: Wires everything together.

This architecture ensures the e-commerce project stays **scalable, testable, and framework-agnostic** while still enjoying Next.js + RTK Query performance benefits.
