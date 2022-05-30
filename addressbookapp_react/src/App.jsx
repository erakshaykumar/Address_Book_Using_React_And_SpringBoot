import './App.css';
import Form from './components/Form';
import Home from './components/Home';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
       <BrowserRouter>
       <Switch>
         <Route exact path='/form' component={Form}></Route>
         <Route path='/'  component={Home}></Route>
         <Route path='/home' component={Home}></Route>
       </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;