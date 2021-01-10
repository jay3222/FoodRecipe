import React from 'react'
import{Typography,Container,Box,Paper,makeStyles,TextField,InputAdornment,InputProps,startAdornment} from "@material-ui/core";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';

const useStyles=makeStyles((theme)=>({
    root:{
      
    },
    typo:{
        backgroundColor:"indigo",
        color:"white",
        padding:100,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        letterSpacing:"5px !important",
    
    },
    fastFood:{
        fontSize:"6rem",
        marginLeft:"10px",
        [theme.breakpoints.down('sm')]: {
            fontSize:"4rem",
            justifyContent:"start",
          },
          [theme.breakpoints.up('md')]: {
           fontSize:"6rem",
          },
    },
    center:{
        textAlign:"center",
        letterSpacing:"5px",
        margin:"auto",
    },
    SearchIcon:{
      position:"absolute",
      top:"0px",
      right:"10px",
      cursor:"pointer",
      color:"white",
    },
    field:{
        width:"75%",
        '& label.Mui-focused': {
            color: 'white',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
        }

    }
}));

const Header = (props) => {
    const classes=useStyles();
    return (
        <>
        <Box className={classes.root} >
            <Paper component={Box} className={classes.typo}>
                <Container className={classes.center}>
        <Typography variant="h6"className={classes.fastFood} >Food Recipe  <FastfoodIcon className={classes.fastFood}/></Typography>
        <TextField className={classes.field} value={props.search} onChange={props.onInputChange} label="search recipe....." autoComplete="off"
         placeholder=""
          margin="normal"  
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className={classes.SearchIcon} onClick={props.onSearchClick} />
              </InputAdornment>
            ),
          }}
        />
          
            </Container>
          
        </Paper>
      
        </Box>
      
        </>
    )
}

export default Header;
