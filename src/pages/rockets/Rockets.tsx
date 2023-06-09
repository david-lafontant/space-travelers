import { useEffect } from 'react';
import { getRockets } from '../../features/rocket/rocketSLice';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelectors';
import Rocket from '../../components/rocket/Rocket';
import Spinner from '../../components/spinner/Spinner';
import { ARocket } from '../../types/types';

const Rockets = () => {
  const dispatch = useAppDispatch();
  const refresh = useAppSelector((state) => state.rockets.refresh);

  useEffect(() => {
    if (refresh === 0) {
      dispatch(getRockets());
    }
  }, [dispatch]);

  const { loading, data } = useAppSelector((state) => state.rockets);

  return (
    <section className="container-fluid">
      {loading ? (
        <Spinner />
      ) : (
        data
        && data.map((rocket: JSX.IntrinsicAttributes & ARocket) => (
          <Rocket key={rocket.id} {...rocket} />
        ))
      )}
    </section>
  );
};

export default Rockets;
