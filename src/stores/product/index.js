import { create } from "zustand";
// const API_URL = "http://localhost:8888/api/v1";

export const useProductsStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
