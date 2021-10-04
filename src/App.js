
import './App.css';
import SideBar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import{BrowserRouter,Route} from 'react-router-dom';
import Application from './Components/Application';
import DeviceCategory from './Components/DeviceCategory';
import Purchase from './Components/Purchase';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
  
   
    <Route exact path='/' component={Application}/>
    <Route path='/DeviceCategory' component={DeviceCategory}/>
    <Route path='/Purchase' component={Purchase}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
