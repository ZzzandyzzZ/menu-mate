'use client'

import { imgSearchService } from '@/dependencies'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputAdornment, TextField } from '@mui/material'

interface Props {
  mealName: string
  setMealName: (value: string) => void
}

export const InputSearchField = ({ mealName, setMealName }: Props) => {
  const { getByQuery } = imgSearchService
  const handleSearchClick = async (): Promise<void> => {
    void getByQuery(mealName)
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
