import { useState } from "react"
import { Box,useMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
function Layout() {
    useState
  return (
    <Box width="100%" height="100%">
        <Navbar/>
        <Outlet/>
    </Box>
  )
}

export default Layout