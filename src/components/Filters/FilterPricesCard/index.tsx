export const FilterPricesCard = () => {
  return (
    <div>
      <h2 style={{ marginTop: 0, marginBottom: "10px" }}>Prices</h2>
      <p className="m-1">$0 - $100</p>
      <p className="m-1">$100 - $200</p>
      <p className="m-1">$200 - $300</p>
      <p className="m-1">$300 - $500</p>
      <p className="m-1">$500 - $1000</p>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <input type="text" placeholder="$min" /> -
        <input type="text" placeholder="$max" />
      </div>
    </div>
  );
};
