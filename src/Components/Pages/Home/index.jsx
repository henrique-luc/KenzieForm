import Form from "../../Form";
import { ContainerHome } from "./style";

export default function Home() {
  return (
    <ContainerHome>
      <section>
        <figure>
          <img src="" alt="" />
          <figcaption></figcaption>
        </figure>
      </section>
      <section className="container_home-form">
        <h1>Create Account</h1>
        <Form></Form>
      </section>
    </ContainerHome>
  );
}
