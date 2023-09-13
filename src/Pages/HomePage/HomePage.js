import React from "react";

import StartPage from "./StartPage/StartPage";
import ShopByRoom from "./ShopByRoom/ShopByRoom";
import Bestsellers from "./Bestsellers/Bestsellers";

function HomePage() {

    return (
        <main>
            <StartPage/>
            <ShopByRoom/>
            <Bestsellers/>
        </main>
    )
}

export default HomePage;