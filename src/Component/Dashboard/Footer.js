import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faHome, faList,  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { useContext } from "react";
import { Link } from "react-router-dom";
import { WindowSize } from "../Context/WindowContext";
import { Menu } from "../Context/MenuContext";
 

export default function Footer(){

//     const menu=useContext(Menu)   ;

//     let setisOpen=menu.setisOpen ;
//     function handelchangeMenue(){
        
//         setisOpen((perv)=>!perv) ;  
//   }
         

        //  const backPage=WindowContext.screenshowBlack; 
    // const style_linke={
    //     color:backPage ?'white':'black',
    //     textDecoration:'none'
    //   } 

    return(
        <div className="w-100  mb-0 pb-0  d-flex align-items-center justify-content-center fs-3 border  "
        style={{
            position:'fixed',
              bottom: "0px",
              zIndex:100,
              background: 'rgb(53, 77, 158)'
        }}>
          
              <Link to='/dashboard'className="d-flex flex-column " style={{color:'rgb(238, 216, 15)'}}>
            <FontAwesomeIcon icon={faHome} />
              Home  
            </Link>
        
        </div>
    )
}