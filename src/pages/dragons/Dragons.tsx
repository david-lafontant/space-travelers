import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelectors'
import { ADragon } from '../../types/types'
import Dragon from '../../components/dragon/Dragon'
import { getDragons } from '../../features/dragon/dragonSlice'

const Dragons = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getDragons())
  }, [dispatch])

  let { loading, data } = useAppSelector((state) => state.dragons)
  data?.forEach((item) => console.log(item.booked))
  return (
    <section className="container-fluid">
      {data?.map((dragon: JSX.IntrinsicAttributes & ADragon) => (
        <Dragon key={dragon.id} {...dragon} />
      ))}
    </section>
  )
}

export default Dragons
