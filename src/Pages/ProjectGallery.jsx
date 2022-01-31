import React from "react";
import Navbar from "../Components/navbar";
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
                <div className="contact-container-div">
                    <h1>Project Gallery</h1>
                </div>

            </div>
            {/* All projects ever */}
            <AllProjects />
            <Footer newPosition={"relative"} />
        </div>
    )
}

export default ProjectGallery
