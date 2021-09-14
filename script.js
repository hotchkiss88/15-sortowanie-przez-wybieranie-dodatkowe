let table = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]

function sorting(x) {
    let storageSmallest = 0;
    for (i = 1; i < x.length; i++) {

        storageSmallest = x[i];

        let j = i - 1;

        while (j >= 0 && x[j] > storageSmallest) {
            x[j + 1] = x[j];
            j = j - 1;
        }
        x[j + 1] = storageSmallest;

    }
    return storageSmallest;
}

sorting(table);

console.log(table);