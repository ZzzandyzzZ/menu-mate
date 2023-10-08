import { WeekDays } from '@/types/enums'

export function getMondayDate(date: Date) {
  const tmpDate = date
  const day = tmpDate.getUTCDay()
  const diff = tmpDate.getDate() - day + (day === 0 ? -6 : 1)
  return new Date(tmpDate.setDate(diff))
}

export const getDateFromWeeday = (weekday: WeekDays) => {
  const mondayStarts = (new Date().getUTCDay() + 6) % 7
  const diffDays = mondayStarts - getNumberFromWeekday(weekday)
  const dateOffset = 24 * 60 * 60 * 1000 * diffDays
  const myDate = new Date()
  myDate.setTime(myDate.getTime() - dateOffset)
  return myDate
}

export const getWeekDayFromNumber = (dayNumber: number): WeekDays => {
  switch (dayNumber) {
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
    case 0:
      return WeekDays.Sunday
    default:
      throw new Error('Invalid day number')
  }
}

export const getNumberFromWeekday = (weekday: WeekDays): number => {
  switch (weekday) {
    case WeekDays.Monday:
      return 0
    case WeekDays.Tuesday:
      return 1
    case WeekDays.Wednesday:
      return 2
    case WeekDays.Thursday:
      return 3
    case WeekDays.Friday:
      return 4
    case WeekDays.Saturday:
      return 5
    case WeekDays.Sunday:
      return 6
    default:
      throw new Error('Invalid day number')
  }
}

export const getWeedayStringData = (weekday: WeekDays) => {
  const weekdayDate = getDateFromWeeday(weekday)
  return {
    weekdayStr: weekdayDate.toLocaleString('sv').split(' ')[0],
    weekStartStr: getMondayDate(weekdayDate).toLocaleString('sv').split(' ')[0]
  }
}
