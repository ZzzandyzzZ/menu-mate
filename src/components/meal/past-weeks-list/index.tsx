'use client'
import { Divider, ListSubheader } from '@mui/material'
import List from '@mui/material/List'

import MonthListItem from './month-list-item'

interface Props {
  groupedWeeks: Record<string, Set<string>>
}

export function PastWeeksList({ groupedWeeks }: Props) {
  return (
    <List
      sx={{ borderRadius: 3, bgcolor: 'background.paper' }}
      component="ul"
      subheader={
        <ListSubheader component="div" sx={{ borderRadius: 3 }}>
          Selecciona una semana
        </ListSubheader>
      }
    >
      {Object.entries(groupedWeeks).map(([month, weeks], index) => (
        <li key={index}>
          {index !== 0 && <Divider />}
          <MonthListItem month={month} weeks={weeks} />
        </li>
      ))}
    </List>
  )
}
