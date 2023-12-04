import React from "react";
import Link from "next/link";
import Image from "next/image";
import breadcrumb_img from "@assets/img/breadcrumb/titile.svg";

const Breadcrumb = ({top_title = "Regedit", page_title = "RegeditBİlisim"}) => {
  return (
    <>
      <section
        className="breadcrumb__area breadcrumb-style pt-190 pb-210 p-relative z-index-1"
       >
        <div className="breadcrumb__bg-overlay m-img"></div>
       
          <div className="row justify-content-center">
          <div className="tp-hero-2-bottom p-relative d-none d-md-block">
           
               
                  <h3 className="tp-hero-2-bottom-title">{page_title}</h3>
              
         </div>
          </div>
        
      </section>
    </>
  );
};

export default Breadcrumb;
