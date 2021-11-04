const Color = {
  RED: 1,
  BLUE: 2,
  GREEN: 4,
};

Object.freeze(Color);

Color.white = 5; // Property 'white' does not exist on type '{ RED: number; BLUE: number; GREEN: number; }'.ts(2339)

console.log(Color);
