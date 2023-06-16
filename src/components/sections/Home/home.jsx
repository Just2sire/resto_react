import { useEffect, useRef } from 'react';
import img1 from '../../../image/home-img.png';
import img2 from '../../../image/home-parallax-img.png';
const Acceuil = () => {
    const homeRef = useRef(null);
    useEffect(() => {
        let img = homeRef.current;
        const handleMouseMove = (e) => {
          let x = (window.innerWidth - e.pageX * 2) / 90;
          let y = (window.innerHeight - e.pageY * 2) / 90;
    
          document.querySelector('.home .home-parallax-img').style.transform = `translateX(${y}px) translateY(${x}px)`;
        };
    
        const handleMouseLeave = () => {
          document.querySelector('.home .home-parallax-img').style.transform = `translateX(0px) translateY(0px)`;
        };
    
        img.addEventListener('mousemove', handleMouseMove);
        img.addEventListener('mouseleave', handleMouseLeave);
    
        return () => {
          img.removeEventListener('mousemove', handleMouseMove);
          img.removeEventListener('mouseleave', handleMouseLeave);
        };
      }, []);
    return ( 
        <>
            <section className="home" ref={homeRef} id="home">

                <div className="content">
                    <span>welcome foodies</span>
                    <h3>different spices for the different tastes 😋</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde dolores temporibus hic quam debitis
                        tenetur harum nemo.</p>
                    <a href="/" className="btn">order now</a>
                </div>

                <div className="image">
                    <img src={img1} alt="" className="home-img" />
                    <img src={img2} alt="" className="home-parallax-img" />
                </div>

            </section>

        </>
    );
}
 
export default Acceuil;