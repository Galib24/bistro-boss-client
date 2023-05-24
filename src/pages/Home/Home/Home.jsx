import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ChefRecommends from "../Chef Recommends/ChefRecommends";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import BistoBoss from "../bistro boss/BistoBoss";
import Category from "../category/Category";
import Contact from "../contact/Contact";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>

            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistoBoss></BistoBoss>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;