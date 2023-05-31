
import SectionTitle from "../../../Components/Section Title/SectionTitle";
import { useForm } from "react-hook-form";


const img_hosting_token = import.meta.env.VITE_Image_Upload_token;


const AddItem = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = (data) => {
        // console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                // console.log(imgResponse);

                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    console.log(newItem);
                }
            })
    };
    console.log(errors);
    console.log(img_hosting_token);



    return (
        <div className="w-full px-10">
            <SectionTitle subHeading='what is new' heading='Add an item'></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4 ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue='Pick One'  {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Deshi Item</option>
                            <option>Drink</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-4 ">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input  {...register("price", { required: true })} type="number" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>

                    </label>
                    <textarea  {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full my-4 ">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input  {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>


        </div>
    );
};

export default AddItem;