import { useForm } from "react-hook-form";
import { loginUser } from "../services/authService";

export default function LoginPage(){

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data:any) => {

    console.log("Login Data:", data);

    try{

      const res = await loginUser(data);

      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.role);

      alert("Login success");

      window.location.href="/dashboard";

    }catch(err){
      console.error(err);
      alert("Login failed");
    }

  };

  return (
    <div className="flex justify-center items-center h-screen">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow p-6 w-80"
      >

        <h2 className="text-xl mb-4">Login</h2>

        <input
          {...register("email")}
          placeholder="Email"
          className="border p-2 w-full mb-2"
        />

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
        />

        <button type="submit" className="bg-green-500 text-white p-2 w-full">
          Login
        </button>

      </form>

    </div>
  );
}