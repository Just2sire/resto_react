
const Banner = ({offres}) => {
    
    return ( 
        <section className="banner">

            <div className="row-banner">
            {
                offres ?
                    <div className="content">
                    
                        <span>{offres.specialOffre}</span>
                        <h3>{offres.food1}</h3>
                        <p>{offres.food2}</p>
                        <a href="/" className="btn">Commander</a>
                     
                     </div> 
                : <h3 style={{textAlign: "center"}}>Loading...</h3> 
            }
                
            </div>

            <div className="grid-banner">
                {
                    offres ?
                    (offres.otherOffre).map(({nom, reduct, img}, id) => (

                        <div key={id} className="grid">
                            <img src={img} alt="" />
                            <div className="content">
                                <span>{nom}</span>
                                <h3>{reduct}</h3>
                                <a href="/" className="btn">Commander</a>
                            </div>
                        </div>

                    )) : <h3 style={{textAlign: "center"}}>Loading...</h3>
                }
            </div>

        </section>
     );
}
 
export default Banner;