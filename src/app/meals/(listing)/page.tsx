import { cookies } from 'next/headers'
import { Box, Stack, Typography } from '@mui/material'
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone'
import BuildCircleTwoToneIcon from '@mui/icons-material/BuildCircleTwoTone'

import { COOKIE_JWT_NAME } from '@/constants'
import { getJwtData } from '@/lib'
import { InfoMealCard, RedirectButton } from '@/components'
import { mealService } from '@/dependencies'

export default async function MealsPage() {
  const jwtToken = cookies().get(COOKIE_JWT_NAME)
  const jwtData = await getJwtData(jwtToken?.value, process.env.JWT_KEY)
  const meals = await mealService.getMeals(jwtData?.roomId as string)
  return (
    <>
      <Box display="flex" justifyContent="center" py="5px">
        <Typography variant="h4">Menu Semanal</Typography>
      </Box>
      <Stack width="100%" spacing={1} mb={5}>
        {meals.map((meal) => (
          <InfoMealCard key={meal.id} {...meal} />
        ))}
      </Stack>
      <Box sx={{ position: 'fixed', bottom: 35, right: 2 }}>
        <RedirectButton redirect="/meals/new" fontSize="40px" Icon={AddCircleTwoToneIcon} />
      </Box>
      <Box sx={{ position: 'fixed', bottom: 35, right: 53 }}>
        <RedirectButton redirect="/meals/proposals" fontSize="40px" Icon={BuildCircleTwoToneIcon} />
      </Box>
    </>
  )
}
