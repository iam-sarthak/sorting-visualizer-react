import { setArrayState } from "../Features/CreateArray";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const partition = async (array, low, high, dispatch,speed) => {
  let pivot = array[high].number;
  dispatch(setArrayState({ index: high, key: "checking", value: true }));
  let i = low - 1;

  for (let j = low; j < high; j++) {
    dispatch(setArrayState({ index: j, key: "checking", value: true }));
    await sleep(speed);
    if (array[j].number < pivot) {
      i++;
      dispatch(setArrayState({ index: i, key: "swap", value: true }));
      dispatch(setArrayState({ index: j, key: "swap", value: true }));
      await sleep(speed);

      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;

      dispatch(setArrayState({ index: i, key: "number", value: array[i].number }));
      dispatch(setArrayState({ index: j, key: "number", value: array[j].number }));

      dispatch(setArrayState({ index: i, key: "swap", value: false }));
      dispatch(setArrayState({ index: j, key: "swap", value: false }));
    }
    dispatch(setArrayState({ index: j, key: "checking", value: false }));
  }

  dispatch(setArrayState({ index: high, key: "checking", value: false }));
  dispatch(setArrayState({ index: i + 1, key: "swap", value: true }));
  dispatch(setArrayState({ index: high, key: "swap", value: true }));

  let temp = array[i + 1];
  array[i + 1] = array[high];
  array[high] = temp;

  dispatch(setArrayState({ index: i + 1, key: "number", value: array[i + 1].number }));
  dispatch(setArrayState({ index: high, key: "number", value: array[high].number }));

  dispatch(setArrayState({ index: i + 1, key: "swap", value: false }));
  dispatch(setArrayState({ index: high, key: "swap", value: false }));

  return i + 1;
};

const quickSortHelper = async (array, low, high, dispatch,speed) => {
  if (low < high) {
    let pi = await partition(array, low, high, dispatch,speed);
    await quickSortHelper(array, low, pi - 1, dispatch,speed);
    await quickSortHelper(array, pi + 1, high, dispatch,speed);
  }
};

export const quickSort = async (array, dispatch,speed) => {
  let arrayCopy = [...array];
  await quickSortHelper(arrayCopy, 0, arrayCopy.length - 1, dispatch,speed);
};

export default { quickSort };
