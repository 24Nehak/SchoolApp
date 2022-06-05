import { Box } from '@mui/material'
import { ReactElement } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import TopNav from '../components/TopNav/TopNav';
import {useStyles} from './DefaultLayout.styles';

const DefaultLayout = ({hideLeftNav = false}:{hideLeftNav?: boolean}): ReactElement => {
    const classes = useStyles();
    // const { spanshScreenshown } = useConfigContext();
    const pathname = useLocation().pathname;
    // const showSplash = !spanScreenShown && pathname === '/home';
  return (
   <Box className={classes.defaultLayout}>
       <div>
          <TopNav />
          <Box>
            <Outlet />
          </Box>
          <Footer />
       </div>
   </Box>
  )
}

export default DefaultLayout