function printGPattern() {
    let gPattern = [
        " ***** ",
        "*      *",
        "*       ",
        "*  **** ",
        "*      *",
        "*      *",
        " ***** "
    ];

    for (let line of gPattern) {
        console.log(line);
    }
}

printGPattern();

console.log("\n\nsecond Method\n")


function printGPattern2() {
   //Resize G by adjusting rows and cols
    const rows = 15; //height
    const cols = 20; //width

    let pattern = "";

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (
                ((i === 0 || i === rows - 1) && j > 0 && j < cols - 1)  ||  //first and last horizontal line
                (j===0 && i>0 && i<rows-1) ||                               //left vertical line
                (j===cols-1 && (i>0 && i < 2 || i>rows/2 && i< rows-1)) ||  //right vertical line
                i === parseInt(rows/2) && j > 2 && j < cols - 1             // Middle horizontal line
            ) {
                pattern += "*";
            } else {
                pattern += " ";
            }
        }
        pattern += "\n";
    }
    console.log(pattern)
}
printGPattern2();