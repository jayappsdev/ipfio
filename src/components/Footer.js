import React from "react";
import "./FooterStyles.css"

const Footer = () =>{
    return(
        <footer>
            <div className="footer-content">
                <h3>ipfio.org</h3>
                <p>Find a geolocation of your IP address including latitude, longitude, city, region and country. Built by developers for developers.</p>
                <ul className="socials">
                    <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-discord"></i></a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>Copyright &copy;2023 ipfio.org. Designed by <span>JaySoftware</span></p>
            </div>
        </footer>
    )
}

export default Footer