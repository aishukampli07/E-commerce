// import React from 'react'
// // import Hero from '../Components/Hero/Hero'
// import './Hero.css'
// import hand_icon from '../Assets/hand_icon.png'
// import arrow_icon from '../Assets/arrow.png'
// import hero_imae from '../Assets/hero_image.png'
// const  Hero =  ()=> {
//   return (
//     <div className='hero'>
      
//       <div className='hero-left'>
//          <h2>NEW ARRIVALS ONLY</h2>
//          <div>
//           <div className='hand-hand-icon'>
//             <p>new</p>
//             <img src={hand_icon} alt=''/>
//           </div>
//           <p>collections</p>
//           <p>for everyone</p>
//          </div>
//          <div className='hero-latest-btn'>
//           <div>Latest Collections</div>
//           <img src={arrow_icon} alt=''></img>
//          </div>
//       </div>
//       <div className='hero-right'>
//         <img src={hero_imae} alt=''/>

//       </div>
//     </div>
//   )
// }


// export default Hero


import React from 'react'
import arrow_icon from '../Assets/arrow.png'
import hand_icon from '../Assets/hand_icon.png'
import hero_imae from '../Assets/hero_image.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hand-hand-icon'>
                    <p>new</p>
                    <img src={hand_icon} alt=''/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>latest collections</div>
                <img src={arrow_icon} alt=''/>
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_imae} alt=''/>
        </div>
      
    </div>
  )
}

export default Hero
