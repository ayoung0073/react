import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MainPage from './pages/MainPage'
import BoardWritePage from './pages/BoardWritePage'
import BoardDetailPage from './pages/BoardDetailPage'

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/write" component={BoardWritePage}/>
        <Route exact path="/board/:bno" component={BoardDetailPage}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
