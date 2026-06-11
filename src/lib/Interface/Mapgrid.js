import { useState } from 'react';
import Tileinfo from '../Classes/Tileinfo';
import Config from '../../Config'
import Utilities from '../../Utilities';

export default function Mapgrid() {

  const test_width = 20;
  const test_height = 20;

  // const [grid, setGrid] = useState([]);
  const buildgrid = [[]];

  // We'll keep it simple for now, and have all four corners be at the same
  // elevation for each tile.
  // Our first tile will be halfway up to keep things even simpler.
  let elevation = Math.floor(Config.map.max_height / 2);

  for (let x = 0;x < test_height;x++) {
    buildgrid[x] = [];
    for (let y = 0;y < test_width;y++) {
      buildgrid[x][y] = new Tileinfo({x: x, y: y, elevations: [elevation, elevation, elevation, elevation]});
      // Eventually our test will evolve so that tiles are never more than 1
      // higher or lower than all four surrounding tiles, but that requires
      // checking other tiles which is a whole bucket of worms.

      // For now we put the next tile 1 higher, 1 lower, or equal to this tile.
      switch (Utilities.pickFromRange(3)) {
        case 0:
          if (elevation > 0) {
            elevation--;
          }
          break;

        case 2:
          if (elevation < Config.map.max_height) {
            elevation++;
          }
          break;

        default:
          break;
      }
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
