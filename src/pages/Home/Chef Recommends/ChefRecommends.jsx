import SectionTitle from "../../../Components/Section Title/SectionTitle";
import recommends1 from "../../../assets/home/slide1.jpg"

const ChefRecommends = () => {
    return (
        <section>
            <SectionTitle

                heading="CHEF RECOMMENDS"
                subHeading="Should Try "

            >

            </SectionTitle>
            <div className="grid md:grid-cols-3 gap-10 mb-20">
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-80" src={recommends1} alt="Shoes" /></figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken <br /> <p className="text-center">Breast Fillets.</p></p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-secondary">Added to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-80" src={recommends1} alt="Shoes" /></figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken <br /> <p className="text-center">Breast Fillets.</p></p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-secondary">Added to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-80" src={recommends1} alt="Shoes" /></figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken <br /> <p className="text-center">Breast Fillets.</p></p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-secondary">Added to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommends;