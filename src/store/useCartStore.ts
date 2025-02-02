import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProductInCartType = {
  id: number;
  count: number;
};

interface BearState {
  products: ProductInCartType[];
  addProduct: (id: number) => void;
}

const useCartStore = create<BearState>()(
  persist(
    (set) => ({
      // initial state
      products: [],
      // actions
      addProduct: (id) =>
        set((state) => {
          const findProduct = state.products.find(
            (product) => product.id === id
          );

          const newProduct: ProductInCartType = {
            id: id,
            count: findProduct === undefined ? 1 : findProduct.count + 1,
          };
          return { products: [...state.products, newProduct] };
        }),
    }),
    {
      name: "todos-storage",
      partialize: (state) => ({ todos: state.products }),
    }
  )
);
export default useCartStore;
