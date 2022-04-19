import { useHistory } from "react-router-dom";

export default function Welcome() {
  const history = useHistory();

  return (
    <div>
      <section>
        <button onClick={() => history.push("/welcome")}>Inicio</button>;
      </section>
      <h1>Welcome</h1>
      <h2></h2>
    </div>
  );
}
