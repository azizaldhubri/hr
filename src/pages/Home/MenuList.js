import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MenuList(props){

       const[open,setOpen]=useState(false) ;
           const[open2,setOpen2]=useState(false) ;
    return(
        <div className='w-100  d-flex     justify-content-center'  >
         <div className="  d-flex  align-items-start    flex-column" style={{height:'80vh',width:'290px' }}>

            <div className='w-100 d-flex  align-items-center justify-content-between   p-2 '
            style={{borderBottom:'2px solid black'}}>
             <button onClick={props.openMenue}>X</button>
            <img src={require('../../img/المس.png')} style={{width:'60px',height:'60px',borderRadius:'100%'}}></img>
            </div>
             
            <div className='w-100 border '>
                <ul className=' m-0 mt-3 p-0   me-2 gap-2 fs-5 'style={{listStyle:'none'}}>
                    <li className='  pt-3' style={{borderBottom:'2px solid black'}}>
                        <Link to='#' className=' '>الصفحة الرئيسية</Link>
                    </li>
                    {/* <li className='pt-3 d-flex align-items-center justify-content-between'style={{borderBottom:'2px solid black'}}>
                        <div className='w-100' style={{position:'relative'}}>
                            <div className='w-100 d-flex align-items-center justify-content-between  border'>
                              <Link to='#' onMouseEnter={()=>setOpen2(true)}  onMouseLeave={()=>setOpen2(false)}>معلومات عنا</Link>
                            {open2 ===true ?<h2> ˅ </h2>:<h2> ˄ </h2>}
                            
                            
                            </div>

                            { open2===true &&
                              <div className="p-2  rounded"
                              style={{position:'absolute' ,background:' rgba(255, 255, 255, 0.5)' ,right:'10px'}} >
                              <ul className=" d-flex gap-3 text-white" style={{listStyle:'none'}}>
                                  <li className="">
                                      <Link  to='#'> معلومات عنا</Link>
                                    </li>
                                  <li><Link to='#'> لماذا برنامج تسهيل</Link></li>
                                  <li><Link to='#'> عملائنا</Link></li>
                                      
                                    
                              </ul>
                              
                              </div>                    
                          }

                        </div>

                    </li> */}
                     <li  className=" d-flex   justify-content-between flex-column gap-5 text-white   mt-2" 
                     style={{listStyle:'none',position:'relative',zIndex:'1'}}
                            onMouseEnter={()=>setOpen2(true)} onMouseLeave={()=>setOpen2(false)}>
                        <Link   to='#' className="     ">معلومات عنا </Link> 
                        { open2===true &&                                     
                            <div  className=" rounded d-flex align-items-center justify-content-between pt-4  "
                                    style={{ position:'absolute' ,background:' rgba(255, 255, 255, 0.5)' }}>
                                <ul className=" rounded d-flex align-items-center justify-content-between   "
                                    style={{ background:'black' ,listStyle:'none' }}>
                                    <li  className="ms-3 me-3"><Link  className=" link"  to='#'> معلومات عنا</Link> </li>
                                    <li className="ms-3 me-3"><Link className=" link"  to='#'> لماذا برنامج تسهيل</Link></li>
                                    <li className="ms-3 me-3"><Link className=" link"  to='#'> عملائنا</Link></li>
                                </ul>                                                              
                            </div>                     
                            }                   
                      </li>
                      <li  className="  d-flex   justify-content-between flex-column gap-5 text-white   border-danger mt-2"
                       style={{listStyle:'none',position:'relative',zIndex:'0' }}
                              onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
                            <Link   to='#' className="    ">المزايا</Link> 
                            { open===true &&                                     
                                <div  className=" rounded d-flex align-items-center justify-content-between pt-4 "
                                        style={{ position:'absolute' , }}>
                                    <ul className="  rounded d-flex align-items-center justify-content-between    gap-3 border  "
                                      style={{background:'black',color:'white',listStyle:'none'  }}>
                                              <li > <Link  className=" link"  to='#'  > الحضور والانصراف</Link> </li>
                                              <li><Link    className=" link"  to='#'>الرواتب</Link></li>
                                              <li><Link  className=" link" to='#'>الاجازات</Link></li>
                                              <li><Link  className=" link" to='#'> ادارة المهام</Link></li> 
                                    </ul>                                                              
                                </div>                     
                              }                   
                          </li> 
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>


            </div>
            <div></div> 
        </div>

        </div>  
    )
}