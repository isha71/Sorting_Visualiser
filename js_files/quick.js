async function quickSorting() {
    async function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    async function partition(arr, low, high) {
        await changeBarColor(high, high)
        await sleep(500)
        let pivot = arr[high];
        let i = (low - 1);
        for (let j = low; j <= high - 1; j++) {
            if (arr[j] < pivot) {
                i++;
                await highlightBar(i, true);
                await highlightBar(j, true);
                await sleep(500);
                await swap(arr, i, j);
                await swapBars(i, j);
                await sleep(500);
                await highlightBar(i, false);
                await highlightBar(j, false);
                await sleep(500);
            }
        }
        await highlightBar(i + 1, true);
        await highlightBar(high, true);
        await sleep(500);
        await swap(arr, i + 1, high);
        await swapBars(i + 1, high);
        await sleep(500);
        await highlightBar(i + 1, false);
        await highlightBar(high, false);
        await sleep(500);
        await removeBarColor(high, high)
        await sleep(500)
        return (i + 1);
    }
    async function quickSort(arr, low, high) {
        if (low < high) {

            let pi = await partition(arr, low, high);
            await quickSort(arr, low, pi - 1);
            await quickSort(arr, pi + 1, high);
        }
    }
    await quickSort(numbers, 0, n - 1);
    await removeBarColor(0, n - 1);
    console.log("sorted: ", numbers.join(", "))

}

