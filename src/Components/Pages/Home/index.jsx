import Form from "../../Form";
import { ContainerHome } from "./style";
import Carousel from "../../Carousel";

export default function Home() {
  return (
    <ContainerHome>
      <Carousel />
      <section className="container_home-form">
        <h1>Create Account</h1>
        <Form></Form>
      </section>
    </ContainerHome>
  );
}
