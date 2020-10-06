
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const result = [];

    if(!Array.isArray(matrix) || matrix.length === 0) {
        return [];
    } else {
        matrix.map((arr, index) => {
            if(index % 2 !== 0) {
                result.push(...arr.reverse());
            } else {
                result.push(...arr);
            }
        });
    }
    return result;
}
