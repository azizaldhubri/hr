import { Form , Col } from "react-bootstrap";
// import {  Link } from "react-router-dom";
import Select from 'react-select';
import HistoryDatew from "../../Component/Dashboard/History";
import { useRef, useState } from "react";
import TranFormDate from "../../Helpers/TranFormDate";
import { Link } from "react-router-dom";
 
export default function Salaries(){

    
  
      const employees=['عزيز الضبري','ياسين مياس','ابو مبارك','ليث عزيز','محمد عزيز','غيث عزيز','مبارك علي']
    
      const options =employees && employees.map(item => ({
        value: item,
        label: item
      }));
    
      
    
      
    
      const customStyles = {
        container: (provided) => ({
          ...provided,
          fontSize: '22px',
          minWidth: '200px', 
           borderLeft: '7px solid green',  // تخصيص الحدود اليسرى
          borderRight: '7px solid green', // تخصيص الحدود اليمنى
          borderTop: '2px solid gray',             // إزالة الحدود العلوية (اختياري)
          borderBottom: '2px solid gray',          // إزالة الحدود السفلية (اختياري)
          boxShadow: 'none',             // إيقاف تأثير الظل الافتراضي
          '&:hover': {
            borderLeft: '5px solid darkred', // تخصيص الحدود اليسرى عند التمرير
            borderRight: '5px solid darkred', // تخصيص الحدود اليمنى عند التمرير
          }
        }),
        menu: (provided) => ({
          ...provided,      
          fontSize: '19px',
          zIndex: 9999,  // لتحديد قيمة z-index
    
         
        }),
        menuList: (provided) => ({
          ...provided,
          maxHeight: '200px', // تحديد الحد الأقصى لارتفاع القائمة
          overflowY: 'auto',  // تفعيل التمرير إذا تجاوزت القائمة الحد الأقصى
        }),
        
         
      };
 
    
  
    
  
    return(
        <div className="w-100  border  border-primary   col-12 col-lg-12 col-md-12 col-sm-12  "
        style={{}}>
            <div className="w-100 d-flex  col-12 col-lg-12 col-md-12 col-sm-12   flex-column  ">
                <div className="d-flex    w-75   fs-3     text-center align-items-center justify-content-center gap-5 "
                style={{height:'50px'}}>
                    <Link to='#' className="link m-0  ">رجوع</Link>
                    <Link to='#'className="link m-0  ">عرض كل الموظفين</Link>                    
                </div>
                <div className="  mt-3  w-100    fs-5 col-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center gap-lg-4 align-items-center justify-content-center  flex-wrap">                                     
                            <Form.Group   className="d-flex  col-lg-5 col-md-5 col-sm-11  col-12   p-2 flex-wrap align-items-center justify-content-center" >
                                    <Form.Label  className="  col-6 col-lg-3 col-md-4 col-sm-4 m-0 col-md-3"   > اسم الموظف </Form.Label>
                                    <Col lg={9} sm={8} xs={12} md={12} >
                                    <Select className='w-100   '
                                   name='document_type'                                                
                          // onChange={(e)=> setForm({...form, document_type:e })}
                              options={options}                                                           
                              placeholder="اختر الموظف "
                            styles={customStyles}
                           required
                          >
                            
                          </Select> 
                                    </Col>
                           </Form.Group>                   
                            <Form.Group   className="d-flex  col-lg-5 col-md-5 col-sm-11  col-12  p-2 flex-wrap align-items-center justify-content-center" >
                                    <Form.Label  className="  col-6 col-lg-3 col-md-4 col-sm-4 m-0 col-md-3"   > الراتب الأساسي  </Form.Label>
                                    <Col lg={9} sm={8} xs={12} md={12} >
                                      <Form.Control  className="p-2"
                                          
                                          type="number" >                        
                                      </Form.Control>
                                    </Col>
                           </Form.Group>                   
                  
 
                </div>
                <div className="    w-100    fs-5 col-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center gap-lg-4 align-items-center justify-content-center  flex-wrap">                                     
                            <Form.Group   className="d-flex  col-lg-5 col-md-5 col-sm-11  col-12   p-2 flex-wrap align-items-center justify-content-center" >
                                    <Form.Label  className="  col-6 col-lg-3 col-md-4 col-sm-4 m-0 col-md-8"   > البريد الالكتروني</Form.Label>
                                    <Col lg={9} sm={8} xs={12} md={12} >
                                      <Form.Control  className="p-2"                                         
                                          type="email" >                        
                                      </Form.Control>
                                    </Col>
                           </Form.Group>                   
                            <Form.Group   className="d-flex  col-lg-5 col-md-5 col-sm-11  col-12  p-2 flex-wrap align-items-center justify-content-center" >
                                    <Form.Label  className="  col-6 col-lg-3 col-md-4 col-sm-4 m-0 col-md-8">    الاستقطاعات</Form.Label>
                                    <Col lg={9} sm={8} xs={12} md={12} >
                                      <Form.Control  className="p-2"
                                          
                                          type="number" >                        
                                      </Form.Control>
                                    </Col>
                           </Form.Group>                   
                  
 
                </div>
                <div className="    w-100       fs-5 col-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center gap-lg-4 align-items-center justify-content-center  flex-wrap">                                     
                            <Form.Group   className="d-flex  col-lg-5 col-md-5 col-sm-11  col-12   p-2 flex-wrap align-items-center justify-content-center" >
                                    <Form.Label  className="  col-6 col-lg-3 col-md-4 col-sm-4 m-0 col-md-8  "   > بدل سفر</Form.Label>
                                    <Col lg={9} sm={8} xs={12} md={12} >
                                      <Form.Control  className="p-2"                                         
                                          type="number" >                        
                                      </Form.Control>
                                    </Col>
                           </Form.Group>                   
                            <Form.Group   className="d-flex  col-lg-5 col-md-5 col-sm-11  col-12  p-2 flex-wrap align-items-center justify-content-center" >
                                    <Form.Label  className="  col-6 col-lg-3 col-md-4 col-sm-4 m-0 col-md-8"   >   بدل مواصلات</Form.Label>
                                    <Col lg={9} sm={8} xs={12} md={12} >
                                      <Form.Control  className="p-2"
                                          
                                          type="number" >                        
                                      </Form.Control>
                                    </Col>
                           </Form.Group>                   
                  
 
                </div>
                <div className="    w-100       fs-5 col-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center gap-lg-4 align-items-center justify-content-center  flex-wrap">                                     
                            <Form.Group   className="d-flex  col-lg-5 col-md-5 col-sm-11  col-12   p-2 flex-wrap align-items-center justify-content-center" >
                                    <Form.Label  className="  col-6 col-lg-3 col-md-4 col-sm-4 m-0 col-md-8  "   > بدل الطعام</Form.Label>
                                    <Col lg={9} sm={8} xs={12} md={12} >
                                      <Form.Control  className="p-2"                                         
                                          type="number" >                        
                                      </Form.Control>
                                    </Col>
                           </Form.Group>                   
                            <Form.Group   className="d-flex  col-lg-5 col-md-5 col-sm-11  col-12  p-2 flex-wrap align-items-center justify-content-center" >
                                    <Form.Label  className="  col-6 col-lg-3 col-md-4 col-sm-4 m-0 col-md-8"   >   بدل المخاطر</Form.Label>
                                    <Col lg={9} sm={8} xs={12} md={12} >
                                      <Form.Control  className="p-2"
                                          
                                          type="number" >                        
                                      </Form.Control>
                                    </Col>
                           </Form.Group>                   
                  
 
                </div>
                <div className="    w-100       fs-5 col-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center gap-lg-4 align-items-center justify-content-center  flex-wrap">                                     
                            <Form.Group   className="d-flex  col-lg-5 col-md-5 col-sm-11  col-12   p-2 flex-wrap align-items-center justify-content-center" >
                                    <Form.Label  className="  col-6 col-lg-3 col-md-4 col-sm-4 m-0 col-md-8  "   > بدل سفر</Form.Label>
                                    <Col lg={9} sm={8} xs={12} md={12} >
                                      <Form.Control  className="p-2"                                         
                                          type="number" >                        
                                      </Form.Control>
                                    </Col>
                           </Form.Group>                   
                            <Form.Group   className="d-flex  col-lg-5 col-md-5 col-sm-11  col-12  p-2 flex-wrap align-items-center justify-content-center" >
                                    <Form.Label  className="  col-6 col-lg-3 col-md-4 col-sm-4 m-0 col-md-8"   >   بدل مواصلات</Form.Label>
                                    <Col lg={9} sm={8} xs={12} md={12} >
                                      <Form.Control  className="p-2"
                                          
                                          type="number" >                        
                                      </Form.Control>
                                    </Col>
                           </Form.Group>                   
                  
 
                </div>
                <div className="    w-100       fs-5 col-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center gap-lg-4 align-items-center justify-content-center  flex-wrap">                                     
                            <Form.Group   className="d-flex  col-lg-5 col-md-5 col-sm-11  col-12   p-2 flex-wrap align-items-center justify-content-center" >
                                    <Form.Label  className="  col-6 col-lg-3 col-md-4 col-sm-4 m-0 col-md-8  "   > بدل السكن</Form.Label>
                                    <Col lg={9} sm={8} xs={12} md={12} >
                                      <Form.Control  className="p-2"                                         
                                          type="number" >                        
                                      </Form.Control>
                                    </Col>
                           </Form.Group>                   
                            <Form.Group   className="d-flex  col-lg-5 col-md-5 col-sm-11  col-12  p-2 flex-wrap align-items-center justify-content-center" >
                                    <Form.Label  className="  col-6 col-lg-3 col-md-4 col-sm-4 m-0 col-md-8"   >   صافي الراتب  </Form.Label>
                                    <Col lg={9} sm={8} xs={12} md={12} >
                                      <Form.Control  className="p-2"
                                          
                                          type="number" >                        
                                      </Form.Control>
                                    </Col>
                           </Form.Group>                   
                  
 
                </div>
                
             


              

              <div className="w-100 border text-center gap-4">
                <button className="btn btn-primary m-3">حفظ</button>
                <button className="btn btn-primary">إلغاء</button>
              </div>
                 
           

            </div>
        </div>
        
    )
}