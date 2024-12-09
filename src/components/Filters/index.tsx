import styles from "./styles.module.scss";
import { FilterCategoriesCard } from "./FilterCategoriesCard";
import { FilterPricesCard } from "./FilterPricesCard";
import { FilterRatingCard } from "./FilterRatingCard";

export const Filters = () => {
  return (
    <div className={styles.filterWrapper}>
      <h2>All Categories</h2>
      <FilterCategoriesCard />
      <hr />
      <FilterPricesCard />
      <hr />
      <FilterRatingCard />
    </div>
  );
};
