import { Helmet } from "react-helmet-async";
import imgMenu from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import soupsImg from '../../../assets/menu/soup-bg.jpg';
import saladsImg from '../../../assets/menu/salad-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import SectionsTitle from "../../../copmonets/SectionTitle/SectionsTitle";
import useMenu from "../../../hooks/UseMenu";
import Cover from "../../shared/Cover/Cover";
import MenuCategory from "./MenuCategory/MenuCategory";


const Menu = () => {

    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad= menu.filter(item => item.category === 'salad');
    const pizza= menu.filter(item => item.category === 'pizza');
    const offered= menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={imgMenu} title={'Our menu'}></Cover>
            <SectionsTitle subHeading={'dont miss'}
                heading={'Todays offer'}></SectionsTitle>
            
            <MenuCategory items={offered} ></MenuCategory>
            
            <MenuCategory items={dessert} title={'dessert'} img={dessertImg}></MenuCategory>

            <MenuCategory items={soup} title={'soup'} img={soupsImg}></MenuCategory>

            <MenuCategory items={salad} title={'salad'} img={saladsImg}></MenuCategory>

            <MenuCategory items={pizza} title={'Pizza'} img={pizzaImg}></MenuCategory>
           
        </div>
    );
};

export default Menu;