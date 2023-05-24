

const FoodCard = ({item}) => {
    const { image, name, recipe, price } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 rounded-xl bg-red-500 text-white">{price}</p>
            <div className="card-body flex flex-col items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="border-orange-400 btn btn-outline border-0 border-b-4 mt-4 bg-gray-300">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;