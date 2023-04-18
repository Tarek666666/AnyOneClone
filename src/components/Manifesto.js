import React , {useEffect} from 'react'
import {Box , Typography , Stack , Button , IconButton} from '@mui/material';
import { motion} from "framer-motion";
import { Buildings , Handshake , Coins } from "phosphor-react";
function Manifesto() {
    const [isInViewport, setIsInViewport] = React.useState(false);

    const handleScroll = () => {
      const element = document.getElementById("pillars-wraper");
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        setIsInViewport(rect.top >= -250 && rect.bottom <= windowHeight  - 250);
      }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [])
  return (
    <Stack direction={'row'} justifyContent={'space-evenly'} sx={{backgroundColor:'white' ,width:'100%' , height:'102vh'}}>

             <Box  sx={{maxWidth:'100%' , height:'100%' , display:'flex' , flexDirection:'row' , justifyContent:'space-evenly'}}>
             <motion.div
                    
                    animate={{ opacity: isInViewport ? 1 : 0, x: isInViewport ? 0 : -400 }} // Set animation values based on isInViewport state
                    transition={{ duration: 1 }}
                >
                    <Box id='pillars-wraper'  m={2} sx={{width:'350px' , height:'400px' , display:'flex' , flexDirection:'column' ,borderRadius:'15px 15px'  , justifyContent:'center' , gap:'15px',  backgroundImage:
                        "linear-gradient(to right, rgb(130, 113, 255), rgb(130, 133, 245))",}}>
                            
                        <Typography variant='h5' sx={{color:'white' , textAlign:'center'}}> <Buildings  size={92} /> </Typography>
                        <Typography variant='h5' sx={{color:'white' , textAlign:'center'}}> Create a cross border </Typography>
                        <Typography variant='h5' sx={{color:'white' , textAlign:'center'}}> Unified market for buying </Typography>
                        <Typography variant='h5' sx={{color:'white' , textAlign:'center'}}> Selling real estate </Typography>
                    </Box>
                </motion.div>   
                <motion.div
                    
                    animate={{ opacity: isInViewport ? 1 : 0, x: isInViewport ? 0 : -400 , y:240 }}  // Set animation values based on isInViewport state
                    transition={{ duration: 1.5 }}
                >
                    <Box id='pillars-wraper'  m={2} sx={{width:'350px' , height:'400px' ,  display:'flex' , flexDirection:'column' ,borderRadius:'15px 15px' , justifyContent:'center' , gap:'15px', backgroundImage:
                        "linear-gradient(to right, rgb(130, 113, 255), rgb(130, 133, 245))"}}>
                        <Typography sx={{color:'white' , textAlign:'center'}} variant='h5'> <Handshake size={92} /></Typography>
                        <Typography sx={{color:'white' , textAlign:'center'}} variant='h5'> Introduce the new Anyone mortgage that allows more starters </Typography>
                        <Typography sx={{color:'white' , textAlign:'center'}} variant='h5'> renters to become homeowners. </Typography>
                     
                    </Box>
                </motion.div>   
                <motion.div
                    
                    animate={{ opacity: isInViewport ? 1 : 0, x: isInViewport ? 0 : -400  , y:540}} 
                    transition={{ duration: 2}}
                >
                    <Box id='pillars-wraper'  m={2} sx={{width:'350px' , height:'400px' , display:'flex' , flexDirection:'column' , borderRadius:'15px 15px' , justifyContent:'center' , gap:'15px', backgroundImage:
                        "linear-gradient(to right, rgb(130, 113, 255), rgb(130, 133, 245))" }}>
                         
                         <Typography sx={{color:'white' , textAlign:'center' }} variant='h5'> <Coins size={92} /> </Typography>

                        <Typography sx={{color:'white' , textAlign:'center' }} variant='h5'> Engage in real estate asset repositioning to develop reasonably priced starter homes. </Typography>
                    </Box>
                </motion.div>  

             </Box>
       
    </Stack>
  )
}

export default Manifesto