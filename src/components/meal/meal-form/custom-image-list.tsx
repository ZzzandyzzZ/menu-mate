'use client'

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import {
  Box,
  CardActionArea,
  CardMedia,
  ImageList,
  ImageListItem,
  Pagination,
  Stack,
  Typography
} from '@mui/material'

import { useStore } from '@/store'
import { useState } from 'react'

const listSize = 6

export const CustomImageList = () => {
  const imageSearchResults = useStore((state) => state.imageSearchResults)
  const selectedSrc = useStore((state) => state.selectedSrc)
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
      <Typography textAlign="center" py={2}>
        Selecciona una sola imagen
      </Typography>
      <Stack alignItems="center">
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
            <CardActionArea key={imgSrc} sx={{ position: 'relative' }}>
              <Box
                fontSize="50px"
                left="50%"
                position="absolute"
                top="50%"
                zIndex={1}
                sx={{ transform: 'translate(-50%, -50%)' }}
                display={selectedSrc === imgSrc ? 'block' : 'none'}
              >
                <CheckCircleOutlineIcon color="success" fontSize="inherit" />
              </Box>
              <ImageListItem sx={{ bgcolor: '#F6F4EB' }}>
                <CardMedia
                  component="img"
                  // height="140"
                  image={imgSrc}
                  alt={title}
                  onError={() => {
                    setSrcWithErrors([...srcWithErrors, imgSrc])
                  }}
                  onClick={() => {
                    useStore.setState({ selectedSrc: imgSrc })
                  }}
                  sx={selectedSrc === imgSrc ? { opacity: 0.5, border: 'solid 3px green' } : {}}
                />
              </ImageListItem>
            </CardActionArea>
          )
        })}
      </ImageList>
    </>
  )
}
