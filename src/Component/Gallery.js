import React from 'react'
import '../CSS/Gallery.css'
import StarIcon from '@mui/icons-material/Star';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PublishIcon from '@mui/icons-material/Publish';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Gallery() {
  return (
    <div className='gallery'>
        <h2>Enjoy historic Valencia and close to the beach.</h2>
        <div className='gallery_content'>
            <div className='sub_hadding_left'>
                <StarIcon />
                <p>4.87 - <a href=''>171 reviews</a> - </p>
                <MilitaryTechIcon />
                <p><a href=''>superhost . Valencia,Spain</a></p>
            </div>
            <div className='sub_hadding_right'>
                <PublishIcon />
                <p style={{paddingLeft:"5px",paddingRight:"10px"}}><a href=''>Share</a></p>
                <FavoriteBorderIcon />
                <p style={{paddingLeft:"5px",paddingRight:"10px"}}><a href=''>Save</a></p>
            </div>
        </div>
        <div class="parent-div">
            <div class="first-image">
                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=960" alt="First Image" />
            </div>
            <div class="other-images">
                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/90d22704-7f1a-44ad-924a-ecbdbb666db0.jpeg?im_w=720" />
                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/b7c698e2-6d20-4d2a-a933-4c3f9e36eac4.jpeg?im_w=720" alt="Image 2" />
                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/7fa4060d-60c1-44b0-921b-6958e7b200f1.jpeg?im_w=720" />
                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/2f6537e4-cd4f-44e1-8acb-6bf77011b0e5.jpeg?im_w=720" alt="Image 4" />
            </div>
        </div>
    </div>
  )
}
