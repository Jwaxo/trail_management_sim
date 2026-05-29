import { useState } from 'react';
import Tileinfo from '../Classes/Tileinfo';

export default function Mapgrid() {

  const test_width = 20;
  const test_height = 20;

  // const [grid, setGrid] = useState([]);
  const buildgrid = [[]];

  for (let x = 0;x < test_height;x++) {
    buildgrid[x] = [];
    for (let y = 0;y < test_width;y++) {
      buildgrid[x][y] = new Tileinfo({x: x, y: y});
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
