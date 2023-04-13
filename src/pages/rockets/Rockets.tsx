import { useEffect } from 'react'
// import { useGetRocketsQuery } from '../../services/rocket/rocketService';
import { getRockets } from '../../features/rocket/rocketSLice'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelectors'
import Rocket from '../../components/rocket/Rocket'
import { ARocket } from '../../types/types'

const Rockets = () => {
  // const { data, isLoading, error } = useGetRocketsQuery(null);
  // if (isLoading) {
  //   return <div>Loading rockets...</div>;
  // }

  // if (error) {
  //   return <h1>ERROR</h1>;
  // }
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getRockets())
  }, [dispatch])

  let { loading, data } = useAppSelector((state) => state)
  
  return (
    <section className="container-fluid">
      {data?.map((rocket: JSX.IntrinsicAttributes & ARocket) => (
        <Rocket key={rocket.id} {...rocket} />
      ))}
    </section>
  )
}

export default Rockets
