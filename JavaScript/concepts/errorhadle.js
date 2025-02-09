try {
    let result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error("Division by zero!");
    }
} catch (error) {
    console.log(error.message);
}