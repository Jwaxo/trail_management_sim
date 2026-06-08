import logo from './logo.svg';
import './style/app.css';
import seedrandom from 'seedrandom';

import Mapgrid from './lib/Interface/Mapgrid';
import Parkinfo from './lib/Interface/Parkinfo';
import Tilebox from './lib/Interface/Tilebox';
import Toolbar from './lib/Interface/Toolbar';
import Config from './Config';

seedrandom(Config.seed, { global: true });

function App() {
  return (
    <div className="interface">
      <header className="interface-header">
        <h1>Trail Management Simulator</h1>
      </header>
      <Mapgrid />
      <Parkinfo />
      <Tilebox />
      <Toolbar />
    </div>
  );
}

export default App;
