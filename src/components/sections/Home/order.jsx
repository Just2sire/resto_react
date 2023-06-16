    const Order = () => {
        
        return ( 
            <section className="order" id="order">

                <div className="heading">
                    <span>Commander</span>
                    <h3>Livraison rapide</h3>
                </div>

                <div className="icons-container">

                    <div className="icons">
                        <img src="image/icon-1.png" alt="" />
                        <h3>07h à 20h</h3>
                    </div>

                    <div className="icons">
                        <img src="image/icon-2.png" alt="" />
                        <h3>+228 96952819</h3>
                    </div>

                    <div className="icons">
                        <img src="image/icon-3.png" alt="" />
                        <h3>Togo - Lomé</h3>
                    </div>

                </div>

                <form action="">

                    <div className="flex">
                        <div className="inputBox">
                            <span>Nom...</span>
                            <input type="text" placeholder="Votre name" name="" id="" />
                        </div>
                        <div className="inputBox">
                            <span>Votre numéro...</span>
                            <input type="number" placeholder="Votre numéro" name="" id="" />
                        </div>
                    </div>

                    <div className="flex">
                        <div className="inputBox">
                            <span>Votre commande</span>
                            <input type="text" placeholder="Le plat que vous désirez" name="" id="" />
                        </div>
                        <div className="inputBox">
                            <span>Nombre</span>
                            <input type="number" placeholder="Nombre de commande" name="" id="" />
                        </div>
                    </div>

                    <div className="flex">
                        <div className="inputBox">
                            <span>Autres détails</span>
                            <input type="text" placeholder="D'autres détails" name="" id="" />
                        </div>
                        <div className="inputBox">
                            <span>Date et heure de livraison</span>
                            <input type="datetime-local" />
                        </div>
                    </div>

                    <div className="flex">
                        <div className="inputBox">
                            <textarea placeholder="your address" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="inputBox">
                            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1634657187694!5m2!1sen!2sin" allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>

                    <input type="submit" value="Procéder à la commande" className="btn" />

                </form>

            </section>
        );
    }
    
    export default Order;