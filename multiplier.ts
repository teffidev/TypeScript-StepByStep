const multiplicator = (a: number, b: number, printText: String) => {
  console.log(printText, a * b);
};

// console.log(process.argv);

const a: number = Number(process.argv[2]);
const b: number = Number(process.argv[3]);

multiplicator(a, b, `Multiplied ${a} and ${b} and the result is: `);
