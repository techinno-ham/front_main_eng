"use client"


import "./Modal.css";

import { useEffect, useState } from "react";
import useSelectModal from "./hooks/useSelectModal.ts";
import { CloseSquare } from "iconsax-react";


const SelectModalCustom=()=>{

    const SelectModal = useSelectModal(); 
    const [selectedUrls, setSelectedUrls] = useState([]);
    const [selectError, setSelectError] = useState('');

    const handleCheckboxChange = (url:any) => {
      if (selectedUrls.includes(url)) {
        setSelectedUrls(selectedUrls.filter(selectedUrl => selectedUrl !== url));
      } else {
        setSelectedUrls([...selectedUrls, url]);
      }
    };
    const handleClsoeModal=()=>{
     
    };
    const handleSubmit=()=>{
      if(selectedUrls.length==0){
        setSelectError("لطفا حداقل یک لینک را انتخاب کنید")
        return
      }
 
          SelectModal.onClose();
          SelectModal.resetUrls();
          setSelectedUrls([])
 
    }

    useEffect(()=>{
      setSelectError("")
    },[selectedUrls])
    
  

    return(
      <div id="modal-container" className={SelectModal.isOpen === null ? "" : SelectModal.isOpen ? "one" : "one out"}>
        <div className="modal-background">
          <div className="modal">
            <button className="closeBtn" onClick={handleClsoeModal}>
            <CloseSquare size={22}/>
            </button>
            <h2>بررسی صفحات</h2>
            <hr className="custom-hr" />
            <p>صفحات مورد نظرتان را برای بررسی دیتا انتخاب کنید؟</p>
            <div className="urlBox">
            {SelectModal.urls.map((url, index) => (
              <div key={index} >
                <input
                  type="checkbox"
                  id={`url-${index}`}
                  onChange={() => handleCheckboxChange(url)}
                  checked={selectedUrls.includes(url)}
                  className="inputCheck"
                />
                <label htmlFor={`url-${index}`} className="labelUrl">{url}</label>
              </div>
            ))}

            </div>
            { selectError && <p style={{fontSize:"12px"}}>{selectError}</p>} 
            <button className="sumbitBtn" onClick={handleSubmit}>بررسی اطلاعات</button>
          
          
         
           
          </div>
        </div>
      </div>
    )

}

export default SelectModalCustom;