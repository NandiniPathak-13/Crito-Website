import { useEffect, useState } from "react";
import { get } from "../../services/EndPoints";

export const AdminDashboard = () => {


   const [blogs, setblogposts] = useState([])

   const [user, setuserss] = useState([])


   useEffect(() => {
      const GetAllData = async () => {
         try {
            const response = await get("/dashboard/");
            const data = response.data;
            setblogposts(data.Posts)
            setuserss(data.Users)
            console.log(data);
         } catch (error) {
            console.log(error);
         }
      };
      GetAllData()
   })
   return (
      <div >


         {/* Main Content */}
         <div className=" items-center p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
               <div className="Container bg-blue-300 rounded-lg border-2 border-black ">
                  <div className="my-8 mx-4">
                     <h2 className="text-2xl  font-bold mb-6"> Total User</h2>
                     <p className="text-gray-600 mt-2 line-clamp-3"> {user && user.length}</p>


                  </div>
               </div>
               <div className="Container bg-green-300 rounded-lg  border-2 border-black">
                  <div className="my-8 mx-5">
                     <h2 className="text-2xl  font-bold mb-6"> Total Posts</h2>
                     <p className="text-gray-600 mt-2 line-clamp-3">  {blogs && blogs.length}</p>


                  </div>
               </div>
               <div className="Container border-2 border-black">
                  <div className="my-8 mx-5">
                     <h2 className="text-2xl  font-bold mb-6"> Total User</h2>
                     <p className="text-gray-600 mt-2 line-clamp-3"> paragraphhkfhsdsutbiosatdteudtot</p>


                  </div>
               </div>
               <div className="Container border-2 border-black">
                  <div className="my-8 mx-5">
                     <h2 className="text-2xl  font-bold mb-6"> Total User</h2>
                     <p className="text-gray-600 mt-2 line-clamp-3"> paragraphhkfhsdsutbiosatdteudtot</p>


                  </div>
               </div>


            </div>








         </div>
      </div>
   )
};

export default AdminDashboard