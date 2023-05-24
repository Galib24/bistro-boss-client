/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import PizzaImg from '../../../assets/menu/pizza-bg.jpg'
import SaladImg from '../../../assets/menu/salad-bg.jpg'
import SoupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/Section Title/SectionTitle';
import MenuCategory from '../Menu Category/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts =  menu.filter(item => item.category === 'dessert');
    const soup =  menu.filter(item => item.category === 'soup');
    const salad =  menu.filter(item => item.category === 'salad');
    const pizzas =  menu.filter(item => item.category === 'pizza');
    const offered =  menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
               
            </Helmet>
            <Cover img={menuImg} title='Our Menu'></Cover>
            {/* main cover */}
            <SectionTitle
            subHeading={"Don't Miss"}
            heading={"Today's Offer"}
            >

            </SectionTitle>

            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desert menu items */}
            <MenuCategory
            
            items={desserts}
            title="desert"
            img={dessertImg}
            >
                
            </MenuCategory>

            {/* Pizza menu items */}
            <MenuCategory
            
            items={pizzas}
            title={'pizzas'}
            img={PizzaImg}
            >
                
            </MenuCategory>

            {/* salad menu items */}
            <MenuCategory
            
            items={salad}
            title={'salads'}
            img={SaladImg}
            >
                
            </MenuCategory>

            {/* soup menu items */}
            <MenuCategory
            
            items={soup}
            title={'soup'}
            img={SoupImg}
            >
                
            </MenuCategory>

          
        </div>
    );
};

export default Menu;