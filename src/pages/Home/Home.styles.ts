import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles((theme: Theme)=>({
    container:{
        display: 'flex',
        background: '#d8e7f5',
        // justifyContent: 'space-between',
        color: '#007bff',
    }
}))