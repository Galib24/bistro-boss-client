import SectionTitle from "../../../Components/Section Title/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading="check it Out"
                heading="Featured Item"
            >

            </SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center py-20 px-36 pt-12">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2023</p>
                    <p>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;