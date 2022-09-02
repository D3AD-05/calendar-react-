import React from "react";

function Header({onNextClick, onPrvClick,dateDisplay}) {

    return (
        <>
        
            <button onClick={onPrvClick} >prv </button>
            <div className="day">{dateDisplay}</div>
            <button onClick={onNextClick}  >  next  </button>
        </>
    )
}
export default Header;