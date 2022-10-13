import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../slice/cart";
import { updateQuantity } from "../slice/cart";
import { deleteQuantity } from "../slice/cart";

const CartShop = () => {
  const product = useSelector((state) => state.productList);
  const quantity = useSelector((state) => state.quantity);
  const [productos, setProductos] = useState(product);
  const [suma, setSuma] = useState([]);

  useEffect(() => {
    setProductos(product);
  }, [product]);

  const dispatch = useDispatch();

  const totalSum = product.map((info) => {
    return info.price;
  });

  const sum = totalSum.reduce((partialSum, a) => partialSum + a, 0);
  const sumPlus = product.map((info) => {
    return info.quantityIndividual * Math.floor(sum);
  });

  const shippingFee = sumPlus / 4;
  const orderTotal = Number(sumPlus) + shippingFee;

  const update = (id, price) => {
    dispatch(updateQuantity(id));
    dispatch(updateQuantity(price));
  };

  const removeProduct = (id) => {
    dispatch(deleteProduct(id));
    dispatch(deleteQuantity());
  };

  const cartEmpty = (
    <div className="cartEmpty--container">
      <h1>Your cart is empty</h1>
      <Link className="link" to="/products">
        <button className="button--fill-it">Fill it!</button>
      </Link>
    </div>
  );

  const shipFee = productos.map((info) => {
    const totalSum = info.price;
    const sumPlus = info.quantityIndividual * Math.floor(totalSum);
    const shippingFee = sumPlus / 4;
    return shippingFee;
  });

  const totalFee = shipFee.reduce((partialSum, a) => partialSum + a, 0);

  console.log(totalFee);

  const subtotal = productos.map((info, index) => {
    const totalSum = info.price;
    const sumPlus = totalSum * info.quantityIndividual;
    return sumPlus;
  });

  const total = Math.max(...sumPlus) + totalFee;

  return (
    <>
      {product.length == 0 ? (
        cartEmpty
      ) : (
        <div>
          <section className="section--about">
            <h3>
              <Link to="/" className="links">
                Home
              </Link>{" "}
              / Cart
            </h3>
          </section>
          <section className="cart--product">
            <div className="data--product"></div>
            <hr />
            {productos.map((info) => {
              const totalSum = info.price;
              const sumPlus = info.quantityIndividual * Math.floor(totalSum);
              const shippingFee = sumPlus / 4;

              return (
                <article key={info.id} className="product--display">
                  <div className="container--title">
                    <h5 className="item">Item</h5>
                    <div className="product--display-title">
                      <img className="cart--img" src={info.image} />
                      <h5>{info.title}</h5>
                    </div>
                  </div>
                  <div className="display--price">
                    <h5 className="price">Price</h5>
                    <h5 className="product--price">${info.price}</h5>
                  </div>
                  <div className="product--quantity">
                    <h5 className="quantity">Quantity</h5>
                    <div>
                      <AiOutlineMinus
                        className="minus"
                        onClick={() => update(info.price)}
                      />
                      <span className="span--quantity">
                        {info.quantityIndividual}
                      </span>
                      <AiOutlinePlus
                        className="plus"
                        onClick={() => update(info.id)}
                      />
                    </div>
                  </div>
                  <div className="container--subtotal">
                    <h5 className="subtotal">Subtotal</h5>
                    <h5 className="subtotal--price">${sumPlus}</h5>
                  </div>
                  <button
                    type="button"
                    className="button--trash"
                    onClick={() => removeProduct(info.id)}
                  >
                    <BsFillTrashFill className="btn--icon" />
                  </button>
                </article>
              );
            })}
            <hr />
            <div className="buttons--cart">
              <Link to="/products">
                <button className="continue--shopping">
                  Continue Shopping
                </button>
              </Link>
              <button className="clear--shopping">Clear Shopping Cart</button>
            </div>
            <div className="flex--calculation">
              <article className="calculations--product">
                <div className="subtotal--calculations">
                  <h5>Subtotal :</h5>
                  <h5>$ {Math.max(...sumPlus)}</h5>
                </div>
                <div className="fee--calculations">
                  <h5>Shipping Fee :</h5>
                  <h5>$ {totalFee}</h5>
                </div>
                <hr className="hr--calculation" />
                <h3 className="total--calculation">Order Total : ${total}</h3>
              </article>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default CartShop;
