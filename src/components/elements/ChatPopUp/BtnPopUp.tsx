import React, { useState } from 'react'
import { FaFacebookMessenger } from "react-icons/fa"

const BtnPopUp = (props: any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{position: "fixed", bottom: "24px", right: "150px", 
    zIndex: "100"}}>
        <div      
                  onKeyDown={() => setHovered(true)}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  onClick = {() => props.onClick && props.onClick()}
                  style={{
                    cursor: "pointer",  
                    borderRadius: '50%',
                    paddingTop: "25px",
                    fontSize: "20px",
                    ...{color: hovered ? "blue" : ""}
                }}
          >
            <FaFacebookMessenger fontSize={70}/>
          </div>
    </div>
  )
}

export default BtnPopUp;