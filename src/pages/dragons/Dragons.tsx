import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelectors'
import { ADragon } from '../../types/types'
import Dragon from '../../components/dragon/Dragon'
import Spinner from '../../components/spinner/Spinner'
import { getDragons } from '../../features/dragon/dragonSlice'

const Dragons = () => {
  const dispatch = useAppDispatch()

  let refresh = useAppSelector((state) => state.dragons.refresh)

  useEffect(() => {
    if (refresh === 0) {
      dispatch(getDragons())
    }
  }, [dispatch])

  let { loading, data } = useAppSelector((state) => state.dragons)
  data?.forEach((item) => console.log(item.booked))
  return (
    <section className="container-fluid">
      {loading ? (
        <Spinner />
      ) : (
        data &&
        data.map((dragon: JSX.IntrinsicAttributes & ADragon) => (
          <Dragon key={dragon.id} {...dragon} />
        ))
      )}
    </section>
  )
}

export default Dragons
