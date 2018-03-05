module.exports = function solveSudoku(matrix) {
    for(let i = 0, j = 0; i < 9; i++) {
        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let tempArray = [];
        matrix[i] = matrix[i].map((value, i, array) => value === j ? (value = array.filter(item => !array.includes(item)),
            tempArray = matrix.map(row => row[i]),
            value = value.filter(item => !tempArray.includes(item)),
            value = value.length === 1 ? value[j] : value) : value);
    }
    return matrix;
}
