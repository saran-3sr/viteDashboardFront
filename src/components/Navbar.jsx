import {LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search,SettingsOutlined, ArrowDropDownOutlined} from "@mui/icons-material"
import FlexBetween from "./FlexBetween"
import { useDispatch } from "react-redux"
import { setMode } from "../state"
import { useState } from "react"
import { AppBar, Toolbar, useTheme } from "@mui/material"
function Navbar() {
    const dispatch=useDispatch()
    const theme=useTheme()
  return (
    <AppBar
    sx={{
        position:'static',
        background:"none",
        boxShadow:"none"
    }}
    >
        <Toolbar sx={{justifyContent:'space-between'}}>
            {/* LEFT SIDE */}
            
        </Toolbar>
    </AppBar>
  
  )
}

export default Navbar