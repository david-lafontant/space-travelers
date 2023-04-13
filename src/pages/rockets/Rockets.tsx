import { useEffect } from 'react'
import { getRockets } from '../../features/rocket/rocketSLice'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelectors'
import Rocket from '../../components/rocket/Rocket'
import { ARocket } from '../../types/types'

const Rockets = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getRockets())
  }, [dispatch])

  let { loading, data } = useAppSelector((state) => state)
  data?.forEach((item) => console.log(item.booked))

  return (
    <section className="container-fluid">
      {data?.map((rocket: JSX.IntrinsicAttributes & ARocket) => (
        <Rocket key={rocket.id} {...rocket} />
      ))}
    </section>
  )
}

export default Rockets
