import React from 'react';


function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src="https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg" alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Gintaras Motuzas</span></h4>
                <p className="about-text">
                    I am an full stack developer. I have experience in back end ,front end and Database development. Recently i have started my hands on web technologies e.g. Angular, node.js, react etc along with expanding my tech horizon into Javascript. Here you can see my tech projects.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Gintaras Motuzas</p>
                        <p>: 31</p>
                        <p>: Lithuanian</p>
                        <p>: Lithuanian, English, Russian</p>
                        <p>: Vilnius, Lithuania</p>
                     </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
