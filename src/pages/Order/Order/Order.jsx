import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../shared/Cover/Cover';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../hooks/UseMenu';

import OrdeTab from './OrderTab/OrdeTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert',  'drinks']
    const { category } = useParams();

    console.log(category);
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order food</title>
            </Helmet>
            <Cover title={'order food'} img={orderImg}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrdeTab items={salad}></OrdeTab>
                </TabPanel>
                <TabPanel><OrdeTab items={pizza}></OrdeTab></TabPanel>
                <TabPanel><OrdeTab items={soup}></OrdeTab></TabPanel>
                <TabPanel><OrdeTab items={dessert}></OrdeTab></TabPanel>
                <TabPanel><OrdeTab items={drinks}></OrdeTab></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;