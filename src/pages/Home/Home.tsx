import { Box, Typography } from '@mui/material';
import React from 'react'
import { useStyles } from './Home.styles';
import img from '../../assets/images/school.jpg';
import S24 from '../../assets/images/SchoolImg24.jpg';


const Home = () => {
  const classes = useStyles();
  return (
    <>
     <div className="container-fluid bg-primary px-0 px-md-5 mb-5 overflow-hidden">
        <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-left">
                <h1 className="display-3 font-weight-bold text-white">Shri Girraj Baba Saraswati higher secondary school</h1>
                <br />
                <br />
                <p className="text-white mb-4">It’s our vision to nurture today’s little learners into tomorrow’s responsible and compassionate global citizens because these little ones are going to shape the future of our society tomorrow.</p>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <img className="img-fluid" src={S24} alt="" style={{width: '100%'}}/>
            </div>
        </div>
    </div>
    {/* facilities */}
    <div className="container-fluid pt-5">
        <div className="container pb-3">
            <div className="row">
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{padding: '30px'}}>
                        <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3"></i>
                        <div className="pl-4">
                            <h4>Play Ground</h4>
                            <p className="m-0">Spacious and well maintainned ground to play...</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{padding: '30px'}}>
                        <i className="flaticon-022-drum h1 font-weight-normal text-primary mb-3"></i>
                        <div className="pl-4">
                            <h4>Music and Dance</h4>
                            <p className="m-0">We offer varities of extra curlicular activities...</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{padding: '30px'}}>
                        <i className="flaticon-030-crayons h1 font-weight-normal text-primary mb-3"></i>
                        <div className="pl-4">
                            <h4>Arts and Crafts</h4>
                            <p className="m-0">We give equal importance to art and craft which leads to the creativity...</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{padding: '30px'}}>
                        <i className="flaticon-017-toy-car h1 font-weight-normal text-primary mb-3"></i>
                        <div className="pl-4">
                            <h4>Safe Transportation</h4>
                            <p className="m-0">Safe and secure transportation is always our firt priority...</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{padding: '30px'}}>
                        <i className="flaticon-025-sandwich h1 font-weight-normal text-primary mb-3"></i>
                        <div className="pl-4">
                            <h4>Healthy food</h4>
                            <p className="m-0">Tastey and Healthy food provided with precautions...</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pb-1">
                    <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{padding: '30px'}}>
                        <i className="flaticon-047-backpack h1 font-weight-normal text-primary mb-3"></i>
                        <div className="pl-4">
                            <h4>Educational Tour</h4>
                            <p className="m-0">We organize tours which are totally designed to educate the students</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
  );
}

export default Home

// <Box className={classes.container}>
    // <Box>
    //   <Typography variant='h2' sx={{textAlign: 'center', fontFamily: 'sans-serif', color: '#c64380c4'}}>
    //   Shri Girraj Baba Saraswati higher secondary school
    //   </Typography>
    // </Box>
    // <Box sx={{heigth: '144px'}}>
    //   <img src={img} alt='img'/>
    // </Box>
    // <Box>
      
    // </Box>
    // </Box>