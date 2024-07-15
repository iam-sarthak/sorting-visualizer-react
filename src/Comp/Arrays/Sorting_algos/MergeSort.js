import { setArrayState,updateArray } from "../Features/CreateArray";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const merge = async (array, left, mid, right, dispatch,speed) => {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  const leftArray = new Array(n1);
  const rightArray = new Array(n2);

  for (let i = 0; i < n1; i++) {
    leftArray[i] = array[left + i];
  }
  for (let i = 0; i < n2; i++) {
    rightArray[i] = array[mid + 1 + i];
  }

  let i = 0;
  let j = 0;
  let k = left;

  while (i < n1 && j < n2) {
    dispatch(setArrayState({ index: left + i, key: "checking", value: true }));
    dispatch(setArrayState({ index: mid + 1 + j, key: "checking", value: true }));
    await sleep(speed);

    if (leftArray[i].number <= rightArray[j].number) {
      dispatch(setArrayState({ index: k, key: "number", value: leftArray[i].number }));
      array[k] = leftArray[i];
      i++;
    } else {
      dispatch(setArrayState({ index: k, key: "number", value: rightArray[j].number }));
      array[k] = rightArray[j];
      j++;
    }

    dispatch(setArrayState({ index: left + i, key: "checking", value: false }));
    dispatch(setArrayState({ index: mid + 1 + j, key: "checking", value: false }));
    k++;
    await sleep(speed);
  }

  while (i < n1) {
    dispatch(setArrayState({ index: k, key: "number", value: leftArray[i].number }));
    array[k] = leftArray[i];
    i++;
    k++;
    await sleep(speed);
  }

  while (j < n2) {
    dispatch(setArrayState({ index: k, key: "number", value: rightArray[j].number }));
    array[k] = rightArray[j];
    j++;
    k++;
    await sleep(speed);
  }
};

const mergeSortHelper = async (array, left, right, dispatch,speed) => {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    await mergeSortHelper(array, left, mid, dispatch,speed);
    await mergeSortHelper(array, mid + 1, right, dispatch,speed);
    await merge(array, left, mid, right, dispatch,speed);
  }
};

export const mergeSort = async (array, dispatch,speed) => {
  let arrayCopy = [...array];
  await mergeSortHelper(arrayCopy, 0, arrayCopy.length - 1, dispatch,speed);
  for (let i = 0; i < arrayCopy.length; i++) {
    dispatch(setArrayState({ index: i, key: "correct", value: true }));
  }
//   await sleep(1000);
};

export default { mergeSort };
