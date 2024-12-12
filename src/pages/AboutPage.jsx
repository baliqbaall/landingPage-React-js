import { Container, Row, Col } from "react-bootstrap";
import AboutImage from "../assets/img/3.png";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-medium text-center animate__animated animate__fadeInUp animate__delay-1s">
                About
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ad
                consequuntur corporis error, iure sequi iste quisquam ipsa
                vitae, autem ducimus beatae reiciendis eius sint suscipit
                tempore dicta optio. Magnam laborum dolore blanditiis magni
                dicta nisi suscipit molestiae! Nemo amet pariatur aperiam
                distinctio iure error numquam, nihil facere dignissimos maxime
                eveniet quibusdam voluptatibus repellat delectus ducimus
                perspiciatis assumenda labore officia fugit harum! Deserunt cum
                fugit placeat labore quia, autem dicta odit dolor voluptatibus
                temporibus blanditiis quae porro eaque, molestiae eum quibusdam,
                facilis illo? Temporibus, qui, voluptatum quis dolores eius
                cumque nihil architecto reiciendis repellendus dolorem suscipit
                totam deleniti iste? Assumenda.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutPage;
