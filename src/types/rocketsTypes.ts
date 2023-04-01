export type ARocket = {
  active:boolean
boosters: number
company: "SpaceX"
cost_per_launch:number
country: string
description:string
diameter: {meters: number, feet: number}
engines: any
first_flight: string
first_stage: any
flickr_images: string[]
height:{meters: number, feet: number}
id: number
landing_legs:{number: number, material: string |null}
mass:{kg: number, lb: number}
payload_weights: any
rocket_id:string
rocket_name:string | any
rocket_type: string
second_stage:any
stages:number
success_rate_pct:number
wikipedia:string
};

type RocketType = ARocket[];

export default RocketType;