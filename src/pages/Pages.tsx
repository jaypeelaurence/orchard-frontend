import { Suspense, useEffect } from 'react';
import AOS from 'aos';
import Loading from './Loading';
import { Route, Routes } from 'react-router-dom';
import _Routes from './Routes';
import Error from './Error';

function Pages() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {
          _Routes.map(({ index, path, element }, _index) =>
            <Route
              key={_index}
              path={path}
              index={Boolean(index)}
              element={element?.()}
            />
          )
        }
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </Suspense>
  );
}

export default Pages;
