type ARocket = {
  booked: boolean
  active: boolean
  boosters: number
  company: string
  cost_per_launch: number
  country: string
  description: string
  diameter: { meters: number; feet: number }
  engines: any
  first_flight: string
  first_stage: any
  flickr_images: string[]
  height: { meters: number; feet: number }
  id: number
  landing_legs: { number: number; material: string | null }
  mass: { kg: number; lb: number }
  payload_weights: any
  rocket_id: string
  rocket_name: string | any
  rocket_type: string
  second_stage: any
  stages: number
  success_rate_pct: number
  wikipedia: string
}

type ADragon = {
  booked: boolean
  id: string
  name: string
  type: string
  active: boolean
  crew_capacity: number
  sidewall_angle_deg: number
  orbit_duration_yr: number
  dry_mass_kg: number
  dry_mass_lb: number
  first_flight: string
  heat_shield: {
    material: number
    size_meters: number
    temp_degrees: number
    dev_partner: string
  }
  thrusters: [
    {
      type: string
      amount: number
      pods: number
      fuel_1: string
      fuel_2: string
      isp: number
      thrust: {
        kN: number
        lbf: number
      }
    }
  ]
  launch_payload_mass: {
    kg: number
    lb: number
  }
  launch_payload_vol: {
    cubic_meters: number
    cubic_feet: number
  }
  return_payload_mass: {
    kg: number
    lb: number
  }
  return_payload_vol: {
    cubic_meters: number
    cubic_feet: number
  }
  pressurized_capsule: {
    payload_volume: {
      cubic_meters: number
      cubic_feet: number
    }
  }
  trunk: {
    trunk_volume: {
      cubic_meters: number
      cubic_feet: number
    }
    cargo: {
      solar_array: number
      unpressurized_cargo: boolean
    }
  }
  height_w_trunk: {
    meters: number
    feet: number
  }
  diameter: {
    meters: number
    feet: number
  }
  flickr_images: string[]
  wikipedia: string
  description: string
}

type AMission = {
  booked: boolean
  mission_name: string
  mission_id: string
  manufacturers: string[]
  payload_ids: string[]
  wikipedia: string
  website: string
  twitter: string
  description: string
}

type RocketType = ARocket[]
type DragonType = ADragon[]
type MissionType = AMission[]

export type { ARocket, RocketType, ADragon, DragonType, AMission, MissionType }
