const About = ({about}) => {
    return ( 
        <section className="about" id="about">

            <div className="image">
                <img src="image/about-img.png" alt="" />
            </div>

            <div className="content">
                <span>why choose us?</span>
                <h3 className="title">what's make our food delicious!</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut explicabo, numquam iusto est a ipsum
                    assumenda tempore esse corporis?
                </p>
                <a href="/" className="btn">read more</a>
                <div className="icons-container">
                    {
                        about ?
                        about.map(({img, msg}, id) => (
                            <div className="icons" key={id}>
                                <img src={img} alt="" />
                                <h3>{msg}</h3>
                            </div>
                        ))
                        : <h3 style={{textAlign: "center"}}>Loading...</h3>
                    }
                </div>
            </div>

        </section>
    );
}
 
export default About;