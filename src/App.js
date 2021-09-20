import Header from './components/Header/Header'
import Gallery from './Pages/Gallery/Gallery';
import Colllections from './Pages/Colllections/Colllections';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Route } from 'react-router-dom';
import {Switch} from 'react-router-dom';
import MainNav from './components/MainNav/MainNav'
import './App.css';

function App() {
  return (
    
        <BrowserRouter>
    <Header/>
    <MainNav/>
    <div className="app">
     <Container>
         <Switch>
           <Route path='/' component={Gallery} exact/>
           <Route path='/collections' component={Colllections}/>
           
         </Switch>
     </Container>
    </div>

    </BrowserRouter>
    
  );
}

export default App;
