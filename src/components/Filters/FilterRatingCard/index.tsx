import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import styles from "../styles.module.scss";

export const FilterRatingCard = () => {
  const [selectedRating, setSelectedRating] = useState<number>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedRating(Number(event.target.value));
    }
  };
  return (
    <div>
      <h2 style={{marginTop: 0}}>Rating</h2>
      <div>
        {[1, 2, 3, 4, 5].map((value) => {
          return (
            <div style={{
              display: 'flex',
              gap: '5px',
              marginBottom: '10px'
            }}>
              <input
                type="radio"
                name="rating"
                value={value}
                onChange={handleChange}
              />
              <Rating
                readOnly
                spaceInside={"1px"}
                className={styles.starRating}
                value={value}
                isDisabled
                radius="none"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
