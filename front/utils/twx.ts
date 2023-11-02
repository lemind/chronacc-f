import { ClassNameValue, twMerge } from "tailwind-merge"

export const twx = (...classLists: ClassNameValue[]) => {
  return twMerge(classLists)
}
