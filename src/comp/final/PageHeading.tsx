import React from "react";
import Lottie from "lottie-react";
import couple from "./couple.json"

const PageHeading = () => {

    return <>
        <div className="heading">
            <h2>Zveme vás na svatbu!</h2>
            <p>a zde naleznete vše co vás zajímá.</p>
        </div>
        
        <Lottie animationData={couple} loop={false} />
    </>

}

export default PageHeading;