import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
// import Carousel from "../Components/carousel";
import AllProjects from "../Components/projectCards";

function ProjectGallery() {
    return (
        <div>
            <Navbar active={"projectGallery"} />
            {/* All notable projects in a carousel */}
            {/* <Carousel /> */}
            <div className="website-container-div">
                <div id="gallery" className="container-div">
                    <h1>Project Gallery</h1>
                    <p>A list of every project I've completed for my West MEC class</p>
                </div>

            </div>
            {/* All projects ever */}
            <AllProjects />
            <Footer newPosition={"relative"} />
        </div>
    )
}

export default ProjectGallery
