import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";

const NavMenu = () => {
  return (
    <>
      <ul> 
        {menu_data.map((menu_item, i) => (
          <li key={i} className={`${menu_item?.has_dropdown && "has-dropdown"}`}>
            <Link href={menu_item.link}> 
              <span></span>
              {menu_item.title}
            </Link>
            
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
