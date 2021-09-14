let table = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]

function sorting(x) {
    let storage = 0;
    for (i = 0; i < x.length; i++) {

        let storageSmallest = i;

        for (let j = i + 1; j < x.length; j++) {
            if (x[j] < x[storageSmallest]) {
                storageSmallest = j;
            }
        }
        if (storageSmallest !== i) {
            storage = x[storageSmallest];
            x[storageSmallest] = x[i];
            x[i] = storage;
        }
    }
    return storage;
}

sorting(table);

console.log(table);