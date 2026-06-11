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
      <Tile x={this.x} y={this.y} slope_info={this.determineSlope(this.elevations)} />
    );
  }


  /**
   * Analyze the elevations to determine what kind of slope we have, and which
   * way it is facing.
   *
   * @param {Array(int)} elevations
   *
   * Shapes:
   * 0 = flat,
   * 1 = straight slope,
   * 2 = high corner (flat with one raised corner),
   * 3 = low corner (flat with one low corner),
   * 4 = diagonal slope.
   * 5 = valley (two opposing corners high).
   * Dirs:
   * 0 = North (default)
   * 1 = East
   * 2 = South
   * 3 = West
   *
   * @returns {
   *  shape: Int,
   *  dir: Int,
   *  lowest: Int
   * }
   */
  determineSlope(elevations) {

    let shape = 0;
    let dir = 0;
    let highest = 0;
    let lowest = 0;
    const amounts = [0,0,0,0];

    // Go over each corner to see how many other corners are the same height, and
    // fill in the "amounts".
    for (let corner = 0;corner < elevations.length;corner++) {
      const elevation = elevations[corner];
      let equalcount = 0;
      for (let compare_corner = 0;compare_corner < elevations.length;compare_corner++) {
        if (corner === compare_corner) continue;
        if (elevation === elevations[compare_corner]) equalcount++;
      }
      amounts[corner] = equalcount;
      if (equalcount === 4) {
        // Return default (flat shape, facing North) since this is a flat tile.
        // Avoids a lot of bother later on.
        break;
      }

      if (highest === 0 || elevation > highest) {
        highest = elevation;
      }
      if (lowest === 0 || elevation < lowest) {
        lowest = elevation;
      }

    }

    // Examine "amounts", since that tells us everything we need to know about
    // the shape and direction.
    cornerloop:
    for (let corner = 0;corner < amounts.length;corner++) {
      const elevation = elevations[corner];

      switch (amounts[corner]) {
        case 4:
          // Should not have gotten here, but in any case, just boot us out.
          break cornerloop;

        case 3:
          // Shape is a corner; we can figure out which way it is facing with our
          // highest and lowest variables.
          if (elevation === highest) {
            shape = 2;
          }
          else if (elevation === lowest) {
            shape = 3;
          }
          else {
            throw new Error("Elevations Error: elevations not recognized shape.");
          }
          dir = amounts.indexOf(1); // The "corner" on these shapes always points.
          break cornerloop;

        case 2:
          // Either a slope (straight or diagonal) or a valley.
          if (elevation !== highest && elevation !== lowest) {
            // On a diagonal, the 2 amount is always at the midpoint.
            shape = 4;
            // And the direction is always facing the highest!
            dir = elevations.indexOf(highest);
          }
          else {
            // Both straight slopes and valleys have two pairs of two numbers,
            // requiring some extra work to figure out which we are.
            const next_ele = elevations[(corner + 1) % 4];
            const third_ele = elevations[(corner + 2) % 4];
            if (elevation === next_ele) {
              shape = 1;
              dir = elevation === highest ? corner : (corner + 2) % 4;

              break cornerloop;
            }
            if (next_ele === third_ele) {
              shape = 1;
              dir = elevation === highest ? (corner + 3) % 4 : (corner + 1) % 4;

              break cornerloop;
            }
            if (elevation === third_ele) {
              shape = 5;
              dir = elevation === highest ? corner : (corner + 1) % 4;

              break cornerloop;
            }
          }
      }
    }

    return {shape, dir, lowest};
  }

}

export default Tileinfo;
