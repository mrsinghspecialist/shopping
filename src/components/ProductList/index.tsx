import { Product } from "../../models/product";
import { ProductCard } from "../ProductCard";
import styles from "./styles.module.scss";

export const ProductList = (props: {
  loading: boolean;
  products: Product[];
}) => {
  const { loading, products } = props;
  if (loading) {
    return <div className={styles.message}>Loading...</div>;
  }
  if (products.length === 0) {
    return <div className={styles.message}>No products found !!</div>;
  }

  return (
    <div className={styles.productListWrapper}>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};
