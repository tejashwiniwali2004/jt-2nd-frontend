import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleBackClick = () => {
    if (true) {
      navigate("/");
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <button className="btn btn-back" onClick={handleBackClick}>
        ← Back
      </button>
      <div className="details-container">
        <img
          src={product.image}
          alt={product.title}
          className="details-image"
        />
        <div className="details-info">
          <h2 className="details-title">{product.title}</h2>
          <p className="details-category">Category: {product.category}</p>
          <p className="details-description">{product.description}</p>
          <p className="details-price">Price: ${product.price}</p>
          <p className="details-rating">
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <div className="details-actions">
            <button className="btn btn-wishlist">Add to Wishlist</button>
            <button className="btn btn-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;