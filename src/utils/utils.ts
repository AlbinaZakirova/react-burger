import { format, isToday, isYesterday } from "date-fns";
import { getItemByKey } from "./localStorage"
import { TOptionsDate } from "./types/types";

export const isObjEmpty = (obj: any): boolean => {
  return JSON.stringify(obj) === JSON.stringify({})
}

export const getAccessTokenForWs = (): string => {
  return getItemByKey('accessToken')?.replace("Bearer ", "");
}

export const dateWhen = (date: Date) => {
  if (isToday(date)) {
      return 'Сегодня'
  } else if (isYesterday(date)) {
      return 'Вчера'
  } else {
      return format((date), 'MM.dd.yyyy');
  }
}

export const dateFormat = (date: string) => {
  const options: TOptionsDate = {
      timezone: 'Moscow',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: "short",
  }

  return new Date(Date.parse(date)).toLocaleString("ru", options)
}