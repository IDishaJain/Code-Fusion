// import React from 'react'
// import blob from '../../assets/blobanimation.svg'

// function LandingPage() { 
//   return ( 
//     <div className="landingContainer container">
//     <img src={blob} alt="" className='blob_a blob1' />
//     <img src={blob} alt="" className='blob_a blob2' />
//         <div className="landingInfo">
//             <h1>CodeFusion</h1>
//             <p>Eat, Sleep, Code, Repeat</p>
//         </div>
//     </div>
//   )
// }

//  export default LandingPage
import React from 'react';
import humanCoder from '../../assets/human-coder3.png';
function LandingPage() {
  return (
    <div className="landingContainer container relative min-h-screen bg-background-color">
      {/* Two human coder images at top right and bottom left */}
      <img src={humanCoder} alt="Human coder" className="topRightBlob" />
      <img src={humanCoder} alt="Human coder" className="bottomLeftBlob" />
      <div className="landingInfo text-center pt-24 z-10 relative">
        <h1 className="text-5xl font-bold mb-4 text-main-color">CodeFusion</h1>
        <p className="text-xl text-primary-text-color">Eat, Sleep, Code, Repeat</p>
      </div>
    </div>
  );
}

export default LandingPage;
