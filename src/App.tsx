import { useEffect, useState } from "react";
import "./App.scss";
import { ProductList } from "./components/ProductList";
import { SearchBar } from "./components/SearchBar";
import axios from "axios";
import { Product } from "./models/product";
import { Filters } from "./components/Filters";

function App() {
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState<
    {
      type: string;
      values: string;
    }[]
  >();

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const [isProductsloading, setIsProductsloading] = useState(false);
  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
  };

  useEffect(() => {
    setIsProductsloading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res: any) => {
        setProducts(res.data);
        setIsProductsloading(false);
      })
      .catch((error) => {
        console.error(error);
        setProducts([]);
        setIsProductsloading(false);
      });
  }, []);

  useEffect(() => {
    if (searchText === "") {
      setFilteredProducts(products);
    } else {
      const filteredProducts = products.filter(
        (value) =>
          value.title.toLowerCase().includes(searchText.toLowerCase()) ||
          value.description.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filteredProducts);
    }
  }, [searchText, products]);
  return (
    <>
      <div className="container">
        <div className="filters">
          <Filters />
        </div>
        <div className="productListWrapper">
          <SearchBar value={searchText} handleChange={handleSearchTextChange} />
          <ProductList
            loading={isProductsloading}
            products={filteredProducts}
          />
        </div>
      </div>
    </>
  );
}

export default App;
