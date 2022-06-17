import React from 'react';
import './Typography.css'
import styled from 'styled-components';
import logo from './Amedeo Ristorante.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { Box} from '@mui/material';


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
const Typography = () => {
    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
      }      
    const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  

    return (
        <div>
            <div>
                <div className="Typography">
                  <div className="TypographyText">
                      <h2>Typography</h2>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Iure ducimus dolorem veniam saepe explicabo odit id cum.</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Recusandae quos dolore ipsum. Nobis ipsa ex doloremque perferendis <br /> hic provident. Explicabo vel quae architecto nihil assumenda ducimus<br /> quisquam repudiandae aspernatur. Esse!</p>
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

export default Typography;
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