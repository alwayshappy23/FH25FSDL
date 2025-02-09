let input = "";
try {
    if (input === "") {
        throw new Error("Input cannot be empty!");
    }
} catch (error) {
    console.log(error.message);
}