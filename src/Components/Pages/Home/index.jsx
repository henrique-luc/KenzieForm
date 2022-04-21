import Form from "../../Form";
import { ContainerHome } from "./style";
import MyCarousel from "../../Carousel";

export default function Home() {
  return (
    <ContainerHome>
      <figure>
        <img src="1.jpg" alt="" />
        <figcaption></figcaption>
      </figure>
      <section className="container_home-form">
        <h1>Create Account</h1>
        <Form></Form>
      </section>
    </ContainerHome>
  );
}
