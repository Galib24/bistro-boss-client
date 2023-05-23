import Banner from "../Banner/Banner";
import ChefRecommends from "../Chef Recommends/ChefRecommends";
import PopularMenu from "../PopularMenu/PopularMenu";
import Category from "../category/Category";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <ChefRecommends></ChefRecommends>
        </div>
    );
};

export default Home;