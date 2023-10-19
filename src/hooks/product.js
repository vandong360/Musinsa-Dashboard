import { useInfiniteQuery } from "react-query";
// import { useProductsStore } from "../stores/product/index";

const API_URL = "http://localhost:8888/api/v1";

async function fetchProducts({ pageParam = 0 }) {
  const response = await fetch(`${API_URL}/products?page=${pageParam}&limit=20`);

  if (!response.ok) {
    throw new Error("fetch error");
  }

  const data = await response.json();
  return { data: data.data, totalPage: data.totalPage, nextPage: data.hasNextPage ? pageParam + 1 : undefined };
}

export function useProducts() {
  // const { setProducts } = useProductsStore();

  return useInfiniteQuery("products", fetchProducts, {
    // onSuccess: (data) => {
    //   setProducts(data.pages[data.pages.length - 1].data); // Store data from the last page
    // },
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
}

// onSuccess: (data) => {
//     setProducts(data.data); // Store data from the last page
//   },
