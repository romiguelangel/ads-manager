import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Root.css';

const Root = () => {
  const navigate = useNavigate();

  return (
    <div className="layout">
      <header>
        <nav>
          <button onClick={() => navigate(-1)}>Go back</button>
          {'·  '}
          <Link to="/products">Products</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export { Root };
