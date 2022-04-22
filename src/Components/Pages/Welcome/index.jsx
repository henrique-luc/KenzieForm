import { useHistory, useParams } from "react-router-dom";
import { ContainerWelcome } from "./style";

export default function Welcome({ newUser }) {
  const history = useHistory();
  const params = useParams();

  console.log(newUser);
  console.log(params);

  return (
    <ContainerWelcome>
      <section>
        <button onClick={() => history.push("/")}>Inicio</button>
      </section>
      <section className="container_welcome-title">
        <video autoplay loop muted src=""></video>
        <h1>Welcome</h1>
        <h2>Henrique</h2>
      </section>
    </ContainerWelcome>
  );
}
