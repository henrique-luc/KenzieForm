import { useHistory, useParams } from "react-router-dom";
import { ContainerWelcome } from "./style";

export default function Welcome({ newUser }) {
  const history = useHistory();
  const params = useParams();

  return (
    <ContainerWelcome>
      <section>
        <button onClick={() => history.push("/")}>Home</button>
      </section>
      <section className="container_welcome-title">
        <h1>Welcome</h1>
        <h2>{params.name}</h2>
      </section>
    </ContainerWelcome>
  );
}
