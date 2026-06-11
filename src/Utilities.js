const Utilities = {
  pickFromRange: (max = 100, min = 0) => {
    return Math.floor(Math.random() * (max - min)) + min;
  },
};

export default Utilities;
