import { ImageList, ImageListItem } from '@mui/material'

interface DishImage {
  img: string
  title: string
}

interface Props {
  dishImages: DishImage[]
}

export const CustomImageList = ({ dishImages }: Props) => {
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
