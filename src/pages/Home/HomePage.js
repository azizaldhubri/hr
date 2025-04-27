import { faBars,  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"; 
import { useContext, useState } from "react";
import { WindowSize } from "../../Component/Context/WindowContext";
import MenuList from "./MenuList";
import './menulist.css';
import './home.css' ;
 
import Login from "../Auth/Login"; 
import ScrollingBar2 from "./ScrollingBar2";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Register from "../Auth/Register";
 

export default function Homepage(){ 
  const size=useContext(WindowSize) ;
  const windowSize=size.windowSize ;   
 
     const[open,setOpen]=useState(false) ;
     const[open2,setOpen2]=useState(false) ;
     const[openMenue,setOpenMenu]=useState(false) ;
     
     const phoneNumber = '967770515088';  
     const message = 'مرحباً! كيف يمكنني مساعدتك؟';  
     const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
     
      function handleOpen(){      
        setOpenMenu(prev=>!prev);
      }
      const[openFormRegister,setOpenFormRegister]=useState(false) ;

      function handeleOpenFormRegister(e){         
         setOpenFormRegister(perv=>!perv)
        }
        
      

//=============================================================================
  
                    const [isModalOpen, setIsModalOpen] = useState(false);
        
          // دالة لفتح المودال
          const openModal = () => setIsModalOpen(true);
        
          // دالة لإغلاق المودال
          const closeModal = () => setIsModalOpen(false);
        
          function Modal({ onClose }) {
            return (
                <div className="modal_homepage   "
                 onClick={(e)=>{
                  setIsModalOpen(false) ;
                   }}  >                    
                        <div  className='modal_content  gap-3 '    onClick={(e)=>{                              
                           e.stopPropagation(); }}  >                         
                           {openFormRegister === false ?  <Login register={handeleOpenFormRegister}/>
                           : <Register login={handeleOpenFormRegister}/> }  
                           {/* {openFormRegister ==='true'&&     }     */}
                        </div>                    
                </div>
            );
        }
    return(      
   <div className="w-100   "
       style={{height:'99vh',position:'relative',
          background:'rgb(3, 35, 77)'  ,overflow:'hidden' }} > 
            {/*  ScrollingBar2 */}
     <div className="w-100   d-flex  justify-content-center "
             style={{ position:'relative',zIndex:'10' }} > 
          <div className="d-flix align-items-center justify-content-center   fs-5 me-3 ms-3 mt-1 rounded      border "
              style={{position:'absolute' ,top:'90px', zIndex:11,overflow:'hidden',width:'90%',}}>       
             <ScrollingBar2 />          
          </div>
     </div>
     {/* topbar homepage */}         
        <div className="w-100     d-flex align-items-center justify-content-center rounded bg-light  "
           style={{height:'90px' , }}> 
         <div className="  col-lg-12 col-md-10  col-sm-12 col-12    
               d-flex align-items-center justify-content-between ps-4 pe-4 mb-1" 
                 style={{height:'100%',border:'4px solid rgb(13, 44, 85)' }}>
             
            <div className=" col-lg-3 col-md-3 col-sm-2 col-3  text-center order-lg-3  ">
                {/* <Link to='login1' >تسجيل الدخول</Link> */}
                {/*  e.stopPropagation();             فائدتها تحدد ضغط العنصر دون وصل الضغطة للديف الاب */}
                <button className="border-0 bg-0" onClick={(e)=>{  e.stopPropagation(); openModal() ;   }} >تسجيل الدخول</button>
                {/* <FontAwesomeIcon> </FontAwesomeIcon> */}
            
           </div> 
           <div className="  d-flex align-items-center gap-2 justify-content-center  col-lg-3 col-md-3 col-sm-2   order-lg-1  "
          //  style={{zIndex:'2'} } 
               >
             {windowSize >950 && 
               <p className="m-0 fs-3 ">مرحبا في انظمة</p> }
                {windowSize > 230 && 
                <img src={require('../../img/المس.png')} style={{width:'75px',borderRadius:'100%'}}></img>
                   }
                   
             </div> 


            <div className="order-lg-2    col-lg-6 col-md-4 col-sm-2 col-3 bg-sm-danger   h-100  ">
                    {windowSize >1000 && 
                      <ul className=" m-0 ps-2 pe-2 border d-flex text-danger align-items-center justify-content-between link  "
                      style={{height:'100%',cursor:'pointer'}}>
                          <li>  <Link  to='/'>الصفحة الرئيسية</Link> </li>                                                 
                       
                          <li  className=" d-flex  align-items-center justify-content-between flex-column gap-5 text-white   " 
                                style={{listStyle:'none',position:'relative', cursor:'pointer'}}
                                  onMouseEnter={()=>setOpen2(true)} onMouseLeave={()=>setOpen2(false)}>
                                <Link   to='#' className="     ">معلومات عنا </Link> 
                                { open2===true &&                                     
                                    <div  className=" rounded d-flex align-items-center justify-content-between pt-5  "
                                            style={{ position:'absolute' ,background:' rgba(255, 255, 255, 0.5)' ,zIndex:'15'}}>
                                        <ul className=" rounded d-flex align-items-center justify-content-between   "
                                          style={{ background:'black' ,listStyle:'none' }}>
                                          <li  className="ms-2 me-2"><Link  className=" link"  to='#'> معلومات عنا</Link> </li>
                                            <li className="ms-2 me-2"><Link className=" link"  to='#'> لماذا برنامج تسهيل</Link></li>
                                            <li className="ms-2 me-2"><Link className=" link"  to='#'> عملائنا</Link></li>
                                        </ul>                                                              
                                    </div>                     
                                  }                   
                          </li>
                         
                          <li  className="  d-flex  align-items-center justify-content-between flex-column gap-5 text-white   border-danger" style={{listStyle:'none',position:'relative',}}
                              onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
                            <Link   to='#' className="    ">المزايا</Link> 
                            { open===true &&                                     
                                <div  className=" rounded d-flex align-items-center justify-content-between pt-5 "
                                        style={{ position:'absolute' ,zIndex:'15' }}>
                                    <ul className="  rounded d-flex align-items-center justify-content-between  p-3  gap-3 border pe-1 ps-1 "
                                      style={{background:'black',color:'white',listStyle:'none'  }}>
                                              <li className="ms-0 me-0 pe-0 ps-0" > <Link  className=" link "  to='#'  > الحضور والانصراف</Link> </li>
                                              <li><Link    className=" link"  to='#'>الرواتب</Link></li>
                                              <li><Link  className=" link" to='#'>الاجازات</Link></li>
                                              <li className=""><Link  className=" link" to='#'> ادارة المهام</Link></li> 
                                    </ul>                                                              
                                </div>                     
                              }                   
                          </li> 
                          <Link to={waLink} target="_blank" rel="noopener noreferrer">تواصل معنا</Link>  
                          {/* <Link to={waLink} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon  icon={faWhatsapp} style={{color:'green'}}/>        
                          </Link> */}
                       </ul>}
                    {windowSize <1000 &&
                    <div className="d-flex align-items-center   h-100"  style={{textAlign:'left' }} >
                       <FontAwesomeIcon icon={faBars} style={{cursor:'pointer'}} onClick={handleOpen} /> 
                    </div> 
                   
                       }
            </div>  

            </div>

        </div>
      {/* End  topbar homepage  */}
       
       {windowSize >375 && 
         <img src={require('../../img/تسهيل.png')} style={{width:'100%',height:'86%'}}></img>
       }

       {openMenue &&
         <div className="menulist border d-flex align-items-center  ">
         <MenuList  openMenue={handleOpen} />
        </div> 
        } 
            <div className="     " style={{zIndex:'100'}}> 
              {/* <Login/>              */}
                 {isModalOpen && <Modal onClose={closeModal} />}
            </div>
     
       </div>
    )
}
