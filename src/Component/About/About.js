import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './About.css'
import Abouts from './images/newly-refurbished-in.jpg'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import NoMealsIcon from '@mui/icons-material/NoMeals';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import IcecreamIcon from '@mui/icons-material/Icecream';
import EmojiFoodBeverageTwoToneIcon from '@mui/icons-material/EmojiFoodBeverageTwoTone';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import avater1 from './images/gigifigigl .webp'
import avater2 from './images/images (1).jfif'
import avater3 from './images/images (2).jfif'
import avater4 from './images/images.jfif'
import logo1 from './images/131e7c03-f328-47b2-8.avif'
import logo2 from './images/fdc6b8015789e(2).png'
import logo3 from './images/logo-piccolo-sogno-ny.png'
import logo4 from './images/unnamed.png'
import logo from './images/Amedeo Ristorante.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const About = () => {
    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
      }      
    const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
    return (
        <div>
            <div className="about">
                <div className="AboutPages-1">
                    <h2>ABOUT US</h2><br />
                    <div className="us">
                    <Link to='/'>Home </Link><li>ABOUT US</li>
                    </div>
                </div>
                <div className="AboutPages-2">
                    <div className="about-2">
                        <img src={Abouts} alt="" />
                        <div className="about-usText-2">
                            <h1>About Our Restaurant</h1>
                            <h3>---- We offer the best Italian dishes in a <br /> friendty and calm atmosphere.</h3>
                             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, consequatur. Voluptatem eos, temporibus consequuntur iusto earum esse doloribus, fugit dolor fugiat rem autem nulla veniam a ratione molestias quibusdam quisquam.</p>

                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maxime perferendis velit dolore dolores qui repellat aliquam dicta veniam ut, deserunt corporis placeat possimus nisi debitis, sint maiores sed laboriosam.
                             Eos perferendis odio repellat nobis consequuntur labore ipsa, laudantium autem! Odio laudantium recusandae quasi illo corrupti sunt vel doloribus ab, magnam nisi consectetur ratione error consequuntur ullam cumque dignissimos est!</p>
                        </div>
                    </div>
                </div>
                <div className="AboutPages-3">
                    <h1>Why People Choose Us</h1>
                    {/* 1 */}
                    <div className="Allicons">
                        <div className='icon'>
                            <FastfoodIcon sx={{fontSize:' 50px'}} />
                            <div>
                                <h3>Friendny Team</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                        </div>
                        <div className='icon'>
                            <NoMealsIcon sx={{fontSize:' 50px'}}/>
                            <div>
                                <h3>Fresh Food</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                        </div>
                        <div className='icon'>
                            <DinnerDiningIcon sx={{fontSize:' 50px'}}/>
                            <div>
                                <h3>Quality Cuisine</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="Allicons">
                        <div className='icon'>
                            <IcecreamIcon sx={{fontSize:' 50px'}} />
                            <div>
                                <h3>Best Service</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                        </div>
                        <div className='icon'>
                            <EmojiFoodBeverageTwoToneIcon sx={{fontSize:' 50px'}}/>
                            <div>
                                <h3>Diverse Menu</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                        </div>
                        <div className='icon'>
                            <LocalPizzaIcon sx={{fontSize:' 50px'}}/>
                            <div>
                            <Rating name="size-medium" defaultValue={2} />
                                <h3>Affordable Prices</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Testimonials">
                    <div className='TestimonialsText'>
                        <h1>Testimonials</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi numquam placeat eos, facere aperiam veniam nulla optio amet non assumenda at cupiditate est, quo laborum minus ducimus iste voluptas recusandae!
                        Dolores, omnis enim quaerat eos sapiente alias? Perferendis labore officia temporibus ducimus omnis necessitatibus deleniti, aut dignissimos maxime! Temporibus, vitae adipisci? Alias eaque ea repudiandae quisquam earum quis error similique.</p>
                        <h3>Testimonials</h3>
                        <Stack sx={{display: 'flex', justifyContent: 'center',alignItems: 'center',textAlign: 'center',marginTop:'30px'}} direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" src={avater1} />
                            <Avatar alt="Travis Howard" src={avater2} />
                            <Avatar alt="Cindy Baker" src={avater3} />
                            <Avatar alt="Cindy Baker" src={avater4} />
                        </Stack>
                    </div>
                </div>
                <div className="ourAwards">
                    <h1>Our Awards</h1>
                    <div className="logoAbout">
                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                        <img src={logo3} alt="" />
                        <img src={logo4} alt="" />
                    </div>
                </div>
                <div className="futer">
                    <div className="get-multipurpose">
                        <div>
                        <h2>Get Multipurpose <strong>Monstroid</strong> Template !</h2>
                        <p>10+ HTML Files <b></b> 1 Niche Templates <b></b> All Source Files <b></b> Regular Updates</p>
                        <Box sx={{width: 300,display: 'flex',alignItems: 'center',color: 'white' }}>
                            <Rating name="hover-feedback" value={value} precision={0.5} getLabelText={getLabelText} onChange={(event, newValue) => { setValue(newValue); }}onChangeActive={(event, newHover) => {setHover(newHover);}} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>
                            {value !== null && (
                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>)}
                        </Box>

                        <br /><button className='viesbtn' disabled="disabled">View Now</button>
                        </div>
                    </div>
                    <div className="realFuter">
                        <img src={logo} alt="" />
                        <FutarMain>
                            <FurarNav>
                                <Link to='/'>Menu</Link>
                                <Link to='/'>Blog</Link>
                                <Link to='/'>Contacts</Link>
                                <Link to='/'>Gallery</Link>
                                <Link to='/'>About</Link>
                            </FurarNav>               
                        </FutarMain>
                        <div>
                            <FacebookOutlinedIcon sx={{margin: '35px', }}/>
                            <InstagramIcon sx={{margin: '35px'}}/>
                            <TwitterIcon sx={{margin: '35px'}}/>
                            <YouTubeIcon sx={{margin: '35px'}}/>
                            <PinterestIcon sx={{margin: '35px'}}/>
                        </div>
                        <p className='testitem'>@Pesto. 2022/... All Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
const FutarMain =styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    min-height: 60px;
    top: 0;
    left: 0;
    right: 0;
    background-color: #0c0c0c;
    width: 60vw;
    margin-top: 30px;
`
const FurarNav =styled.div`
    display: flex;
    align-items: center;
    justfy-content: space-between;
    text-align: center;
    a{
        text-decoration: none;
        font-weight: bold;
        margin: 0px 30px;
        font-size: 15px;
        flex-wrap: nowrap;
        text-transform: uppercase;
        color: #d9d9d9;
        cursor: pointer;
    };
`