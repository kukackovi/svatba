import Lottie from "lottie-react";
import bird from "./bird.json";


const GettingReadyPage = () => {

    return <>
        <Lottie animationData={bird} loop={true} />
        <h2>Kukačky pro vás již připravují obsah!</h2>
        <p>Brzdy zde najdete všechny organizační informace.</p>
        </>;
}

export default GettingReadyPage;