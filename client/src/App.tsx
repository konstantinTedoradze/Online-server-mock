import { Container } from '@material-ui/core';
import './App.css';
import ServerList from './components/serverList/ServerList';


function App() {
  return (
    <div className="App">
    <Container>
       {<ServerList/>}
    </Container>
    </div>
  );
}

export default App;
