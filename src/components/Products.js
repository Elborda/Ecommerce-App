import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { type } from "@testing-library/user-event/dist/type";

const Products = () => {
  const [data, setData] = useState();
  const [formData, setFormData] = useState({
    title: "",
    search: "",
    price: "1050",
  });
  const [text, setText] = useState("");
  const [newData, setNewData] = useState();
  const [range, setRange] = useState("1050");
  const [datoActualizado, setDatoActualizado] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const productos = await fetch("https://fakestoreapi.com/products");
      const productosJson = await productos.json();
      const filterProduct = productosJson.filter((info) => info.id <= 18);
      setData(filterProduct);
      setNewData(filterProduct);
      setDatoActualizado(filterProduct);
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const buscar = (e) => {
    if (e.target.value != "") {
      const filterSearch = data.filter((info) => {
        return info.title
          .toLowerCase()
          .startsWith(e.target.value.toLowerCase());
      });
      setNewData(filterSearch);
      setDatoActualizado(filterSearch);
    } else if (e.target.value == "") {
      setNewData(data);
      setDatoActualizado(data);
    }
    setText(e.target.value);
  };

  const botones = [
    "all",
    ...new Set(
      data?.map((info) => {
        return info.category;
      })
    ),
  ];

  const btnFilter = (info) => {
    if (info == "all") {
      setDatoActualizado(data);
      return;
    }

    const includeRange = data.filter((producto) => {
      return producto.price <= range;
    });

    const filterInfo = includeRange.filter((productos) => {
      return productos.category == info;
    });
    setDatoActualizado(filterInfo);
    setNewData(filterInfo);
  };

  const filterProducts = (e) => {
    setRange(e.target.value);

    const productFilterRange = newData.filter((productos) => {
      return productos.price <= range;
    });
    setDatoActualizado(productFilterRange);
  };

  const clearFilter = () => {};

  const productEmptyTemplate = (
    <div>
      <h3>Sorry, no products matched your search. </h3>
    </div>
  );

  return (
    <>
      <section className="section--about">
        <h3>
          <Link to="/" className="links">
            Home
          </Link>{" "}
          / Products
        </h3>
      </section>
      <div className="product--flex-container">
        <div className="flex--container">
          <section className="content--container">
            <div className="content">
              <form>
                <div className="form-control">
                  <input
                    type="text"
                    name="text"
                    placeholder="search"
                    value={text}
                    onChange={buscar}
                  />
                </div>
                <div className="form-control">
                  <h5>Category</h5>
                  <div className="buttons--container">
                    {botones?.map((info) => {
                      return (
                        <button
                          className="button--content"
                          key={info}
                          onClick={(e) => btnFilter(info)}
                          type="button"
                        >
                          {info}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="form-control">
                  <h5>Price</h5>
                  <h4>${range}</h4>
                  <input
                    type="range"
                    name="price"
                    min="0"
                    max="1050"
                    value={range}
                    onChange={filterProducts}
                  />
                </div>
              </form>
              <button className="clear--filters" onClick={clearFilter}>
                Clear Filters
              </button>
            </div>
          </section>
          <div>
            <section>
              <p>23 Products Found</p>
              <hr></hr>
              <form>
                <label>Sort By</label>
                <select>
                  <option>{`price (lowest)`}</option>
                  <option>{`price (highest)`}</option>
                </select>
              </form>
            </section>
            <section className="pruductos--section">
              <div className="productos">
                {range == 0 ? (
                  <div className="products--empty">
                    <h3>Sorry, no products matched your search. </h3>
                  </div>
                ) : (
                  datoActualizado?.map((info, index, array) => {
                    return (
                      <article key={info.id} className="article--products">
                        <div className="product--img-container">
                          <img className="product--img" src={info.image} />
                          <Link
                            className="icon--center"
                            to={`/producto/${info.id}`}
                          >
                            <FaSearch />
                          </Link>
                        </div>

                        <footer className="footer--product">
                          <h5>{info.title}</h5>
                          <p>${info.price}</p>
                        </footer>
                      </article>
                    );
                  })
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
