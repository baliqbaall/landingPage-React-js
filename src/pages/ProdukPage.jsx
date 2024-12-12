import { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { semuaProduct } from "../data/index";

import WhatsAppImage from "../assets/img/order/WhatsApp.png";
import TokopediaImage from "../assets/img/order/Tokopedia.png";
import ShopeeImage from "../assets/img/order/Shopee.png";

import FaqComponent from "../components/FaqComponent";

const ProdukPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handlePlatformClick = (url) => {
    window.open(url, "_blank"); // Buka URL di tab baru
  };
  return (
    <div className="product-page">
      <div className="product min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-medium text-center animate__animated animate__fadeInUp animate__delay-1s">
                Semua Product
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, voluptatibus?
              </p>
            </Col>
          </Row>
          <Row>
            {semuaProduct.map((product) => {
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
                      // onClick={() => handleBuyClick(product.whatsappLink)}
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
          )}
        </Modal.Body>
      </Modal>

      <FaqComponent />
    </div>
  );
};

export default ProdukPage;
