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