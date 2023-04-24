import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPAddress from './IPAddress';

function App() {
  return (
    <div className="App">
      <Banner text="Sextant"/>
      <Exhibit heading="IP Addresses"> 
        <IPAddress type="IPv4" />
        <IPAddress type="IPv6" />
      </Exhibit>
    </div>
  );
}

export default App;
