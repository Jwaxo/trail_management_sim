import Config from '../../Config';

export default function Tile({x, y, slope_info}) {
  const id = `${x}x${y}`;
  const nature = null;
  const soil = null;
  const amenities = [];
  const trails = [];
  const erotion = 0.0;
  const overgrowth = 0.0;
  const selected = false;

  // Eventually we need to create individual tile shapes based on the results.
  // For now assume all tiles are flat.

  const classes = [
    'tile',
    'tile--shape-' + slope_info.shape,
    'tile--' + (slope_info.lowest >= Config.map.sea_level ? 'raised' : 'lowered'),
  ].sort().join(' ').trim();

  const soil_style = {
    opacity: (slope_info.lowest > Config.map.sea_level ? (1 - (slope_info.lowest / (Config.map.max_height - Config.map.sea_level))) : (slope_info.lowest / Config.map.sea_level)),
  };

  console.log(`for tile ${id} opacity is ${soil_style.opacity}, because lowest is ${slope_info.lowest} and sea level is ${Config.map.sea_level}`)

  return (
    <div className={ classes } data-tileid={ id }>
      <div className="tile-soil" style={ soil_style }>{ slope_info.lowest }</div>
      <div className="tile-elevation">{ slope_info.lowest }</div>
    </div>
  )
}
