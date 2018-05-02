const memorySize = 16;

let memory = new Array(memorySize);
let counter = 0;

const BRK = () => {
	// stops the programme
	// resets memory
	memory = new Array(memorySize);
	console.log(memory)
}

const LDA = (num) => {
	// load the value in the next memory address into register A
	memory[counter] = num;
	counter++;
	console.log(memory)
}

const ADC = (num) => {
	// add the value in the next memory address to the value in register A
	memory[counter] = memory[counter - 1] + num;
	counter++;
	console.log(memory)
}

const STA = (location) => {
	//Store the value of register A into the memory location specified by the value in the next memory address
	if (location > memory.length) {
		console.log("enter valid location");
		console.log(memory);
		return;
	}
	memory[location - 1] = memory[0];
	console.log(memory);
}

LDA(100);
ADC(7);
STA(15);
BRK();