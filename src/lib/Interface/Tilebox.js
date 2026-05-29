
export default function Tilebox(tile = null) {
  return (
    <div className="interface-tilebox">
      { tile === null ? <em>Select a tile to learn more about it.</em> : <p>blah</p> }
    </div>
  )
}
