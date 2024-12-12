import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Logo from "../public/klons4-2.png";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            {/* <h3 className="fw-medium">Kloset Nusantara</h3> */}
            <img
              src="../public/klons4-2.png"
              alt="Kloset Nusantara"
              className="logo-img"
            />
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              quaerat cupiditate quod recusandae maxime in assumenda nostrum
              nisi fugiat voluptatem?
            </p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 0812-3456-7890</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">person-email@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-medium">Menu</h5>
            <Link to="">Home</Link>
            <Link to="about">About</Link>
            <Link to="product">Product</Link>
            <Link to="testimoni">Testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="sk">Syarat & Ketentuan</Link>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-medium">E-commerce</h5>
            <Link to="https://www.tokopedia.com/klosetnusantara/">
              Tokopedia
            </Link>
            <Link to="about">Shopee</Link>
          </Col>
          {/* <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-medium mb-3">Follow untuk info menarik</h5>
            <div className="subscribes">
              <input type="text" placeholder="Follow..." />
              <button className="btn-follow">Follow</button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col> */}
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()}{" "}
              <span className="fw-bold">Kloset Nusantara</span> | All Right
              Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
