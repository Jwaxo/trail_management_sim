
export default function Tile({x, y}) {
  const id = `${x}x${y}`;
  const elevations = [0,0,0,0];
  const nature = null;
  const soil = null;
  const amenities = [];
  const trails = [];
  const erotion = 0.0;
  const overgrowth = 0.0;
  const selected = false;

  return (
    <div className="tile">{ x }, { y }</div>
  )
}
