import { MdDeleteForever } from "react-icons/md";
import SectionHeader from "../../../components/SectionHeader";

const MyCart = () => {
  return (
    <div className="mt-10">
      <SectionHeader
        info={{ title: "My Cart", heading: "WANNA ADD MORE?" }}
      ></SectionHeader>
      <div className="w-[70%] mx-auto bg-[#dfdbdb] p-6 mt-10">
        <div className="flex justify-between *:text-2xl *:font-inter *:font-bold">
          <h1>Total orders: 6</h1>
          <h1>Total Price: $46</h1>
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
              <tr>
                <td>1</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Roast Duck Breast</td>
                <td>$14</td>
                <td>
                  <button className="text-[30px] text-red-600"><MdDeleteForever></MdDeleteForever></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
