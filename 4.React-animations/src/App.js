import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from 'react-router-dom';
import Liste from './Pages/Liste/Liste';
import Scroll from './Pages/Scroll/Scroll';
import StateAnim from './Pages/StateAnim/StateAnim';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className='global-container'>
        <Navbar />
        <Switch>
          <Route path='/' element={<Liste />}>
            Liste
          </Route>
          <Route path='/scroll' element={<Scroll />}>
            Scroll
          </Route>
          <Route path='/stateanim' element={<StateAnim />}>
            StateAnim
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
