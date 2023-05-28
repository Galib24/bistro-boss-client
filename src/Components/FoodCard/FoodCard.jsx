/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { data } from "autoprefixer";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const FoodCard = ({ item }) => {
    const { image, name, recipe, price } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();



    const handleAddToCart = item => {
        console.log(item);
        if (user) {
            fetch('http://localhost:5000/carts')
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'please login to order the food!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login', {state: {from: location}})
                }
            })
        }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 rounded-xl bg-red-500 text-white">{price}</p>
            <div className="card-body flex flex-col items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="border-orange-400 btn btn-outline border-0 border-b-4 mt-4 bg-gray-300">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;