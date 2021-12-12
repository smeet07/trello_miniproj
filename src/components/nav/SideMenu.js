import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Drawer, Grow } from '@material-ui/core';
import colors from '../../utils/color1';
import bgs from '../../utils/bgs';
// import bgs2 from './wp/sea.jpg';
import bg1 from "./navimg/colors.png";
import bg2 from "./navimg/bg.jpg";

// console.log(bgs[1]);
// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }

// const bgs = importAll(require.context('./wp', false, '/\.jpg/'));

const useStyles=makeStyles((theme)=>({
    drawer:{
        width:'400px',
    },
    menu:{
        marginTop:theme.spacing(2),
        display:'flex',
        justifyContent:'space-around',
    },
    box:{
        width:'45%',
        height:'90px',
        // backgroundColor:'blue',
        borderRadius:'9px',
        marginBottom:theme.spacing(2),
    },
    optionContainer:{
        marginTop:theme.spacing(2),
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-around',
    }
}));

export default function SideMenu({openSideMenu,setOpenSideMenu,setbackgroundImage}) {
  const classes=useStyles();
  const [openOptionColor, setopenOptionColor] = useState(false);
  const [openOptionImage, setopenOptionImage] = useState(false);
  
  return (
    <div>
        <Drawer open={openSideMenu} anchor='right' onClose={()=>setOpenSideMenu(false)}>
            <div className={classes.drawer}>
            <h1>hello </h1>
            <div className={classes.menu}>
                <div className={classes.box} 
                style={{backgroundImage:`url(${bg2})`, backgroundRepeat:"no-repeat", backgroundSize:'cover'}}
                onClick={()=>{
                    setopenOptionColor(false);
                    setopenOptionImage(true);
                }}
                ></div>

                <div className={classes.box} 
                style={{backgroundImage:`url(${bg1})`, backgroundRepeat:"no-repeat", backgroundSize:'cover'}}
                onClick={()=>{
                    setopenOptionColor(true);
                    setopenOptionImage(false);
                }}
                ></div>
            </div>
            {openOptionImage?(
                <Grow in={openOptionImage}>
                <div className={classes.optionContainer}>
                    {bgs.map((bg,index)=>{
                        // console.log(bg1)
                        return(
                    <div key={index} className={classes.box} 
                    style={{backgroundImage:`url(${bg})`, backgroundRepeat:"no-repeat", backgroundSize:'cover'}}
                    onClick={()=>setbackgroundImage(bg)} ></div>
                            
                        )
                    })}
                </div>
            </Grow>
            ):(
                <Grow in={openOptionColor}>
                <div className={classes.optionContainer}>
                    {colors.map((color,index)=>{
                        return(
                    <div key={index} className={classes.box} style={{backgroundColor:color}} onClick={()=>setbackgroundImage(color)}></div>

                        )
                    })}
                </div>
            </Grow>
            )}

            </div>
        </Drawer>
    </div>
  )
}
