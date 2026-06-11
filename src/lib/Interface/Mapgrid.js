import { useState } from 'react';
import Tileinfo from '../Classes/Tileinfo';
import Config from '../../Config'

export default function Mapgrid() {

  const test_width = 20;
  const test_height = 20;

  // const [grid, setGrid] = useState([]);
  const buildgrid = [[]];

  // We'll keep it simple for now, and have all four corners be at the same
  // elevation for each tile.
  // Sea level
  const elevation = Math.floor(Config.map.max_height / 2);

  for (let x = 0;x < test_height;x++) {
    buildgrid[x] = [];
    for (let y = 0;y < test_width;y++) {
      buildgrid[x][y] = new Tileinfo({x: x, y: y, elevations: [elevation, elevation, elevation, elevation]});
    }
  }

  function save() {

  }

  function load() {

  }

  return (
    <div className="interface-mapgrid mapgrid">
      {buildgrid.map(row => (
        <div className="mapgrid-row">
          {row.map(tile => (
            <>{ tile.render() }</>
          ))}
        </div>
      ))}
    </div>
  )
}
