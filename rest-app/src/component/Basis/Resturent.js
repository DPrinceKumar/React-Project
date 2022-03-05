import React, {useState} from 'react'
import "./style.css";
import Menu from "../menuAPi";
import MenuCart from './MenuCart';
import NavBar from './navBar';

const uniqueList = [...new Set(Menu.map((curElem => {
    return curElem.category;
  }))),
  "ALL",
];

// console.log(uniqueList);

const Resturent = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenulist] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "ALL") {
      setMenuData(Menu);
      return;
    }
    const updatedData = Menu.filter((currentElement) => {
      return currentElement.category === category;
    });
    setMenuData(updatedData);
  };


  return (
  < >
    < NavBar filterItems = { filterItem } menuUpdatedList = {menuList}/>
    <MenuCart menuDataProp = { menuData } />
    </>
  );
}

export default Resturent