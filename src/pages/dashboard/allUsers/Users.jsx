import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import SectionHeader from "../../../components/SectionHeader";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Users = () => {
  const axiosBase = useAxiosPublic();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosBase.get("/users");
      return res.data;
    },
  });

  const handleUpdate = (user) => {
    axiosBase
      .put(`/users/${user._id}`)
      .then((res) => {
        refetch();
        console.log(res.data)
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (_id) => {
    axiosBase
      .delete(`/users/${_id}`)
      .then((res) => {
        refetch();
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-10">
      <SectionHeader
        info={{ title: "-How many??", heading: "MANAGE ALL USERS" }}
      ></SectionHeader>
      <div className="w-[70%] mx-auto bg-[#dfdbdb] p-6 mt-10">
        <div className="flex justify-between *:text-2xl *:font-inter *:font-bold">
          <h1>Total User: {users?.length}</h1>
        </div>
        <div className="overflow-x-auto mt-10">
          <table className="table font-inter">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, id) => {
                return (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                     {user.role == "admin" ? "Admin" : <button
                        onClick={() => handleUpdate(user)}
                        className="text-[30px] text-red-600"
                      >
                        <FaUser></FaUser>
                      </button>}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="text-[30px] text-red-600"
                      >
                        <MdDeleteForever></MdDeleteForever>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
