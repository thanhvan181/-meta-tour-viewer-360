import HomePage from '@/components/home';
import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <main>
      <ul className="menu">
        <li>
          <a href="" className="menu__link">
            menu 1
          </a>
        </li>
        <li>
          <a href="" className="menu__link">
            menu 2
          </a>
        </li>
        <li>
          <a href="" className="menu__link">
            menu 3
          </a>
        </li>
        <li>
          <a href="" className="menu__link">
            menu 4
          </a>
        </li>
      </ul>
      <HomePage />
    </main>
  );
};

export default Home;
