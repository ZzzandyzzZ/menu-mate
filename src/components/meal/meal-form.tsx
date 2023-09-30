'use client'

import { useRouter } from 'next/navigation'

import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  InputAdornment,
  MenuItem,
  TextField
} from '@mui/material'

import { WeekDays } from '@/types'
import { useState } from 'react'

interface Props {
  buttonText: string
  currMealName?: string
  currWeekdate?: WeekDays | ''
}

const handleSearchClick = async (): Promise<void> => {
  try {
    // const images = await fetchSerpapiImages(dishName)
    // setDishImages(images)
  } catch (error) {
    console.error(error)
  }
}

const dishImages = [
  { img: 'https://www.deliciosi.com/images/2200/2235/arroz-verde-peruano-665.webp', title: 'test' }
]

export const MealForm = ({ buttonText, currMealName = '', currWeekdate = '' }: Props) => {
  const [mealName, setMealName] = useState(currMealName)
  const [weekdate, setWeekdate] = useState(currWeekdate)
  const router = useRouter()
  const handleClick = (): void => {
    router.push('/meals/proposals')
    // if (type === 'add') {
    //   // addDishToList({
    //   //   id: crypto.randomUUID() as UUID,
    //   //   dishName,
    //   //   weekday,
    //   //   imageUrl: '',
    //   //   accepted: false,
    //   //   proposerName
    //   // })
    //   router.push('/proposals')
    // } else {
    //   // updateDishOnList({ id, dish: { dishName, weekday } })
    //   router.push('/proposals')
    // }
  }
  return (
    <Box component="form">
      <TextField
        fullWidth
        label="Nombre del plato"
        sx={{ my: 1 }}
        size="small"
        value={mealName}
        onChange={(e) => {
          setMealName(e.target.value)
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  void handleSearchClick()
                }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <TextField
        fullWidth
        select
        defaultValue=""
        label="Dia de la semana"
        size="small"
        value={weekdate}
        onChange={(e) => {
          setWeekdate(e.target.value as WeekDays)
        }}
      >
        {Object.values(WeekDays).map((option) => {
          return (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          )
        })}
      </TextField>
      <ImageList cols={2}>
        {dishImages.slice(0, 6).map(({ img, title }) => (
          <ImageListItem key={img} sx={{ bgcolor: '#F6F4EB' }}>
            <img src={img} alt={title} />
          </ImageListItem>
        ))}
      </ImageList>
      <Button fullWidth variant="outlined" sx={{ mb: 3 }} onClick={handleClick}>
        {buttonText}
      </Button>
    </Box>
  )
}
