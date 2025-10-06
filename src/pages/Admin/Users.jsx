import { useEffect, useState } from "react";
import { get } from "../../services/EndPoints";




export const Users = () => {
  const [userList, setuserss] = useState([])

  useEffect(() => {
    const GetAllData = async () => {
      try {
        const response = await get("/dashboard/allusers");
        const data = response.data;

        setuserss(data.Users)
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    GetAllData()
  })

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl shadow-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              {/* <th className="py-3 px-6 text-left">ID</th> */}
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {userList.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-100 transition-colors"
              >
              
                <td className="py-4 px-6">{user.Fullname}</td>
                <td className="py-4 px-6">{user.Email}</td>
                <td className="py-4 px-6">{user.Role}</td>
                <td className="py-4 px-6 text-center space-x-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm transition">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
