async function mergeSorting() {
    async function merge(arr, l, m, r) {
        var n1 = m - l + 1;
        var n2 = r - m;
        var L = new Array(n1);
        var R = new Array(n2);
        for (var i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (var j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];
        var i = 0;
        var j = 0;
        var k = l;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
    async function mergeSort(arr, l, r) {
        if (l >= r) {
            return; 
        }
        var m = l + parseInt((r - l) >> 1);
        await mergeSort(arr, l, m);
        await changeBarColor(l, m);
        await sleep(500);

        await mergeSort(arr, m + 1, r);
        await changeBarColor(l, m);
        await sleep(500);

        await merge(arr, l, m, r);
        await removeBarColor(l, m);
        await sleep(500);
    }
    await mergeSort(numbers, 0, n - 1);
    await removeBarColor(0, n - 1);
}

