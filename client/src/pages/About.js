import React, { useState } from 'react';

export default() => {

    
    return (
        <>
        <div className="row-flex-wrap aboutMe">
            <div className="col-md-6 images profile-pic-flex-wrap">
                <img src="assets/images/profile_sketch.png" dataHover="assets/images/profile.png" width="400" height="400" className="img-fluid float-left images" alt="Inbar's Profile photo" 
                // style="position: relative; padding-right: 30px; z-index:1;" 
                />
            </div>
            <div className="col-md section scrollspy" id="about">
                <h4> A little bit about me...</h4>
                <p>I enjoy creating! Weather it is graphics, training videos, or working on complex solutions for businesses.</p> 
                <p>I am a seasoned e-commerce specialist, PM Director, graphic designer and web-developer.</p>
                <h5>Check Me Out!</h5>  
                <h4><a href="https://www.linkedin.com/in/inbar-amber-shucker/" className="tooltipped" data-position="top" data-tooltip="LinkedIn!"><i className="fab fa-linkedin-in fa-2x"></i></a>      
                <a href="https://github.com/inbary-s" className="tooltipped" data-position="top" data-tooltip="GitHub!"> <i className="fab fa-github fa-2x"></i></a>  
                <a href="assets/inbar2020.pdf" target="blank" alt="Resume"className="tooltipped" data-position="top" data-tooltip="My Resume!" margin="10"><i className="fas fa-file fa-2x"></i></a></h4>
                <p>Don’t hesitate to contact me! Together we can make anything happen!</p>
            </div>
        </div>
        </>
    )
}