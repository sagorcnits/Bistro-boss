import { MdDeleteForever } from "react-icons/md";
import SectionHeader from "../../../components/SectionHeader";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const axiosBase = useAxiosPublic();
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const handleDelete = (_id) => {
    axiosBase
      .delete(`/userItem/${_id}`)
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
        info={{ title: "My Cart", heading: "WANNA ADD MORE?" }}
      ></SectionHeader>
      <div className="w-[70%] mx-auto bg-[#dfdbdb] p-6 mt-10">
        <div className="flex justify-between *:text-2xl *:font-inter *:font-bold">
          <h1>Total orders: {cart.length}</h1>
          <h1>Total Price: ${totalPrice}</h1>
          <button className="button2 border-none">Pay</button>
        </div>
        <div className="overflow-x-auto mt-10">
          <table className="table font-inter">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item, id) => {
                return (
                  <tr>
                    <td>{id + 1}</td>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(item._id)}
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

export default MyCart;
