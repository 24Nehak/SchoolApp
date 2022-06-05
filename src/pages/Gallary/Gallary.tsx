import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import S11 from '../../assets/images/SchoolImg11.jpg';
import S12 from '../../assets/images/SchoolImg12.jpg';
import S13 from '../../assets/images/SchoolImg13.jpg';
import S14 from '../../assets/images/SchoolImg14.jpg';
import S15 from '../../assets/images/SchoolImg15.jpg';
import S16 from '../../assets/images/SchoolImg16.jpg';
import S17 from '../../assets/images/SchoolImg17.jpg';
import S18 from '../../assets/images/SchoolImg18.jpg';
import S19 from '../../assets/images/SchoolImg19.jpg';
import S20 from '../../assets/images/SchoolImg20.jpg';
import S21 from '../../assets/images/SchoolImg21.jpg';
import S22 from '../../assets/images/SchoolImg22.jpg';
import S23 from '../../assets/images/SchoolImg23.jpg';
import S24 from '../../assets/images/SchoolImg24.jpg';


const Gallary = () => {
  return (
    <>
    <Box sx={{background: '#eee', textAlign: "center", color: '#fab000', padding: '20px'}}>
      <Typography variant="h3">
        Photo Gallary...
      </Typography>
    </Box>
    <Box>
   
    <Box>
      <Grid container spacing={{ xs: 1, sm: 1, md: 2,lg:4, xl: 4 }}  sx={{margin: 'auto', display: 'flex', alignItems: 'center', width: '100%', padding: '30px'}}>
        

          <Grid item xs={112} sm={6} md={4}lg={3} xl={3} sx={{padding: '10px'}}>
            <img src={S21} alt="img" style={{width: '300px', height: '300px'}}/>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}sx={{padding: '10px'}}>
            <img src={S22} alt="img" style={{width: '300px', height: '300px'}}/>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}sx={{padding: '10px'}}>
            <img src={S23} alt="img" style={{width: '300px', height: '300px'}}/>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}sx={{padding: '10px'}}>
            <img src={S24} alt="img" style={{width: '300px', height: '300px'}}/>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}sx={{padding: '10px'}}>
            <img src={S15} alt="img" style={{width: '300px', height: '300px'}}/>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}sx={{padding: '10px'}}>
            <img src={S16} alt="img" style={{width: '300px', height: '300px'}}/>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}sx={{padding: '10px'}}>
            <img src={S17} alt="img" style={{width: '300px', height: '300px'}}/>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}sx={{padding: '10px'}}>
            <img src={S18} alt="img" style={{width: '300px', height: '300px'}}/>
          </Grid>

       
      </Grid>
    </Box>
    {/* <div className="container-fluid pt-5 pb-3">
        <div className="container">
            <div className="text-center pb-2">
                <p className="section-title px-5"><span className="px-2">Our Gallery</span></p>
                <h1 className="mb-4">Our Kids School Gallery</h1>
            </div>
            <div className="row">
                <div className="col-12 text-center mb-2">
                    <ul className="list-inline mb-4" id="portfolio-flters">
                        <li className="btn btn-outline-primary m-1 active"  data-filter="*">All</li>
                        <li className="btn btn-outline-primary m-1" data-filter=".first">Playing</li>
                        <li className="btn btn-outline-primary m-1" data-filter=".second">Drawing</li>
                        <li className="btn btn-outline-primary m-1" data-filter=".third">Reading</li>
                    </ul>
                </div>
            </div>
            <div className="row portfolio-container">
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid w-100" src="img/portfolio-1.jpg" alt=""/>
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="img/portfolio-1.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style={{fontSize: '60px'}}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid w-100" src="img/portfolio-2.jpg" alt=""/>
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="img/portfolio-2.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style={{fontSize: '60px'}}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid w-100" src="img/portfolio-3.jpg" alt=""/>
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="img/portfolio-3.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style={{fontSize: '60px'}}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid w-100" src="img/portfolio-4.jpg" alt=""/>
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="img/portfolio-4.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style={{fontSize: '60px'}}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid w-100" src="img/portfolio-5.jpg" alt=""/>
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="img/portfolio-5.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style={{fontSize: '60px'}}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid w-100" src="img/portfolio-6.jpg" alt=""/>
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="img/portfolio-6.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style={{fontSize: '60px'}}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    </Box>
    </>
  )
}

export default Gallary