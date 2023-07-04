import { Box } from "@mui/material";
import React from "react";
import Hoteles from "./Hoteles/Hoteles";


export default function Inicio () {
    return(
        <Box>
        <Hoteles key={Hoteles}/>
    </Box>
    );
}