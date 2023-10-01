'use client'

import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  InputAdornment,
  MenuItem,
  TextField,
  Typography
} from '@mui/material'
import { useRouter } from 'next/navigation'

import { mealService } from '@/dependencies'

import { WeekDays } from '@/types'
import { useState, type FormEvent } from 'react'

interface Props {
  buttonText: string
  currMealName?: string
  currWeekday?: WeekDays | ''
}

const handleSearchClick = async (): Promise<void> => {
  try {
    // const images = await fetchSerpapiImages(dishName)
    // setDishImages(images)
  } catch (error) {
    console.error(error)
  }
}

const imageUrl = 'https://www.deliciosi.com/images/2200/2235/arroz-verde-peruano-665.webp'

const dishImages = [
  { img: 'https://www.deliciosi.com/images/2200/2235/arroz-verde-peruano-665.webp', title: 'test' }
]

export const MealForm = ({ buttonText, currMealName = '', currWeekday = '' }: Props) => {
  const [mealName, setMealName] = useState(currMealName)
  const [weekday, setWeekday] = useState(currWeekday)
  const { createMeal } = mealService
  const router = useRouter()

  const CustomImageList = () => {
    return (
      <ImageList cols={2}>
        {dishImages.slice(0, 6).map(({ img, title }) => (
          <ImageListItem key={img} sx={{ bgcolor: '#F6F4EB' }}>
            <img src={img} alt={title} />
          </ImageListItem>
        ))}
      </ImageList>
    )
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createMeal({ imageUrl, mealName, weekday }).then(() => {
      router.push('/meals/proposals')
    })
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
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
        value={weekday}
        onChange={(e) => {
          setWeekday(e.target.value as WeekDays)
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
      {dishImages.length === 0 ? (
        <Typography textAlign="center" py={3}>
          Sin resultados de imagenes
        </Typography>
      ) : (
        <CustomImageList />
      )}
      <Button fullWidth variant="outlined" sx={{ mb: 3 }} type="submit">
        {buttonText}
      </Button>
    </Box>
  )
}
