import React from 'react'
import {Box , Typography , Stack , Button , IconButton} from '@mui/material';


function NavBar() {
  return (
    
    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} sx={{width:'90%' , height:'6%' }}>

        <Box sx={{width:'50%'  , height:'100%' , display:'flex' , alignItems:'center'}}>
                    <IconButton color='primary' ><Button  sx={{color:'white' , fontSize:'20px' , backgroundColor:'rgb(130, 133, 245)'}}>Home</Button></IconButton>
                    
        </Box>
        <Box sx={{width:'50%' ,  height:'100%' ,  display:'flex' , alignItems:'center' , justifyContent:'flex-end'}}>

                     <IconButton  color='primary' ><Button href='#pillars-wraper'  sx={{color:'white' , fontSize:'20px' , backgroundColor:'rgb(130, 133, 245)'}}>Manifesto</Button></IconButton>
                     <IconButton color='primary' ><Button href='#subscribe-container' sx={{color:'white' , fontSize:'20px' , backgroundColor:'rgb(130, 133, 245)'}}>We are hiring</Button></IconButton>
                   
        </Box>

    </Stack>
  )
}

export default NavBar