import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'
import Movies from './components/Movies';
import MovieSingle from './components/MovieSingle'
function App() {
 
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path="/movie/:id" component={MovieSingle} />
        </Switch>
    </Router>
    </>
    
  );
}

export default App;
