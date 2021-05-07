import React, {useEffect} from 'react'
import IntroAnimation from "../components/IntroAnimation"

const Intro = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "./script.js";
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
      }, []);
  
    return (
        <>
           <h1> Hello World</h1>
           <button> Enter </button>
           <IntroAnimation />
        </>
    )
}

export default Intro
