import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import pp from "../images/BA.png"

function Zint10(){
    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-3">                
                <img src={pp} class="char-img"/>
            </div>
            <div class="col-lg-9 mt-5 mt-lg-0">
                <h2>Ba</h2>
                <p class="">The "ba" symbol represents the soul and personality of a person.</p>
            </div>
        </div>
    </div>

        </>
);
};

export default Zint10;