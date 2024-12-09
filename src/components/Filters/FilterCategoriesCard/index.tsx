import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles.module.scss";

export const FilterCategoriesCard = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedcategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCategoriesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.checked) {
      setSelectedCategories([...categories, event.target.value]);
    } else {
      const filteredCategories = categories.filter(
        (value) => value != event.target.value
      );
      setSelectedCategories(filteredCategories);
    }
  };
  return (
    <>
      <div className={styles.categoriesWrapper}>
        {categories.map((value) => {
          return (
            <div>
              <input
                type="checkbox"
                value={value}
                onChange={handleCategoriesChange}
              />
              {` `}
              {value}
            </div>
          );
        })}
      </div>
    </>
  );
};
