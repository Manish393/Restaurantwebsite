import React, { useState } from 'react';
import "./Resturant.css"
import Menu from './menuApi.js';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
const uniqueList= [
    ...new Set(Menu.map((curElem) => {
    return curElem.category;
})
),
"All",
];
const Resturant = () => {
   const [menuData, setmenuData] = React.useState(Menu);
   const [menuList,SetMenuList] = React.useState(uniqueList);
    const filterItem =(category)=>{
        if(category==="All"){
            setmenuData(Menu);
            return;
        }
        const updatelist= Menu.filter((curElem)=>{
            return curElem.category===category;
        });
        setmenuData(updatelist);
    };
    return (
        <>
      <Navbar filterItem={filterItem} menuList= {menuList}/>
      <MenuCard menuData={menuData}/>
    </>
    )
}

export default Resturant
