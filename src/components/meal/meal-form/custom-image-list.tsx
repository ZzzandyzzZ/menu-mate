import { ImageList, ImageListItem, Typography } from '@mui/material'

import { useStore } from '@/store'

export const CustomImageList = () => {
  const imageSearchResults = useStore((state) => state.imageSearchResults)
  return imageSearchResults.length === 0 ? (
    <Typography textAlign="center" py={3}>
      Sin resultados de imagenes
    </Typography>
  ) : (
    <ImageList cols={2}>
      {imageSearchResults.slice(0, 6).map(({ img, title }) => (
        <ImageListItem key={img} sx={{ bgcolor: '#F6F4EB' }}>
          <img src={img} alt={title} />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
