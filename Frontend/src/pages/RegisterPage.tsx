import { useForm } from "react-hook-form";
import { registerUser } from "../services/authService";
import "./register.css"


export default function RegisterPage() {

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data:any) => {

    console.log("Register Data:", data);

    try{
      const res = await registerUser(data);
      console.log(res);
      alert("User registered successfully");
    }catch(error){
      console.error(error);
      alert("Register failed");
    }
  };

  return (
    <div className="container">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow p-6 w-80"
      >
        <h2>Register</h2>
        <div className="input">
          <input type ="text" name="name" placeholder="Name" required/>
           <input type ="email" name="email" placeholder="Email" required/>
           <input type ="password" name="password" placeholder="Password1" required/>
          
          <label htmlFor="role">Select Role</label>

<select id="role" {...register("role")} className="border p-2 w-full mb-3">
  <option value="ROLE_USER">User</option>
  <option value="ROLE_ADMIN">Admin</option>
</select>

   

          <input type="submit" name="Register"/>
        </div>
            

       
      </form>

    </div>
  );
}




//  <h2 className="text-xl mb-4">Register</h2>

//         <input
//           {...register("name")}
//           placeholder="Name"
//           className="border p-2 w-full mb-2"
//         />

//         <input
//           {...register("email")}
//           placeholder="Email"
//           className="border p-2 w-full mb-2"
//         />

//         <input
//           {...register("password")}
//           type="password"
//           placeholder="Password"
//           className="border p-2 w-full mb-2"
//         />

//         <select {...register("role")} className="border p-2 w-full mb-3">
//           <option value="ROLE_USER">User</option>
//           <option value="ROLE_ADMIN">Admin</option>
//         </select>

//         <button type="submit" className="bg-blue-500 text-white p-2 w-full">
//           Register
//         </button>
