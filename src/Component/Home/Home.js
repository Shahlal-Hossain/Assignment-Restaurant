import { Paper } from '@mui/material';
import React from 'react';
import "./Home.css"
import styled from 'styled-components';
import About from './images/About-wk.png'
import Ravioli from './images/ravioli.png'
import BlackPasta from './images/Black pasta.jpg'
import Gelato from './images/Gelato.jpg';
import cart1 from './images/csm_Italien_1.jpg'
import cart2 from './images/ndujacarbonara-2.jpg'
import cart3 from './images/l-intro-1643403830-4.jpg'
import cart4 from './images/koonkjb-3.png'
import logo from './images/Amedeo Ristorante.png'
import { Link } from 'react-router-dom';
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

const Home = () => {
    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
      }      
    const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
    return (
        <div>
            <div className="main">
                <div className="menu">
                    <div className="menuText">
                        <h2>WELCOME</h2>
                        <h5> </h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Iure ducimus dolorem veniam saepe explicabo odit id cum.</p>
                    </div>
                </div>
                <Paper elevation={24}>
                <div className="from">
                    
                    <form>
                        <input type="text" placeholder='Enter your Name' name="email" id="" />
                        <input type="number" placeholder='Enter your Phone' name="password" id="" />
                        <input type="date" name="date" id="" />
                        <button className='btn' type="submit">Check Availability</button>

                    </form>
                </div>
                </Paper>
                <div className="container">
                    <div className="about-us">
                        <img src={About} alt="" />
                        <div className="about-usText">
                            <h2>About Us</h2>
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et pariatur quos ratione, minus libero voluptate laboriosam.</p>
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum doloremque fugit placeat architecto quia, voluptatum sapiente commodi sequi aut magni corrupti molestias quis perspiciatis amet quasi molestiae praesentium similique iste.</p>
                        </div>
                    </div>
                </div>
                <div className="Featured">
                    <h1>Featured Offers</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repudiandae vel, <br /> dolores iure quam nisi eius nulla dolorem facilis iusto,</p>
                    <div className="cardImg">
                        <div className="">
                            <img src={Ravioli} alt="" />
                            <h3>Ravioli</h3>
                            <p> 8 $</p>
                        </div>
                        <div className="">
                            <img src={BlackPasta} alt="" />
                            <h3>Black Pasta</h3>
                            <p> 13 $</p>
                        </div>
                        <div className="">
                            <img src={Gelato} alt="" />
                            <h3>Gelato</h3>
                            <p>4 $</p> 
                        </div>
                    </div>
                </div>
                <div className="Restaurant">
                    <h1>Out Restaurant Menu</h1>
                    <Navbars>
                        <Menubars>
                            <Link to="/mains"> Mains</Link>
                            <Link to="/mains"> Desserts</Link>
                            <Link to="/mains"> Drinks</Link>
                        </Menubars>
                    </Navbars>
                    <div className="mains">
                        <div>
                            <p>$ 25.89</p>
                            <h3>Osso Buco</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sed laborum quisquam <br /> cum nesciunt dolores non praesentium,</p>
                        </div>
                        <div>
                            <p>$ 16.89</p>
                            <h3>Pappardelle Mimmo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nulla repellat<br /> accusamus aperiam corporis Explicabo.</p>
                        </div>
                        <div>
                            <p>$ 17.89</p>
                            <h3>Trippa Satriano</h3>
                            <p> Culpa vero eos voluptates sequi facere molestiae fuga dolore maiores,<br /> assumenda illum numquam, recusandae possimus.</p>
                        </div>
                        <div>
                            <p>$ 18.89</p>
                            <h3>Filetto Di Manzo</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur ad illo<br /> ut quae esse iste eaque officia,</p>
                        </div>
                    </div>
                </div>
                <div className="gallery">
                    <div className="cardgallery">
                        <div>
                            <img src={Ravioli} alt="" />
                        </div>
                        <div>
                            <img src={BlackPasta} alt="" />
                        </div>
                        <div>
                            <img src={Gelato} alt="" />
                        </div>
                    </div>
                    <div className="card">
                        <img src={cart1} alt="" />
                        <img src={cart4} alt="" />
                    </div>
                    <div className="card">
                        <img src={cart2} alt="" />
                        <img src={cart3} alt="" />
                    </div>
                </div>
                <div className="RecentNews">
                    <h1>Recent News</h1>
                    <div className="cardText">
                        <div>
                            <h5 className='date'>JUN 12, 2022</h5>
                            <h3>Genuine Itslisn Pizza: <br />  Authenticity and Choice</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum neque repellat vel quis sed accusantium, eos rem eaque quam dolor expedita odio tenetur, alias magni fugit minima error, voluptas nobis.</p>
                            <Link to='/read-more'> Read more -{'>'} </Link>
                            
                        </div>
                        <div>
                            <h5 className='date'>JUN 12, 2022</h5>
                            <h3>Italian vs. American Spaghetti: <br /> Top 5 Differnces</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum neque repellat vel quis sed accusantium, eos rem eaque quam dolor expedita odio tenetur, alias magni fugit minima error, voluptas nobis.</p>
                            <Link to='/read-more'> Read more -{'>'} </Link>
                        </div>
                        <div>
                            <h5 className='date'>JUN 12, 2022</h5>
                            <h3>The Delicious History of Lasagna Its Origins</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum neque repellat vel quis sed accusantium, eos rem eaque quam dolor expedita odio tenetur, alias magni fugit minima error, voluptas nobis.</p> 
                            <Link to='/read-more'> Read more -{'>'} </Link>
                        </div>
                    </div>
                </div>
                <div className="futer">
                    <div className="get-multipurpose">
                        <div>
                        <h2>Get Multipurpose <strong>Monstroid</strong> Template !</h2>
                        <p>10+ HTML Files <b></b> 1 Niche Templates <b></b> All Source Files <b></b> Regular Updates</p>
                        {/* <div> */}
                        <Box sx={{width: 300,display: 'flex',alignItems: 'center',color: 'white' }}>
                            <Rating name="hover-feedback" value={value} precision={0.5} getLabelText={getLabelText} onChange={(event, newValue) => { setValue(newValue); }}onChangeActive={(event, newHover) => {setHover(newHover);}} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>
                            {value !== null && (
                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>)}
                        </Box>
                        {/* </div> */}
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

export default Home;

const Navbars =styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    min-height: 60px;
    padding: 0px 20px;
    top: 0;
    left: 0;
    right: 0;
    background-color: #0c0c0c;
    width: 60vw;
    margin-top: 30px;
`
const Menubars =styled.div`
    display: flex;
    align-items: center;
    justfy-content: space-between;
    text-align: center;
    a{
        text-decoration: none;
        font-weight: bold;
        margin: 0px 30px;
        padding: 3px 15px;
        font-size: 15px;
        flex-wrap: nowrap;
        text-transform: uppercase;
        color: #d9d9d9;
        cursor: pointer;
    };
`
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