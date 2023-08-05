import "./styles.css";

const Product = ({ data, setCartData }) => {
  return (
    <div className="left">
      <h4>Product</h4>
      {data.map((el) => {
        return (
          <div className="product" key={el.id}>
            <div>{el.name}</div>
            <div>{el.price}</div>
            <div>
              <div className="button">
                <div className="minus">-</div>
                <div>0</div>
                <div className="plus" onClick={() => setCartData(el)}>
                  +
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
