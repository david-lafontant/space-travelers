import { RocketType, DragonType, MissionType } from '../types/types'

type Listing = RocketType | DragonType | MissionType

export const quantity = (element: any) => {
  let result = [] as Listing
  if (element) {
    result = element.filter((item: any) => item.booked === true)
  }

  return result.length > 0
}

export default quantity
