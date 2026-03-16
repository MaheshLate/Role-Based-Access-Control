import { useForm } from "react-hook-form";
import { loginUser } from "../services/authService";
import { Link } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data:any) => {
    console.log("Login Data:", data);

    try {
      const res = await loginUser(data);

      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.role);
      localStorage.setItem("email", res.email);
      alert("Login success");

      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (


    <div className="main">

      <form onSubmit={handleSubmit(onSubmit)}>


        <h3>Login</h3>
        <input {...register("email")} type="email" placeholder="Email" required /> 
        <input{...register("password")} type="password" placeholder="Password" required/>
        <h6><a href="#">Forgot password?</a></h6>
        <input type="submit" value="Login"/>
        <h6>Don't have an account? <Link to= "/register">Rigister</Link></h6>


      </form>
     

    </div>
  );
}
         