export const isObjEmpty = (obj: any): boolean => {
  return JSON.stringify(obj) === JSON.stringify({})
}