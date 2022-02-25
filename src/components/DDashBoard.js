import React from 'react';

const DDashboard = () => {
  return <>
    <div className='container'>
        <h1 style={{"fontSize":"70px","textAlign":"center","marginTop":"150px"}}><b>Varieties Provided for Dinner</b></h1>
        <img src="./images/bgCircle.png" style={{"position":"absolute","top":"30%","left":"20%"}}/>
        <img src="./images/bgCircle.png" style={{"position":"absolute","top":"30%","left":"45%"}}/>
        <img src="./images/bgCircle.png" style={{"position":"absolute","top":"30%","left":"70%"}}/>
        <img src="./images/bgCircle.png" style={{"position":"absolute","top":"60%","left":"33%"}}/>
        <img src="./images/bgCircle.png" style={{"position":"absolute","top":"60%","left":"60%"}}/>
        <img src="./images/dinner2.png" style={{"position":"absolute","top":"30%","left":"19%","width":"210px","height":"210px"}}/>
        <img src="./images/dinner3.png" style={{"position":"absolute","top":"30%","left":"44%","width":"210px","height":"210px"}}/>
        <img src="./images/dinner4.png" style={{"position":"absolute","top":"30%","left":"69%","width":"210px","height":"210px"}}/>
        <img src="./images/dinner5.png" style={{"position":"absolute","top":"60%","left":"32%","width":"210px","height":"210px"}}/>
        <img src="./images/dinner6.png" style={{"position":"absolute","top":"60%","left":"59%","width":"210px","height":"210px"}}/>
        <h3 style={{"position":"absolute","top":"80%","left":"70%","width":"210px","height":"210px"}}><b>and many more...</b></h3>
        <button class="button__primary" style={{"position":"absolute","backgroundColor":"#F5C529","opacity":"0.8","top":"90%","left":"48%","padding":"1rem 2rem","fontSize":"120%","textAlign":"center","color":"black","borderRadius":"25px "}}><a>Get Started!!</a></button>

    </div>
  </>
};

export default DDashboard;
