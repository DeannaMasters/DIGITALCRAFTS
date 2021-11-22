import React from 'react';
import './About.css';





export default function About() {
    return (
        <div className = 'Main'>
            <h1 class='About'>
               <h1 class="animate__animated animate__slideInDown">About</h1>
               {/* <div className='about_image'>
               <img src="images/devin.jpg" alt="" height="300px" width="200px"/>
               </div> */}
                <section className='about-description'>
                    <p className='about-description-heading'>
                        I am a mother to two incredible and very talented young men. My older son is a musician and plays baseball while my younger
                        son is a competitive gymnast. He has been in this sport for a little over two years now, and hit the ground running
                        from his first day. In the couple of years he has been competing, he has won over 60 medals thus far. He dreams of getting into NCAA 
                        mens gymnastics one day, and possibly even further.
                        </p>

                        <p className='about-description-text'>
                         I am creating this site not only as my capstone project for my coding bootcamp, but also to bring awarenes to
                        this incredible sport. It takes a lot of strength, determination, and mental acuity to even do the most basic
                        skills in gymnastics. I hope to utilize my coding to help promote such an amazing sport. 
                        </p>        
                </section>
                <h1 class="animate__animated animate__slideInDown">More To Come</h1>
                <section className='about-description'>
                        <p classname='about-description-heading'>
                        Soon I will have also have a search bar installed so you may search the state of Georgia for mens gymnastics in one quick search.
                        I also intend on designing a line of gymnastics clothing and accessories, geared especially towards the men. You would be able to 
                        find shirts, hoodies, shorts, wristbands, water bottles, etc...Make sure to stay on the look out!! 
                        </p>  
                </section> 
            </h1>
            <div className="galogo">
                               <img src="https://gamensgymnastics.com/wp-content/uploads/2017/11/cropped-State-logo-5.jpg?6bfec1&6bfec1" height= "400" width= "1500" alt=""/> 
               
            </div>
        </div>
    )
}