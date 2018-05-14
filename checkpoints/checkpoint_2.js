const A = 4;

const createMatrix = (n) => {
    const size = (2*n) - 1;
    let matrix = [];
    for (let r = 0; r < size; r+=1) {
        matrix[r] = [];
        for (let c = 0; c < size; c+=1) {
            matrix[r][c] = r + '' + c;
        }
    }
    return matrix;
};

const printMatrix = (matrix) => {
    for (let r = 0; r < matrix.length; r+=1) {
        let row = '';
        for (let c = 0; c < matrix[0].length; c+=1) {
            row = row + ' ' + matrix[r][c];
        }
        console.log(row);
    }
};

const checkpoint_2 = (n) => {
    //first create matrix of n x n
    const size = (2 * n) - 1;
    let matrix = [];
    for (let r = 0; r < size; r+=1) {
        matrix[r] = [];
        for (let c = 0; c < size; c+=1) {
            matrix[r][c] = 0;
        }
    }

    // build Spiral matrix
    // first we set 00, 11, 22 (r, c) positions 
    let len = 2*n;
    for (let i = 0; i < n; i+=1) {
        matrix[i][i] = n - i;   //setting 00, 11, 22, .... values.
        // given this position we need to visit all 4 corners.
        // we loop right, bottom, left and top and set same value
        len = len - 2;
        
        // go to Right
        let right = 0, r = 0;
        for (right = 0, r = 0; right < len; right+=1) {
            matrix[i][++r + i] = n - i;
        }

        // go to bottom
        let bottom = 0, b = 0;
        for (bottom = 0, b = i; bottom < len; bottom+=1) {
            matrix[++b][r + i] = n - i;
        }

        // go to left
        let left = 0, l = 0;
        for (left = 0, l = b; left < len; left+=1) {
            matrix[b][--l] = n - i;
        }

        // go to top
        let top = 0, t = 0;
        for (top = 0, t = l; top < len; top+=1) {
            matrix[--b][t] = n - i;
        }
    }

    return matrix;
};


const m = checkpoint_2(A);
printMatrix(m);
