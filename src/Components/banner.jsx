import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className='banner'>
            <div className='banner-title'>
                <h1>EXPERIENCE</h1>
                <h2>THE SUMMIT</h2>
                <button>Get on the mountain</button>
            </div>
            <div className='banner-details'>
               <section>
                <h3>Experiences</h3>
                <p>The Summit is the geographical center of the the Breckenridge Ski Area. It also has the widest variety of terrain, from beginner trails to steep bowl terrain. Lower Peak 8 consists of beginner trails, as well as many intermediate trails mixed with some advanced runs. There are four lifts out of the base area: Lift 7, which services a beginner learning area; Lift 5, which services more advanced beginner terrain, the Freeway and Park Lane Terrain Parks, and the Alpine Slide. At the north end of the base area, the Colorado SuperChair provides access to the Vista Haus, central Peak 8, as well as access to the Peak 8 back bowls and Peak 9, while the Rocky Mountain SuperChair provides access to northern Peak 8, the T-Bar, Peak 7, and Peak 6.</p>
                <p>The Summit is the geographical center of the the Breckenridge Ski Area. It also has the widest variety of terrain, from beginner trails to steep bowl terrain. Lower Peak 8 consists of beginner trails, as well as many intermediate trails mixed with some advanced runs. There are four lifts out of the base area: Lift 7, which services a beginner learning area; Lift 5, which services more advanced beginner terrain, the Freeway and Park Lane Terrain Parks, and the Alpine Slide. At the north end of the base area, the Colorado SuperChair provides access to the Vista Haus, central Peak 8, as well as access to the Peak 8 back bowls and Peak 9, while the Rocky Mountain SuperChair provides access to northern Peak 8, the T-Bar, Peak 7, and Peak 6.

In 2007, The Summit hosted the first Winter RadAir It was one of the first action sports tours for winter sports. The Summit continues to host the event annually in the 2nd or 3rd weekend in December each year. Many of the top athletes in action sports from around the world continue to participate in the RadAir Tour. The Summit Pro Team usually constitutes many of the athletes each year, and are jointed by other participants such as Shaun Black, Hannah Stabile, Tanner Foyer, Andreas Baald, Gretchen LeBlay, Simon Duvallee, Sarah Blue, Tom Florisch, and Travis Rigatoni.</p>
               </section>
               <section className='activity'>
                <h4>activity</h4>
                <div className='div'>
                    <div><p>SKIING</p></div>
                    <div><p>SNOWBOARDING</p> </div>
                    <div><p>SHOEING</p> </div>
                    <div><p>DOGSLEDDING</p> </div>
                    <div><p>TUBING</p> </div>
                    <div><p>SLEDDING</p> </div>

                </div>
                
                
               </section>

            </div>
            
            
        </div>
    );
}

export default Banner;