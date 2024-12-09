import { Product } from "../../models/product";
import { Rating } from "@smastrom/react-rating";
import styles from "./styles.module.scss";
import "@smastrom/react-rating/style.css";

export const ProductCard = (props: { product: Product }) => {
  const { product } = props;
  return (
    <div className={styles.productWrapper}>
      <div className={styles.imageContainer}>
        <img src={product.image} className={styles.image} />
      </div>
      <div className={`${styles.title} ${styles.truncate}`}>
        {product.title}
      </div>
      <div className={styles.rating}>
        <Rating
          readOnly
          spaceInside={"1px"}
          className={styles.starRating}
          value={product.rating.rate}
          isDisabled
          radius="none"
        />
        <div>{`(${product.rating.count})`}</div>
      </div>
      <span className={styles.category}>{product.category}</span>
      <div className={`${styles.desc} ${styles.truncate}`}>
        {product.description}
      </div>
      <div className={styles.price}>${product.price}</div>
      <div className={styles.buttons}>
        <button className={styles.buyNowButton}>Buy Now</button>
        <button className="addCartButton">Add to Cart</button>
      </div>
    </div>
  );
};
