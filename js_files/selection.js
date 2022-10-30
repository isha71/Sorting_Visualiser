async function selectionSort() {
    var i, j, min_idx;
    for (i = 0; i < n - 1; i++) {
        highlightBar(i, true);
        min_idx = i;
        for (j = i + 1; j < n; j++) {
            highlightBar(j, true);
            await sleep(500);
            if (numbers[j] < numbers[min_idx]) {
                min_idx = j;
            }
            highlightBar(j, false);
        }
        if (min_idx !== i) {
            var temp = numbers[min_idx];
            numbers[min_idx] = numbers[i];
            numbers[i] = temp;
            swapBars(i, min_idx);
        }
        highlightBar(i, false);
    }
}