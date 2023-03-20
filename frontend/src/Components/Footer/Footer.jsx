import React from 'react'
import "./footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className='Footer'>
        <footer>
            <div class="footer">
                <div class="row row-icon">
                    <a href="#"><FacebookIcon fontSize='large'/></a>
                    <a href="#"><InstagramIcon fontSize='large'/></a>
                    <a href="#"><YouTubeIcon fontSize='large'/></a>
                    <a href="#"><TwitterIcon fontSize='large'/></a>
                </div>

                <div class="row">
                    <ul>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                </div>

                <div class="row">
                    VEDICHEAL Copyright © 2023 CureCrafter - All rights reserved || Designed By: CureCrafter 
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
