'use client'

import Link from 'next/link'

import TripOriginIcon from '@mui/icons-material/TripOrigin'
import { ListItemButton, ListItemIcon, ListItemText, Link as MuiLink } from '@mui/material'

interface Props {
  week: string
}

export default function WeekListItem({ week }: Props) {
  return (
    <MuiLink
      underline="none"
      component={Link}
      href={`/meals?week_start=${week}`}
      color="text.primary"
    >
      <ListItemButton sx={{ pl: 4, width: '100%' }} component={'button'}>
        <ListItemIcon>
          <TripOriginIcon />
        </ListItemIcon>
        <ListItemText primary={week} />
      </ListItemButton>
    </MuiLink>
  )
}
