import React from 'react'
import '../CSS/Footer.css'
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-1'>
            <div className='ft'>
                <h5>Support</h5>
                <p><a href=''>Help Center</a></p>
                <p><a href=''>AirCover</a></p>
                <p><a href=''>Supporting people with disabilities</a></p>
                <p><a href=''>Cancellation options</a></p>
                <p><a href=''>Our COVID-19 Response</a></p>
                <p><a href=''>Report a neighborhood concern</a></p>
            </div>
            <div className='ft'>
                <h5>Community</h5>
                <p><a href=''>Airbnb.org: disaster relief housing</a></p>
                <p><a href=''>Combating discrimination</a></p>
                
            </div>
            <div className='ft'>
                <h5>Hosting</h5>
                <p><a href=''>Airbnb your home</a></p>
                <p><a href=''>AirCover for Hosts</a></p>
                <p><a href=''>Explore hosting resources</a></p>
                <p><a href=''>Visit our community forum</a></p>
                <p><a href=''>How to host responsibly</a></p>
                <p><a href=''>Airbnb-friendly apartments</a></p>
            </div>
            <div className='ft'>
                <h5>Airbnb</h5>
                <p><a href=''>Newsroom</a></p>
                <p><a href=''>Learn about new features</a></p>
                <p><a href=''>Letter from our founders</a></p>
                <p><a href=''>Careers</a></p>
                <p><a href=''>Investors</a></p>
                <p><a href=''>Gift cards</a></p>
            </div>
        </div>
        <hr />
        <div className='footer_buttom'>
            <div className='footer_left'>
                <p>© 2023 Airbnb, Inc.</p>
                <p><a>Terms</a></p>
                <p><a>Sitemap</a></p>
                <p><a>Privacy</a></p>
                <p><a>Privacy</a></p>
                <p><a>Your Privacy Choices</a></p>
            </div>
            <div className='footer_right'>
                <LanguageIcon />
                <h5>English(US) </h5>
                <p>$ USD</p>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
            </div>
        </div>
    </div>
  )
}
