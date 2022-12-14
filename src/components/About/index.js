import React from 'react';
import avatar from "../../assets/avatar/mypic.jpg"

function About () {

    return (
        <section className=''>
            <div className='about'>
            <h1 className="mb-5 mt-3 d-flex justify-content-center">My name is Chris</h1>
                <div className='d-flex col-12 justify-content-center'>
                    <img
                        className="avatar mt-auto d-flex justify-content-center"
                        src={avatar}
                        alt="Chris Hodges"
                    ></img>
                </div>
                <p className="col-md-6 col-sm-8 about-text ">
                    I built this webpage to showcase my web-development portfolio.
                    I enjoy coding and am always eager to learn more!
                </p>
            </div>
        </section>
    )
}

export default About;