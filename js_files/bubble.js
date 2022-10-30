async function bubbleSort() {
    var swapStore = 0;
    var c = 0;
    var temp = n;
    while (1) {
        var i = 0;
        for (var j = i + 1; j < temp; j++) {
            highlightBar(j - 1, true);
            highlightBar(j, true);
            await sleep(500);

            if (numbers[j - 1] > numbers[j]) {
                swapStore = numbers[j - 1];
                numbers[j - 1] = numbers[j];
                numbers[j] = swapStore;
                c++;
                swapBars(j - 1, j);
                await sleep(200)
            }
            highlightBar(j - 1, false);
            highlightBar(j, false);
        }
        temp--;
        if (c === 0) {
            break;
        } else {
            c = 0;
        }
    }
}
