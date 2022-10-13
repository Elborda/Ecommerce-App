import React, { useEffect, useState } from "react";
import { GiCompass, GiFoldedPaper, GiMining } from "react-icons/gi";

const HomePage = () => {
  const [data, setData] = useState();
  const [productThree, setProductThree] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const productos = await fetch("https://fakestoreapi.com/products");
      const productosJson = await productos.json();
      const filterThree = productosJson.filter((e) => {
        return e.id <= 3;
      });
      setProductThree(filterThree);
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="main">
        <div className="flex--main">
          <div className="info--main">
            <h1>
              Design Your <br /> Comfort Zone
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              at sed omnis corporis doloremque possimus velit! Repudiandae nisi
              odit, aperiam odio ducimus, obcaecati libero et quia tempora
              excepturi quis alias?
            </p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className="img--main">
          <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg" />
        </div>
      </section>
      <section className="featured--products">
        <div className="featured--title">
          <h1>Featured Products</h1>
          <div className="featured--underline"></div>
        </div>
        <div className="feature--img-flex">
          {productThree?.map((e) => {
            return (
              <div key={e.id} className="feature--img">
                <img src={e.image} />
                <div className="feature--price">
                  <p>{e.title}</p>
                  <span>${e.price}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="feature--btn">
          <button>ALL PRODUCTS</button>
        </div>
      </section>
      <section className="custom--section">
        <div className="custom--container-text">
          <h3>Custom Furniture Built Only For You</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
        <div className="custom--flex">
          <div className="custom--info">
            <span>
              <GiCompass />
            </span>
            <h4>Mission</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
          <div className="custom--info">
            <span>
              <GiMining />
            </span>
            <h4>Mission</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
          <div className="custom--info">
            <span>
              <GiFoldedPaper />
            </span>
            <h4>Mission</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
        </div>
      </section>
      <section className="newsletter--section">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="newsletter--container-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
          <form className="form--newsletter">
            <input type="email" placeholder="Enter Email" />
            <button>Suscribe</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default HomePage;
