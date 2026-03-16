import "./sidebar.css";

export default function Sidebar() {

  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="sidebar">

      <h2>RBAC System</h2>

      <ul>
        <li>Dashboard</li>
        <li>Profile</li>

        {role === "ROLE_ADMIN" && (
          <li>Manage Users</li>
        )}
      </ul>

      <button onClick={logout}>Logout</button>

    </div>
  );
}