import React from "react";
import '../css/cctv.css';
function CCTV(){

    return(
        <div className="container">
          <img src="http://172.20.10.6:8081" //라즈베리 카메라 연동 테스트때 썼던 ip 
          className="cctvImage"
            />
        </div>
    )
    
}

export default CCTV;