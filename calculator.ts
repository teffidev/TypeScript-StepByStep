type Operation = "multiply" | "add" | "subtract" | "divide";
type Result = number;

const calculator = (a: number, b: number, op: Operation): Result => {
    if (op === "multiply") return a * b;
    if (op === "add") return a + b;
    if (op === "subtract") return a - b;
    if (op === "divide") {
        if (b === 0) throw new Error("Cannot divide by 0!");
        return a / b;
    }

    throw new Error("Operation is not valid");
};

// try {
//     console.log(calculator(1, 5, "divide"));
//     console.log(calculator(1, 10, "divide"));
// } catch (e) {
//     console.log("Something went wrong", e);
// }   

console.log(process.argv);
