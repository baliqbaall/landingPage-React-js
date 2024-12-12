import { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import HeroImage from "../assets/img/hero1.png";
import AboutImage from "../assets/img/3.png";
import WhatsAppImage from "../assets/img/order/WhatsApp.png";
import TokopediaImage from "../assets/img/order/Tokopedia.png";
import ShopeeImage from "../assets/img/order/Shopee.png";

import FaqComponent from "../components/FaqComponent";
import { productTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handlePlatformClick = (url) => {
    window.open(url, "_blank"); // Buka URL di tab baru
  };

  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 overflow-hidden">
        <Container>
          <Row className="header-box pt-lg-5">
            <Col lg="6">
              <h1 className="animate__animated animate__fadeInUp animate__delay-1s">
                Dingin <br />
                <span>Tetapi Tidak</span>
                <br /> Kejam!
              </h1>
              <p className="animate__animated animate__fadeInUp animate__delay-1s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto voluptates nihil nisi exercitationem dolorem
                cupiditate?
              </p>
              <button
                className="btn-home-product mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s"
                onClick={() => navigate("/product")}
              >
                Lihat Product
              </button>
              {/* <button className="btn-home-promo animate__animated animate__fadeInUp animate__delay-1s">
                Lihat Promo
              </button> */}
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img
                src={HeroImage}
                alt="freepik.com"
                className="animate__animated animate__fadeInUp"
              />
            </Col>
          </Row>
        </Container>
      </header>

      {/* About Section */}
      <div className="about w-100 min-vh-100">
        {/* <h1>About Us</h1>
        <h5 className="fs-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          maiores?
        </h5> */}
        <Container>
          <Row>
            <Col data-aos="fade-up" data-aos-duration="1000">
              <h1>About</h1>
              <p className="text-center fw-light fs-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, corporis.
              </p>
            </Col>
          </Row>
          <Row className="header-about">
            <Col
              lg="6"
              className="pt-lg-0 pt-5"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <img src={AboutImage} alt="about-img" />
            </Col>
            <Col
              lg="6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <h2>
                Tinju dibalas <span>tinju!</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia necessitatibus, facere enim nobis quam ducimus vero eos
                fugit vel ab labore numquam reprehenderit consectetur ipsa
                aspernatur est non eum molestiae, unde qui cupiditate corrupti
                adipisci deserunt! Quibusdam sint placeat, debitis, quisquam
                quas unde, ipsum adipisci veniam eveniet quidem reprehenderit
                maiores? Esse iste commodi, facilis laudantium eos cupiditate
                vel ullam doloremque facere officia laborum cumque quibusdam
                molestias excepturi quidem. Pariatur, sit!
              </p>
              <button
                className="btn-home-about"
                onClick={() => navigate("/about")}
              >
                Lihat Selengkapnya
                <i className="fa-solid fa-chevron-right ms-3"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Product Section */}
      <div className="product w-100 min-vh-100">
        <Container>
          <Row>
            <Col data-aos="fade-up" data-aos-duration="1000">
              <h1>Product</h1>
              <p className="text-center fw-light fs-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, corporis.
              </p>
            </Col>
          </Row>
          <Row>
            {productTerbaru.map((product) => {
              return (
                <Col
                  key={product.id}
                  className="rounded shadow"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={product.delay}
                >
                  <img
                    src={product.image}
                    alt="unsplash.com"
                    className="mb-5 rounded-top"
                  />
                  <div className=" star mb-2 px-3">
                    <i className={product.star1}></i>
                    <i className={product.star2}></i>
                    <i className={product.star3}></i>
                    <i className={product.star4}></i>
                    <i className={product.star5}></i>
                  </div>
                  <h6 className="mb-5 px-3">{product.title}</h6>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{product.price}</p>

                    <button
                      className="btn-price"
                      onClick={() => handleBuyClick(product)}
                    >
                      {" "}
                      {product.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button
                className="btn-all-product"
                data-aos="fade-up"
                data-aos-duration="1000"
                onClick={() => navigate("/product")}
              >
                Lihat Semua Product
                <i className="fa-solid fa-chevron-right ms-3"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Modal for selecting purchase platform */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Pilih Platform Pembelian</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <>
              <Button
                className="w-100 mb-3 btn-custom"
                onClick={() =>
                  handlePlatformClick(selectedProduct.tokopediaLink)
                }
              >
                {" "}
                <img src={TokopediaImage} alt="tokopedia" />
                Tokopedia
              </Button>
              <Button
                className="w-100 mb-3 btn-custom"
                onClick={() => handlePlatformClick(selectedProduct.shopeeLink)}
              >
                <img src={ShopeeImage} alt="shopee" />
                Shopee
              </Button>
              <Button
                className="w-100 btn-custom"
                onClick={() =>
                  handlePlatformClick(selectedProduct.whatsappLink)
                }
              >
                <img src={WhatsAppImage} alt="whatsapp" />
                WhatsApp
              </Button>
            </>
            // <Container>
            //   <Row>
            //     <Col>
            //       <div className="text-center mb-4">
            //         <img
            //           src={selectedProduct.image}
            //           alt={selectedProduct.title}
            //           className="img-fluid rounded modal-img"
            //         />
            //         <h5 className="mt-2">{selectedProduct.title}</h5>
            //         <p className="text-muted">{selectedProduct.price}</p>
            //       </div>
            //     </Col>
            //   </Row>
            //   <Row>
            //     <Col>
            //       <Button
            //         className="w-100 mb-3 btn-custom"
            //         onClick={() =>
            //           handlePlatformClick(selectedProduct.tokopediaLink)
            //         }
            //       >
            //         Tokopedia
            //       </Button>
            //     </Col>
            //   </Row>
            //   <Row>
            //     <Col>
            //       <Button
            //         className="w-100 mb-3 btn-custom"
            //         onClick={() =>
            //           handlePlatformClick(selectedProduct.shopeeLink)
            //         }
            //       >
            //         Shopee
            //       </Button>
            //     </Col>
            //   </Row>
            //   <Row>
            //     <Col>
            //       <Button
            //         className="w-100 btn-custom"
            //         onClick={() =>
            //           handlePlatformClick(selectedProduct.whatsappLink)
            //         }
            //       >
            //         WhatsApp
            //       </Button>
            //     </Col>
            //   </Row>
            // </Container>
          )}
        </Modal.Body>
      </Modal>

      {/* Testimonial Section */}
      <div className="testimonial py-3">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-medium my-5">Testimonial</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm rounded">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>

      {/* FAQ Section */}
      <FaqComponent />
      {/* FAQ Section End */}
    </div>
  );
};

export default HomePage;
