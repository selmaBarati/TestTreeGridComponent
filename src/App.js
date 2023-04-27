import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import store from './redux/Store';
import './App.css';
import HooksContainerCakes from './components/HooksContainerCakes';
import HooksIceCreamsContainer from './components/HooksIceCreamsContainer';
import TestTreeGrid from './components/TestTreeGrid';


function App() {
  return (
  //  <Provider store={store}>
  //    <div className="App">
  //      {/* <CakeContainer/> */}
  //      <HooksContainerCakes/>
  //      <HooksIceCreamsContainer/>
  //   </div>
  //  </Provider>
  <div>
    <TestTreeGrid/>
  </div>
  );
}

export default App;
