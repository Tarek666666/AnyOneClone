import React, { useEffect } from "react";
import { Box, Typography, Stack, Button, IconButton , Divider } from "@mui/material";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
function Footer() {
    const [isInViewport, setIsInViewport] = React.useState(false);

    const handleScroll = () => {
        const element = document.getElementById("subscribe-container");
        if (element) {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            setIsInViewport(rect.top >= 0 && rect.bottom <= windowHeight );
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <Stack
            direction={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
                width: "100%",
                height: "100vh",
                backgroundImage:
                    "linear-gradient(to right, rgb(130, 113, 255), rgb(130, 133, 245))",
            }}
        >
            <motion.div
                id='form-container'
                animate={{ opacity: isInViewport ? 1 : 0, scale: isInViewport ? 1 : 0 }} // Set animation values based on isInViewport state
                transition={{ duration: 1 }}
            >
                <Box
                    id='subscribe-container'
                    m={2}
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "15px 15px",
                        justifyContent: "center",
                        gap: "15px",
                        backgroundColor: "white",
                    }}
                >
                    <Typography variant='h3' sx={{textAlign:'center' , color:'rgb(130, 133, 245)'}}>Notify me when we launch</Typography>
                    <Box
                        component='form'
                        sx={{
                            "& .MuiTextField-root": { m: 1, width: "60%" },
                          
                        }}
                        noValidate
                        autoComplete='off'
                    >
                        <Box sx={{display:'flex' , justifyContent:'center' , alignItems:'center'  }}>
                            <TextField
                                
                                id='outlined-multiline-flexible'
                                label='Email Adress'
                                multiline
                                maxRows={4}
                                
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "rgb(130, 133, 245)",
                            width: "250px",
                            height: "50px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            borderRadius:'10px 10px',
                            alignSelf:'center'
                        }}
                    >
                        {" "}
                        <Button sx={{color:'white' , fontSize:'22px' }}>Keep Me Updated</Button>
                    </Box>
                </Box>
            </motion.div>
            
            <Box sx={{ width: "80%", height: "50px", borderTop:'1px solid white' , display:'flex' , justifyContent:'center'}}>
              <Typography sx={{color:'white' , fontSize:'20px' , marginTop:'4px'}} variant="p">© Anyone 2023. All Rights Reserved.  / TJ</Typography>
            </Box>
        </Stack>
    );
}

export default Footer;
