import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const users = [
    {
      name: "Michael Holz",
      date: "04/10/2013",
      role: "Admin",
      status: "Active",
    },
    {
      name: "Paula Wilson",
      date: "05/08/2014",
      role: "Publisher",
      status: "Active",
    },
    {
      name: "Antonio Moreno",
      date: "11/05/2015",
      role: "Publisher",
      status: "Suspended",
    },
    {
      name: "Mary Saveley",
      date: "06/09/2016",
      role: "Reviewer",
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="flex justify-end mb-4">
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-1 cursor-pointer rounded text-sm"
        >
          Logout
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow">
        <table className="w-full text-sm">
          <thead className="text-gray-400 border-b">
            <tr>
              <th className="p-3">#</th>
              <th className="text-left">Name</th>
              <th>Date Created</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {users.map((u, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="p-3 text-center">{i + 1}</td>

                <td className="flex items-center gap-3 p-3">
                  <div className="h-8 w-8 rounded-full bg-gray-400 text-white flex items-center justify-center text-xs font-bold">
                    {u.name.charAt(0)}
                  </div>
                  <span className="text-blue-600">{u.name}</span>
                </td>

                <td className="text-center text-gray-500">{u.date}</td>
                <td className="text-center text-purple-500">{u.role}</td>

                <td className="text-center">
                  {u.status === "Active" && (
                    <span className="text-green-500 flex items-center justify-center gap-1">
                      <span className="h-2 w-2 bg-green-500 rounded-full"></span>{" "}
                      Active
                    </span>
                  )}
                  {u.status === "Suspended" && (
                    <span className="text-red-500 flex items-center justify-center gap-1">
                      <span className="h-2 w-2 bg-red-500 rounded-full"></span>{" "}
                      Suspended
                    </span>
                  )}
                  {u.status === "Inactive" && (
                    <span className="text-yellow-500 flex items-center justify-center gap-1">
                      <span className="h-2 w-2 bg-yellow-500 rounded-full"></span>{" "}
                      Inactive
                    </span>
                  )}
                </td>

                <td className="text-center space-x-2">
                  <span className="text-blue-500 cursor-pointer">⚙</span>
                  <span className="text-red-500 cursor-pointer">✖</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
