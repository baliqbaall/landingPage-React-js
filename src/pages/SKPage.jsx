import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";

const SKPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-medium text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s">
                Syarat & Ketentuan
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                accusamus!
              </p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                accusamus nobis dignissimos modi. Voluptatem illo exercitationem
                praesentium explicabo soluta molestiae voluptas repellendus
                rerum inventore! Animi praesentium perspiciatis repellendus
                temporibus voluptatem consequuntur alias odit minima inventore
                dignissimos, ex nobis deserunt placeat pariatur, quo neque
                tempora consectetur! Fuga suscipit enim harum perspiciatis
                laborum accusantium ipsa, eos nulla esse aliquid, voluptatum
                optio incidunt.
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4>1. Lorem, ipsum dolor.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                illum in ut aliquid quam error corrupti sapiente omnis. Vitae
                numquam incidunt voluptatem odio animi, hic tempora est
                aspernatur nisi saepe veritatis rem dolores perferendis, quae
                deserunt ex laborum neque cum!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
                porro. Nesciunt maiores error ipsam beatae distinctio voluptatum
                rerum hic? Totam voluptates explicabo rem quia laborum repellat
                nostrum sapiente necessitatibus illum voluptatum deserunt
                tenetur nobis modi quaerat cumque ad molestias tempora
                voluptatibus ullam quo soluta doloremque ipsam, ex ipsa? Nihil
                ex quia fugit officiis tempora officia atque, eum laboriosam in
                nisi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                doloremque, delectus vel asperiores maxime repellendus quod et
                dolor illum sint natus voluptate assumenda enim reprehenderit
                tempore. Quam iste numquam quibusdam perferendis fuga nulla quod
                suscipit. Vel quasi eius molestias sunt, maxime enim sed tenetur
                cum itaque velit quas cumque eveniet, a animi obcaecati. Ab
                voluptas nisi at numquam accusamus, veniam repellat maxime
                facilis fugiat repellendus harum laborum ex vero, officia fuga
                id voluptate rem minima laudantium delectus, odit sequi est.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default SKPage;
