import { Box, Typography } from '@mui/material'
import React from 'react'
import Logo from '../../assets/images/Logo.png';

const AboutUS = () => {
  return (
    <>
    <Box sx={{background: '#eee', textAlign: "center", padding: '20px'}}>
      <h4>
        Learn About US
      </h4>
    </Box>
    <Box sx={{textAlign: "center", padding: '20px'}}>
      <Box>
        <img src={Logo} style={{width: '300px'}}/>
      </Box>
      <br />
      <br/> 
      <Box>
      <h6 className='text-primary'>
      Shri Girraj Baba Saraswati higher secondary school's mission is to provide an enriching learning experience to the early learners in their first step towards education.We strive to create a tranquil, curious and challenging environment that foster’s the social, physical, emotional and cognitive development of the child.Our aim is to imbibe social, moral and cultural values in early learners and also to arouse in them the feeling of respect and concern towards the environment.
      It’s our vision to nurture today’s little learners into tomorrow’s responsible and compassionate global citizens because these little ones are going to shape the future of our society tomorrow.
      </h6>
      </Box>
    </Box>
    </>
  )
}

export default AboutUS