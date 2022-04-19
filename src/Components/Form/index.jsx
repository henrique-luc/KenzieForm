import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Form() {
  const schema = yup.object().shape({
    name: yup.string().required("Name required"),
    email: yup
      .string()
      .required("Email required")
      .email("Email must be in the format email@provedor.com"),
    password: yup
      .string()
      .required("Password required")
      .matches(
        /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
      ),
    confirmPassword: yup
      .string()
      .required("Password required")
      .matches(
        /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
      )
      .oneOf([yup.ref("password")]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <section>
        <input type="text" placeholder="Name" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
        <input type="email" placeholder="Email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <input
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </section>
      <button type="submit">Register</button>
    </form>
  );
}
