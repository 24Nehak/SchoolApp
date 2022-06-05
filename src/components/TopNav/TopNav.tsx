import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { ReactElement, useState } from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "./TopNav.styles";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Logo from '../../assets/images/Logo.png';
const TopNav = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const classes = useStyles();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    console.log("Welcome");
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNAvMenu = () => {
    console.log("HELLo");
    setAnchorElNav(null);
  };
  const handleListKeyDown = (event: React.KeyboardEvent) => {
    console.log("handleListKeyDown");
    if (event.key === "Tab") {
      event.preventDefault();
      setAnchorElNav(null);
    }
  };

  return (
    <>
    <div className="container-fluid bg-light position-relative shadow">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
            <a href="" className="navbar-brand font-weight-bold text-secondary" style={{fontSize: '50px'}}>
                <i className="flaticon-043-teddy-bear"></i>
                <span className="text-primary"><img src={Logo} style={{width: '100px', height: '100px'}}/></span>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Box
              sx={{ mr: "2rem", display: { xs: "none", md: "flex" } }}
              component="nav"
              // className={classes.navigationBox}
              className="collapse navbar-collapse justify-content-between"
            >
              <div className="navbar-nav font-weight-bold mx-auto py-0">
              <Button component={NavLink} to="/home" size="large" className="navbar-nav font-weight-bold mx-auto py-0 text-primary">
                Home
              </Button>
              <Button component={NavLink} to="/admission" size="large" className="navbar-nav font-weight-bold mx-auto py-0 text-primary">
                Admission
              </Button>
              <Button component={NavLink} to="/aboutus" size="large" className="navbar-nav font-weight-bold mx-auto py-0 text-primary">
                About us
              </Button>
              <Button component={NavLink} to="/contactus" size="large"  className="navbar-nav font-weight-bold mx-auto py-0 text-primary">
                contact us
              </Button>
              <Button component={NavLink} to="/gallary" size="large" className="navbar-nav font-weight-bold mx-auto py-0 text-primary">
                Gallary
              </Button>
              </div>
            </Box>
        </nav>
    </div>
    </>
  );
};

export default TopNav;
