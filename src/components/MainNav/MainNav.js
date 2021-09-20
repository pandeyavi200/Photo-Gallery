import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MovieIcon from "@material-ui/icons/Movie";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import CollectionsIcon from '@material-ui/icons/Collections';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import './MainNav.css'


const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },

});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history=useHistory();

  useEffect(() => {
    if(value===0) history.push("/");
    else if(value===1) history.push("/collections");
    else if(value===2) history.push("/collections");
  }, [value,history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction 
      style={{color:"white"}}
       label="Gallery" icon={<WhatshotIcon />} />
      <BottomNavigationAction 
        style={{color:"white"}}
       label="Collections" icon={<MovieIcon />} />
      <BottomNavigationAction 
        style={{color:"white"}}
       label="Create Collections" icon={< CollectionsIcon/>} />
     </BottomNavigation>

    
  );
}