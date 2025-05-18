import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ProductCard = ({ product }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Link to={`/product/${product._id}`} className="card-link">
      <div className="card">
        <img src={product.image} alt={product.title} className="card-image" />
        <h4 className="card-title">{product.title}</h4>
        <p className="card-description">{product.description}</p>
        <p className="card-price">Price: ${product.price}</p>
        <p className="card-rating">
          ⭐ {product.rating.rate} ({product.rating.count})
        </p>
        <p className="card-theme">Theme : {theme}</p>
      </div>
    </Link>
  );
};
export default ProductCard;
