import React from 'react'

const Dragons = React.lazy(() => import('./dragons/Dragons'))
const Missions = React.lazy(() => import('./missions/Missions'))
const Rockets = React.lazy(() => import('./rockets/Rockets'))
const Profile = React.lazy(() => import('./profile/Profile'))

export { Dragons, Missions, Rockets, Profile }
