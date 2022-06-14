import { Box, Button, Typography } from '@mui/material'
import React, {useEffect, useRef} from 'react'
import { NavLink } from 'react-router-dom'

const scrollToRef = (ref:any) => window.scrollTo(0, ref.current.offsetTop)
const Footer = () => {
  const myRef = useRef();
  const executeScroll = (e:any) => {
    e.preventDefault();
    window.scrollTo(0, 0)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [executeScroll]);
  return (
      <>
        <div className="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Quick Links</h3>
                
                <p>Shri Girraj Baba Saraswati higher secondary school's mission is to provide an enriching learning experience to the early learners in their first step towards education.We strive to create a tranquil, curious and challenging environment that foster’s the social, physical, emotional and cognitive development of the child.Our aim is to imbibe social, moral and cultural values in early learners and also to arouse in them the feeling of respect and concern towards the environment.</p>
                {/* <div className="d-flex justify-content-start mt-4">
                    <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                        style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                        style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                        style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                        style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-instagram"></i></a>
                </div> */}
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h3 className="text-primary mb-4">Get In Touch</h3>
                <div className="d-flex">
                    <h4 className="fa fa-map-marker-alt text-primary"></h4>
                    <div className="pl-3">
                        <h5 className="text-white">Address</h5>
                        <p>Shahpur Chainpur, Uttar Pradesh 281501
India</p>
                    </div>
                </div>
                {/* <div className="d-flex">
                    <h4 className="fa fa-envelope text-primary"></h4>
                    <div className="pl-3">
                        <h5 className="text-white">Email</h5>
                        <p>info@example.com</p>
                    </div>
                </div>
                <div className="d-flex">
                    <h4 className="fa fa-phone-alt text-primary"></h4>
                    <div className="pl-3">
                        <h5 className="text-white">Phone</h5>
                        <p>+012 345 67890</p>
                    </div>
                </div> */}
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h3 className="text-primary mb-4">Quick Links</h3>
                <div className="d-flex flex-column" style={{alignItems: 'baseline'}}>
              <Button component={NavLink} to="/home" size="large" className="fa fa-angle-right  text-white">
                Home
              </Button>
              <Button component={NavLink} to="/admission" size="large" className="fa fa-angle-right mr-2 text-white">
                Admission
              </Button>
              <Button component={NavLink} to="/aboutus" size="large" className="fa fa-angle-right mr-2 text-white">
                About us
              </Button>
              <Button component={NavLink} to="/contactus" size="large"  className="fa fa-angle-right mr-2 text-white">
                contact us
              </Button>
              <Button component={NavLink} to="/gallary" size="large" className="fa fa-angle-right mr-2 text-white">
                Gallary
              </Button>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h3 className="text-primary mb-4">Opening Hours</h3>
                <br/>
                <pre>
                <div className='text-white'>Mon - Sat:	8:00 am – 4:30 am </div><br/>
                <div className='text-white'>Sun:	Closed</div><br />
                </pre>
            </div>
        </div>
    </div>
    <Box sx={{background: '#eee', position: 'sticky', textAlign: 'center'}}>
    Copyright © 2022. All Rights Reserved
    </Box>

      </>
  )
}

export default Footer
