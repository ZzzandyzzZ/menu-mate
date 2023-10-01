'use client'

import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputAdornment, TextField } from '@mui/material'

interface Props {
  mealName: string
  setMealName: (value: string) => void
}

export const InputSearchField = ({ mealName, setMealName }: Props) => {
  const handleSearchClick = async (): Promise<void> => {
    try {
      // const images = await fetchSerpapiImages(dishName)
      // setDishImages(images)
    } catch (error) {
      console.error(error)
    }
  }
  return (
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
  )
}
