import { getItemByKey } from "./localStorage"

export const isObjEmpty = (obj: any): boolean => {
  return JSON.stringify(obj) === JSON.stringify({})
}

export const getAccessTokenForWs = (): string => {
  return getItemByKey('accessToken')?.replace("Bearer ", "");
}