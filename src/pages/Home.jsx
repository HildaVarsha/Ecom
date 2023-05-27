import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";
const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filter = products.filter((item) => item.category === "chair");
    const filterproduct = products.filter((item) => item.category === "sofa");
    const filtermobileproduct = products.filter(
      (item) => item.category === "mobile"
    );
    const filterwirelessproduct = products.filter(
      (item) => item.category === "wireless"
    );
    const filterpopularproduct = products.filter(
      (item) => item.category === "watch"
    );
    setTrendingProducts(filter);
    setBestSalesProducts(filterproduct);
    setMobileProducts(filtermobileproduct);
    setWirelessProducts(filterwirelessproduct);
    setPopularProducts(filterpopularproduct);
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Trending product in {year} </p>
                <h2>Make your Interi....... & modern</h2>
                <p>
                  Hilda is a twenty years old girl.she is learning to coding.
                  This the first project she has created,When she was learning.
                  If you want to buy any product you can use this website to
                  order the brand which you like the most.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="shop_btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count_down">
              <div className="clock_top_content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>

              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="shop_btn visit-btn"
              >
                <Link to="/shop">Visit Shop</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter-img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
      <section className="popular_category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">Popular In Category</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
