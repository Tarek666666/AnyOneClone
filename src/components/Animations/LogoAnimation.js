import React from 'react'
import { motion } from "framer-motion"
import {Box , Typography} from '@mui/material';


const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.8;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 2.5, bounce: 0 },
          opacity: { delay, duration: 0.5 }
        }
      };
    }
  };
  
 function LogoAnimation() {
    return (
        
                <Box sx={{width:'100%' , height:'80px' ,  display:'flex' , flexDirection:'row' , alignItems:'center' , justifyContent:'center'}}>           
                                <Typography variant='h3' sx={{color:'white' , textAlign:'center'}}>Any</Typography>        
                                <motion.svg id='logo-svg'
                                    width="50px"
                                    height="50px"
                                    viewBox="0 0 1500 1500"
                                    initial="hidden"
                                    animate="visible"
                                    
                                > 

                                    
                                    <motion.circle
                                    cx="50%"
                                    cy="50%"
                                    r="610"
                                    stroke="rgb(130, 113, 285)"
                                    variants={draw}
                                    custom={1}
                                    /> 
                                
                                </motion.svg>
                                <Typography variant='h3' sx={{color:'white'}}>ne</Typography>   

                </Box>
       
    );
  }



export default LogoAnimation