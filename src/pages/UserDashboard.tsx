import Sidebar from "../components/Sidebar";

export default function UserDashboard(){

  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");

  return(

    <div className="flex">


      <div>

        <h1 >
          User Dashboard
        </h1>

        <div>

          <h2>
            My Profile
          </h2>

          <p><strong>Email:</strong> {email}</p>

          <p><strong>Role:</strong> {role}</p>

        </div>

      <Sidebar/>
      </div>

    </div>
  )
}