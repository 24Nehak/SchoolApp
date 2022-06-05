import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme)=>({
    root:{
        background: '#FFC300 !important',
        color: 'white',
    },
    menuButton:{
        marginRight: '20px',
    },
    navigationBox:{
        '& .MuiButton-root': {
            color:'#fff',
            textTransform: 'none',
            right: '5px',
            cursor: 'pointer',
            '&:hover':{
                background: '#e63c8a'
            }
        },
        '& .MuiButtonBase-root.Mui-disabled':{
            color: '#fff',
            '&:hover':{
                background: '#e63c8a'
            }
        },
    },
    userMenu:{
        '& .MuiButton-root':{
            color: '#fff',
            textTransform: 'none',
        },
    },
    disabledMenuButton:{
        color: 'grey',
    }
}))

