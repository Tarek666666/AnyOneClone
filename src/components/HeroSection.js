import React, { useEffect } from "react";
import LogoAnimation from "./Animations/LogoAnimation";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Box, Typography, Stack, Button, IconButton } from "@mui/material";

function HeroSection() {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        const controls = animate(count, 1499, { duration: 3 });

        return controls.stop;
    }, []);
    return (
        <Stack className='hero-section' direction={"column"} sx={{ width: "100%", height: "94vh"  }}>
            <Box m={11} sx={{ width: "35%" }}>
                <motion.div
                    initial={{ opacity: 0, y: -350 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Typography variant='h2' color={"white"} textAlign={"center"}>
                        {" "}
                        Welcome T
                        <Typography variant='span' sx={{ color: "rgb(130, 113, 255)" }}>
                            o{" "}
                        </Typography>
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -550 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }}
                >
                    <LogoAnimation></LogoAnimation>
                </motion.div>
                <Typography
                    variant='h5'
                    textAlign={"center"}
                    color={"white"}
                    sx={{ width: "60%", margin: "auto" }}
                >
                    {" "}
                    We enable people to own a home and have a bright future.{" "}
                </Typography>
            </Box>
            <Box
                m={5}
                sx={{
                    boxShadow:
                        "0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1), 0px 16px 32px rgba(0, 0, 0, 0.1), 0px 32px 64px rgba(0, 0, 0, 0.1)",
                    width: "50%",
                    height: "400px",
                    backgroundImage:
                        "linear-gradient(to right, rgb(130, 113, 255), rgb(130, 133, 245))",
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "flex-end",
                    justifyContent: "space-evenly",
                }}
            >
                <Box sx={{ color: "white", textAlign: "center", fontSize: "65px" }}>
                    <motion.div transition={{ duration: 6 }}>{rounded}</motion.div>
                    <Typography variant='h3' sx={{ color: "white" }}>
                        Join our ever-growing community
                    </Typography>
                </Box>
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Typography variant='h5' textAlign={"center"} color={"white"} sx={{}}>
                        {" "}
                        We Will Launch Soon ..{" "}
                    </Typography>
                </motion.div>
            </Box>
        </Stack>
    );
}

export default HeroSection;
