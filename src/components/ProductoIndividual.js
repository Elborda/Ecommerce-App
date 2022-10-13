import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { increment, productReady } from "../slice/cart";
import { useSelector, useDispatch } from "react-redux";
const ProductoIndividual = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [count, setCount] = useState(1);

  const quantity = useSelector((state) => state.quantity);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const dataJson = await data.json();
      setProduct(dataJson);
    };
    fetchData();
  }, []);

  const minus = () => {
    if (count === 0) {
      return 0;
    }

    setCount(count - 1);
  };

  const plus = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  const addToCart = () => {
    if (count >= 1) {
      dispatch(productReady({ ...product, quantityIndividual: count }));
      dispatch(increment(count));
    }
  };

  return (
    <>
      <section className="section--about">
        <h3>
          <Link to="/" className="links">
            Home
          </Link>{" "}
          / Product / {product?.title}
        </h3>
      </section>
      <section>
        <button className="back--product">
          <Link to="/products" className="links btn-back">
            BACK TO PRODUCTS
          </Link>
        </button>
        <article className="flex--single-product">
          <img src={product?.image} className="img--single-product" />
          <div className="container--single-product">
            <h1>{product?.title}</h1>
            <div className="rating-product">
              <AiFillStar />
              <p>{`(${product?.rating?.count} customer reviews)`}</p>
            </div>
            <h5>${product?.price}</h5>
            <p>{product?.description}</p>
            <hr />
            <div className="container--count">
              <AiOutlineMinus className="icon-minus icon" onClick={minus} />
              <span>{count}</span>
              <AiOutlinePlus className="icon-plus icon" onClick={plus} />
            </div>
            {count >= 1 ? (
              <Link to="/cart">
                <button className="btn--add-cart" onClick={addToCart}>
                  ADD TO CART
                </button>
              </Link>
            ) : (
              <button className="btn--add-cart">ADD TO CART</button>
            )}
          </div>
        </article>
      </section>
    </>
  );
};

export default ProductoIndividual;
