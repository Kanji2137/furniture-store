import React from "react";

import StartPage from "./StartPage/StartPage";
import ShopByRoom from "./ShopByRoom/ShopByRoom";
import Bestsellers from "./Bestsellers/Bestsellers";
import Trends from "./Trends/Trends";

function HomePage() {

    return (
        <main>
            <StartPage/>
            <ShopByRoom/>
            <Bestsellers/>
            <Trends/>
        </main>
    )
}

export default HomePage;