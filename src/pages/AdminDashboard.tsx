import { useEffect, useState } from "react";
 import Sidebar from "../components/Sidebar";
import api from "../services/api";


export default function AdminDashboard(){

  const [users,setUsers] = useState<any[]>([]);

  useEffect(()=>{

    const fetchUsers = async () => {

      const res = await api.get("/users");

      setUsers(res.data);
    };

    fetchUsers();

  },[]);

  return(

    <div className="flex">

      <Sidebar/>

      <div className="flex-1 p-10 bg-gray-100">

        <h1 className="text-3xl font-bold mb-6">
          Admin Dashboard
        </h1>

        <table className="w-full bg-white shadow rounded">

          <thead className="bg-gray-200">

            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
            </tr>

          </thead>

          <tbody>

            {users.map((user)=>(
              <tr key={user.id} className="border-b">

                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}