import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: true,
    home_icon: <HomeIcon />,
    title: "Anasayfa",
    link: "/",
  
    
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Hakkımızda",
    link: "/about",
    active: "",
  },   
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Servislerimiz",
    link: "/service",
    active: "",
    sub_menus: [
      { link: "/service", title: "Service" },
      { link: "/service-details", title: "Services Details" }, 
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Ürünlerimiz",
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/portfolio", title: "Portfolio" },
      { link: "/portfolio-details", title: "Portfolio Details" },
      { link: "/team", title: "Team" }, 
      { link: "/team-details", title: "Team Details" },
      { link: "/404", title: "404" }, 
    ],
  },


  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "İletişim",
    link: "/contact",
    active: "",
  },
  

];
export default menu_data;
