import { WeekDays } from '@/enums'

export function getMondayDate(date: Date) {
  const tmpDate = new Date(date)
  const day = tmpDate.getDay()
  const diff = tmpDate.getDate() - day + (day === 0 ? -6 : 1)
  return new Date(tmpDate.setDate(diff))
}

export function getWeekDayFromNumber(dayNumber: number): WeekDays {
  switch (dayNumber) {
    case 0:
      return WeekDays.Sunday
    case 1:
      return WeekDays.Monday
    case 2:
      return WeekDays.Tuesday
    case 3:
      return WeekDays.Wednesday
    case 4:
      return WeekDays.Thursday
    case 5:
      return WeekDays.Friday
    case 6:
      return WeekDays.Saturday
    default:
      throw new Error('Invalid day number')
  }
}
