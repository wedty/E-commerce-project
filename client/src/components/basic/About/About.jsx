import React from 'react'
import { Button, Typography,Avatar } from '@material-ui/core';
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

import "./about.css";

export const About = () => {
    const visitInstagram=()=>{
        window.location="https://instagram.com";

    }

  return (
    <>
    <div className="aboutSection">
        <div></div>
        <div className="aboutSectionGradient"></div>
        <div className="aboutSectionContainer">
            <Typography component="h1">
                About Us
            </Typography>
            <div>
                <div>
                    <Avatar
                    style={{
                        width:"10vmax",height:"10vmax", margin:'2vmax 0',
                        

                    }}
                    src="/images/profile_pic.png" alt="founder"  />
                    <Typography>Wedty0034</Typography>
                    <Button onClick={visitInstagram} color="primary" >Visit Instagram</Button>
                    <span>
                        This website is made by Wedty. This is an Ecommerce Site.
                    </span>

                </div>
                <div className="aboutSectionContainer2">
                    <Typography component="h2">Our Brands</Typography>
                    <a href="https://www.youtube.com"
                    target="blank">
                        <YouTubeIcon className="youtubeSvgIcon"/>
                    </a>
                    <a href="https://instagram.com"
                    target="blank">
                        <InstagramIcon className="instagramSvgIcon"/>

                    </a>
              
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
