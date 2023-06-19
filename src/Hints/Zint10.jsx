import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import pp from "../images/OBELISK.png"

function zHint10(){
    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-3">                
                <img src={pp} class="char-img"/>
            </div>
            <div class="col-lg-9 mt-5 mt-lg-0">
                <h2>Obelisk</h2>
                <p class="">An upright stone pillar, the "obelisk" symbolizes power, majesty, and divine presence.</p>
            </div>
        </div>
    </div>

        </>
);
};

export default zHint10;