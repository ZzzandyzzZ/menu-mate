'use client'

import { useState } from 'react'

import EventIcon from '@mui/icons-material/Event'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

import WeekListItem from './week-list-item'

interface Props {
  month: string
  weeks: Set<string>
}

export default function MonthListItem({ month, weeks }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <ListItemButton
        onClick={() => {
          setOpen(!open)
        }}
      >
        <ListItemIcon>
          <EventIcon />
        </ListItemIcon>
        <ListItemText primary={month} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {Array.from(weeks).map((week) => (
            <WeekListItem key={week} week={week} />
          ))}
        </List>
      </Collapse>
    </>
  )
}
