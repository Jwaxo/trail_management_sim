import Tile from "../Interface/Tile";

class Tileinfo {
  x = 0;
  y = 0;
  id = ``;
  elevations = [0,0,0,0];
  nature = null;
  soil = null;
  amenities = [];
  trails = [];
  erosion = 0.0;
  overgrowth = 0.0;
  selected = false;

  constructor(props) {
    if (props.x) {
      this.setX(props.x);
    }
    if (props.y) {
      this.setY(props.y);
    }
    if (props.elevations) {
      this.setElevations(props.elevations);
    }
    if (props.nature) {
      this.setNature(props.nature);
    }
    if (props.soil) {
      this.setSoil(props.soil);
    }
    if (props.trails) {
      this.setTrails(props.trails);
    }
    if (props.erosion) {
      this.setErosion(props.erosion);
    }
    if (props.overgrowth) {
      this.setOvergrowth(props.overgrowth);
    }
    if (props.selected) {
      this.setSelected(props.selected);
    }
  }

  setX(x) {
    this.x = x;
  }
  setY(y) {
    this.y = y;
  }
  setElevations(elevations) {
    this.elevations = elevations;
  }
  setNature(nature) {
    this.nature = nature;
  }
  setSoil(soil) {
    this.soil = soil;
  }
  setTrails(trails) {
    this.trails = trails;
  }
  setErosion(erosion) {
    this.erosion = erosion;
  }
  setOvergrowth(overgrowth) {
    this.overgrowth = overgrowth;
  }
  setSelected(selected) {
    this.selected = selected;
  }

  render() {
    return (
      <Tile x={this.x} y={this.y} elevations={this.elevations} />
    );
  }

}

export default Tileinfo;
