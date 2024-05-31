import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useCart from "../hooks/useCart";

const Card = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = useAuth();
  const axiosBase = useAxiosPublic();
const [,refetch] = useCart()
  const navigate = useNavigate();
  const handleAddItem = () => {
    if (user && user.email) {
      const cartItem = {
        userName: user.displayName,
        user: user.email,
        id: _id,
        name,
        image,
        recipe,
        price,
      };

      axiosBase
        .post("/userItem", cartItem)
        .then((res) => {
          const data = res.data;
          if (data.insertedId) {
            refetch()
            Swal.fire({
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          alert("This Item You Have Already Added");
          console.log(error);
        });
    } else {
      Swal.fire({
        title: "Are you sure Login?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className=" rounded-md shadow-md cursor-pointer bg-[#F3F3F3] border">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-[250px] dark:bg-gray-500"
      />
      <div className="p-6 space-y-8 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          <p className="dark:text-gray-800">{recipe}</p>
        </div>
        <button
          onClick={handleAddItem}
          className="button  font-inter text-[20px]"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
