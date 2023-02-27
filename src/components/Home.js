import { Footer } from "./Footer";
import { HomeBanner } from "./HomeBanner";
import { OneStopSolution } from "./OneStopSolution";
import { WhyUs } from "./WhyUs";

export const Home = () => {
    return(
        <>
            <HomeBanner/>
            <WhyUs/>
            <OneStopSolution/>
            <Footer/>
        </>
    );
}