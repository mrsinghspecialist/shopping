import styles from "./styles.module.scss";

export const SearchBar = (props: {
  value: string;
  handleChange: (text: string) => void;
}) => {
  return (
    <input
      type="text"
      className={styles.searchBar}
      value={props.value}
      placeholder="Seach..."
      onChange={(e) => props.handleChange(e.target.value)}
    />
  );
};
