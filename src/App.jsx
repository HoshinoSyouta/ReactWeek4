import { useState } from 'react';
import ProductPage from './pages/ProductPage';
import Loading from './pages/Loading';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      {isAuth ? (
        <ProductPage setIsAuth={setIsAuth} />
      ) : (
        <Loading setIsAuth={setIsAuth} />
      )}
    </>
  );
}
export default App;
