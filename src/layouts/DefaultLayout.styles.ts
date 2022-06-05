import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles((theme: Theme)=>({
    defaultLayout:{
        // display: 'flex',
        minHeight: '100vh',
        zIndex: 1,
        position: 'relative',
        // backgroundColor: theme.palette.background.default,
        background: '#eee',
    }
}))