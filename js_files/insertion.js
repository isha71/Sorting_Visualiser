async function insertionSort() {
    var i, key, j;
    for (i = 1; i < n; i++) {
        highlightBar(i, true);
        key = numbers[i];
        j = i - 1;
        while (j >= 0 && numbers[j] > key) {
            highlightBar(j + 1, true);
            highlightBar(j, true)
            numbers[j + 1] = numbers[j];
            numbers[j] = key;
            await sleep(500);
            swapBars(j + 1, j);
            console.log(i, j, key)
            if (i !== j + 1) {
                highlightBar(j + 1, false);
            }
            highlightBar(j, false)
            j = j - 1;
        }

        highlightBar(j + 1, true);
        numbers[j + 1] = key;
        await sleep(500);
        swapBars(i, j + 1);
        highlightBar(j + 1, false);
        highlightBar(i, false);
    }
}
