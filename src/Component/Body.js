import React,{ useState }  from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';  
import Avatar from '@mui/material/Avatar';
import '../CSS/Body.css'
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';
import double from '../image/double-bed.png';
import home from '../image/home.png'
import shower from '../image/shower.png'
import work from '../image/work-table.png'
import GTranslateIcon from '@mui/icons-material/GTranslate';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LightIcon from '@mui/icons-material/Light';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import bath from '../image/bath-tub.png';
import wifi from '../image/wifi.png';
import room from '../image/room.png';
import cutlery from '../image/cutlery.png';
import camera from '../image/security-camera.png'


export default function Body() {
    const [value, onChange] = useState(new Date());
  return (
    <div className='body'>
        <div className='body_titelCotent'>
            <div className='body_title'>
                <h2>Room in a rental unit hosted by Sagrario</h2>
                <Avatar alt="Remy Sharp" src="https://a0.muscache.com/im/pictures/user/b9c551db-9203-4f2c-9572-216ebe07e25c.jpg?im_w=240" />
            </div>
        </div>

        {/* flottind data start */}
        <div className='body_floting'>
                <div className='floting_title'>
                    <div className='ff'>
                        <h2>$37</h2>
                        <p>night</p>
                    </div>
                    <div className='ff' >
                        <StarIcon />
                        <p>4.87 -</p>
                        <p>171 reviews</p>
                    </div>
                </div>
                <div className='floting_date'>
                    <div className='fd-1'>
                        <p style={{width:'50%',borderRight:'none'}}> CHECK IN <br /> Add data </p>
                        <p style={{width:'50%'}}>CHECK OUT <br /> Add data</p>
                    </div>
                    
                    <div className='select'>
                        <select id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="vw">VW</option>
                            <option value="audi" selected>GUEST</option>
                        </select>
                    </div>
                    <div>
                        <Button style={{width:"99.5%",background:"#FF385C",marginTop:"15px",padding:'15px',borderRadius:'10px',color:'white',marginBottom:'20px'}} >Check availability</Button>
                    </div>
                </div>
        </div>
        
        {/* Flooting data End */}
        {/* body content start */}
        <div className='body_content'>
            <div className='ff-1'>
                <img src={double} alt='bad' />
                <p>1 double bed</p>
            </div>
            <div className='ff-1'>
                <img src={shower} alt='shower' />
                <p>Shared bathroom</p>
            </div>
            <div className='ff-1'>
                <img src={home} alt='shower' />
                <p>Host and other guests may be here</p>
            </div>
        </div>
        {/* body content End */}
        <hr style={{width:"60%"}} />

        <div className='zz'>
            <div className='zz-1'>
                <div className='zz-2'>
                    <img src={work} alt='work-table' />
                    <h4>Room in a rental unit</h4>
                </div>
                <p>Your own room in a home, plus access to shared spaces.</p>
            </div>
            <div className='zz-1'>
                <div className='zz-2'>
                    <img src={work} alt='work-table' />
                    <h4>Dedicated workspace</h4>
                </div>
                <p>A room with wifi that’s well-suited for working.</p>
            </div>
            <div className='zz-1'>
                <div className='zz-2'>
                    <img src={work} alt='work-table' />
                    <h4>Sagrario is a Superhost</h4>
                </div>
                <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
            </div>
        </div>
        <hr style={{width:"60%"}} />

        {/* start */}
        <div style={{marginTop:'30px',marginBottom:'30px',display:'flex',alignItems:'center'}} >
            <GTranslateIcon />
            <p style={{paddingLeft:'20px'}} >Some info has been automatically translated. <a style={{color:'black',fontWeight:'bold'}} href=''>Show original language</a></p>
        </div>
        <hr style={{width:"60%"}} />
        <div className='card'>
            <h2 style={{marginBottom:'30px'}}>Meet your host</h2>
            <div className='card_1'>
                <p style={{marginBottom:'40px'}}>.</p>
                <div className='card_profile'>
                    <div className='left'>
                        <img src='https://a0.muscache.com/im/pictures/user/b9c551db-9203-4f2c-9572-216ebe07e25c.jpg?im_w=240' />
                        <h1>Sagrario</h1>
                        <p>Superhost</p>
                    </div>
                    <div className='right'>
                        <h2>316</h2>
                        <p>Reviews</p>
                        <hr />
                        <span><h2>4.86 </h2> <StarIcon /></span>
                        <p>Rating</p>
                        <hr />
                        <h2>7</h2>
                        <p>years hosting</p>
                    </div>
                </div>
                <div className='card_details'>
                    <div className='cd-1'>
                        <BusinessCenterIcon />
                        <p>My work: coach</p>
                    </div>
                    <div className='cd-1'>
                        <EmojiObjectsIcon />
                        <p>Fun fact: No one believes my age</p>
                    </div>
                    <div className='cd-1'>
                        <AccessTimeIcon/>
                        <p>I spend too much time: Search for activities for guests</p>
                    </div>
                    <div className='cd-1'>
                        <LightIcon />
                        <p>For guests, I always: Help them enjoy Valencia</p>
                    </div>
                    <div className='cd-1'>
                        <AutoAwesomeIcon />
                        <p>What makes my home unique: Good energy and feeling at home</p>
                    </div>
                    <p style={{marginTop:'30px',marginBottom:'30px'}}>Open and communicative, with donation of people and happy to welcome friends from the world at home.</p>
                </div>
                <button style={{padding:"15px 30px 15px 30px", background:'black',color:'#fff',fontSize:'16px',borderRadius:'12px',marginLeft:'23%',marginBottom:"45px",cursor:'pointer'}}>Message Host</button>
                <br style={{margin:'auto'}} />
                <p style={{width:'60%',marginLeft:'23%',paddingBottom:'30px',fontSize:'14px',color:'#c3c0c0'}}>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
            </div>
        </div>
        {/* End */}
        <div style={{width:'60%'}} className='place'>
            <h3>About this place</h3>
            <div className='place_content'>
                <p>Nice and spacious room in the heart of Valencia, with double bed and a balcony. Silent because there is no traffic. Surrounded by all the landmarks , museums , cathedral , leisure, and close to the beach where you can go by bike, bus , tram or car if your means of transportation.
                <br />
                I would love to receive people wanting to enjoy my city and help in what I can .</p>
            </div>
            <p>...</p>
            <a href=''>Show more</a>
            <hr className='lineBreak' />
            {/* start */}
            <div className='ws'>
                <h2>Where you'll sleep</h2>
                <div className='ws-1'>
                    <img src={double} />
                    <h4>Bedroom</h4>
                    <p>1 double bed</p>
                </div>
            </div>
            {/* end */}
            <hr />
            {/* Start */}
            <div className='office'>
                <h2>What this place offers</h2>
                <div className='op'>
                    <div className='op_left'>
                        <div className='gg'>
                            <img src={work} />
                            <p>Lock on bedroom door</p>
                        </div>
                        <div className='gg'>
                            <img src={double} />
                            <p>Lock on bedroom door</p>
                        </div>
                        <div className='gg'>
                            <img src={shower} />
                            <p>Lock on bedroom door</p>
                        </div>
                        <div className='gg'>
                            <img src={work} />
                            <p>Lock on bedroom door</p>
                        </div>
                        <div className='gg'>
                            <img src={work} />
                            <p>Lock on bedroom door</p>
                        </div>
                    </div>
                    <div className='op_right'>
                        <div className='gg'>
                            <img src={bath} />
                            <p>Lock on bedroom door</p>
                        </div>
                        <div className='gg'>
                            <img src={wifi} />
                            <p>Lock on bedroom door</p>
                        </div>
                        <div className='gg'>
                            <img src={cutlery} />
                            <p>Lock on bedroom door</p>
                        </div>
                        <div className='gg'>
                            <img src={room} />
                            <p>Lock on bedroom door</p>
                        </div>
                        <div className='gg'>
                            <img src={camera} />
                            <p>Lock on bedroom door</p>
                        </div>
                    </div>
                </div>
                <button>Show all 37 amenities</button>
            </div>
            {/* End */}
            <hr />
            {/* Start */}
            <div className='calander'>
                <h2>Select checkout date</h2>
                <p>Minimum stay: 5 nights</p>
                <div style={{display:'flex', marginBottom:'40px'}} >
                    <div style={{paddingRight:'20px'}} className='calander-1'>
                        <div>
                            <Calendar onChange={onChange} value={value} />
                        </div>
                        
                    </div>
                    <div className='calander-2'>
                        <div>
                            <Calendar onChange={onChange} value={value} />
                        </div>
                        
                    </div>
                </div>
            </div>
            
            {/* end */}
            
        </div>
        <hr />
    </div>
  )
}
