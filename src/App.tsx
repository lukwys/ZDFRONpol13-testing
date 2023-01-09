import { BlogList } from './pages/blogs-list/BlogList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Counter } from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      <BlogList />
      <Counter />
    </div>
  );
}

export default App;
