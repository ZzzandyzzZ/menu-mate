'use client'

import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Link as MuiLink,
  Toolbar,
  Typography
} from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'

const drawerWidth = 240
const mainTitle = 'Menu Mate'
const navItems = [
  { href: '/meals', showText: 'Inicio' },
  { href: '/meals/proposals', showText: 'Propuestas' },
  { href: '/meals/new', showText: 'Agregar Comida' }
  //   { href: '/meals/history', showText: 'Historial' }
]

export const DrawerAppBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {mainTitle}
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ href, showText }) => (
          <ListItem key={href} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', textDecoration: 'none' }}>
              <MuiLink underline="none" component={Link} href={href}>
                {showText}
              </MuiLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'block' } }}>
            {mainTitle}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(({ href, showText }) => (
              <MuiLink key={href} component={Link} href={href}>
                <Button sx={{ color: '#fff' }}>{showText}</Button>
              </MuiLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}
