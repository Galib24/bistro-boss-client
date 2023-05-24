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
    const dessert =  menu.filter(item => item.category === 'dessert');
    const soup =  menu.filter(item => item.category === 'soup');
    const salad =  menu.filter(item => item.category === 'salad');
    const pizza =  menu.filter(item => item.category === 'pizza');
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
            
            items={dessert}
            title="dessert"
            img={dessertImg}
            >
                
            </MenuCategory>

            {/* Pizza menu items */}
            <MenuCategory
            
            items={pizza}
            title={'pizza'}
            img={PizzaImg}
            >
                
            </MenuCategory>

            {/* salad menu items */}
            <MenuCategory
            
            items={salad}
            title={'salad'}
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