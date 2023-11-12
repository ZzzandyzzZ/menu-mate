'use client'

import { useEffect } from 'react'

import SearchIcon from '@mui/icons-material/Search'
import { CircularProgress, IconButton, InputAdornment, TextField } from '@mui/material'

import { imgSearchService } from '@/dependencies'
import { useSafeService } from '@/hooks'
import { useStore } from '@/store'

import type { ImgMealData } from '@/types'

interface Props {
  mealName: string
  setMealName: (value: string) => void
}

export const InputSearchField = ({ mealName, setMealName }: Props) => {
  const setImageSearchResults = useStore((state) => state.setImageSearchResults)
  const setGlobalError = useStore((state) => state.setGlobalError)

  const { loading, result, runner, error } = useSafeService<string, ImgMealData[]>({
    execute: imgSearchService.getByQuery,
    data: mealName
  })

  useEffect(() => {
    if (error != null) {
      setGlobalError('Error obteniendo imagenes: ' + error?.toString())
    }
    if (result != null) {
      setImageSearchResults(result)
    }
  }, [result, error])

  const handleSearchClick = async () => {
    if (mealName === '') {
      setGlobalError('Agregar un nombre de plato')
      return
    }
    void runner()
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
            {loading ? (
              <CircularProgress size={30} />
            ) : (
              <IconButton
                onClick={() => {
                  void handleSearchClick()
                }}
              >
                <SearchIcon />
              </IconButton>
            )}
          </InputAdornment>
        )
      }}
    />
  )
}
