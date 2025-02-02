import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ProductInCartType = {
  id: number;
  count: number;
};

interface CartState {
  products: ProductInCartType[];
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      // initial state
      products: [],
      // actions
      addProduct: (id) =>
        set((state) => {
          let newProducts = [...state.products];
          const findProduct = state.products.find(
            (product) => product.id === id
          );
          if (findProduct === undefined) {
            const newProduct: ProductInCartType = {
              id: id,
              count: 1,
            };

            newProducts.push(newProduct);
          } else {
            newProducts = newProducts.map((product) => {
              if (product.id === findProduct.id) {
                return {
                  ...product,
                  count: findProduct.count + 1,
                };
              } else return product;
            });
          }

          return { products: newProducts };
        }),
      removeProduct: (id) =>
        set((state) => {
          let newProducts = [...state.products];
          const findProduct = state.products.find(
            (product) => product.id === id
          );

          if (findProduct !== undefined) {
            if (findProduct.count > 1) {
              newProducts = newProducts.map((product) => {
                if (product.id === id) {
                  return {
                    ...product,
                    count: product.count - 1,
                  };
                } else return product;
              });
            } else {
              newProducts = newProducts.filter((product) => product.id !== id);
            }
          }
          return { products: newProducts };
        }),
    }),
    {
      name: "shop-storage",
      partialize: (state) => ({ products: state.products }),
    }
  )
);
export default useCartStore;
