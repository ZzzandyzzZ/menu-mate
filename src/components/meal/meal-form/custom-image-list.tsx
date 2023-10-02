'use client'

import { ImageList, ImageListItem, Pagination, Stack, Typography } from '@mui/material'

import { useStore } from '@/store'
import { useState } from 'react'

const listSize = 6

export const CustomImageList = () => {
  const imageSearchResults = useStore((state) => state.imageSearchResults)
  const [page, setPage] = useState(1)
  const [srcWithErrors, setSrcWithErrors] = useState<string[]>([])
  const firstRange = (page - 1) * listSize
  if (imageSearchResults.length === 0) {
    return (
      <Typography textAlign="center" py={3}>
        Sin resultados de imagenes
      </Typography>
    )
  }
  return (
    <>
      <Stack alignItems="center" pt={1}>
        <Pagination
          count={Math.round(imageSearchResults.length / 6)}
          page={page}
          onChange={(event: React.ChangeEvent<unknown>, value: number) => {
            setPage(value)
          }}
          siblingCount={0}
          variant="outlined"
          color="standard"
        />
      </Stack>
      <ImageList cols={2}>
        {imageSearchResults.slice(firstRange, firstRange + listSize).map(({ imgSrc, title }) => {
          if (srcWithErrors.includes(imgSrc)) return null
          return (
            <ImageListItem key={imgSrc} sx={{ bgcolor: '#F6F4EB' }}>
              <img
                src={imgSrc}
                alt={title}
                onError={() => {
                  setSrcWithErrors([...srcWithErrors, imgSrc])
                }}
              />
            </ImageListItem>
          )
        })}
      </ImageList>
    </>
  )
}
