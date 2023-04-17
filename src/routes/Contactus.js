import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contactus.css";

function Contactus()
{
    
    return (
        <>
        <Navbar/>
            <div className="contact-container-contactus">
                <div className="form-container-contactus">
                    <h3>Contact us</h3>  
                    <form action="" className="contact-form-contactus">
                      <input type="text" placeholder="Your Name" required></input>
                      <input type="email" name="" id="" placeholder="Enter Your Email..." required></input>
                      <textarea name="" id="" cols="30" rows="10" placeholder="Write Message Here..." required></textarea>
                      <input type="submit" value="Send" className="send-button"></input>
                    </form>
                </div>                
            </div>
        <Footer/>
        </>
    );
}

export default Contactus;