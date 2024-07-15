import { setArrayState } from "../Features/CreateArray";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const insertionSort = async (array, dispatch,speed) => {
  let arrayCopy = [...array];

  for (let i = 1; i < arrayCopy.length; i++) {
    let key = arrayCopy[i].number;
    let j = i - 1;
    dispatch(setArrayState({ index: i, key: "checking", value: true }));
    await sleep(speed);

    while (j >= 0 && arrayCopy[j].number > key) {
      dispatch(setArrayState({ index: j + 1, key: "number", value: arrayCopy[j].number }));
      arrayCopy[j + 1] = arrayCopy[j];
      j = j - 1;
      await sleep(speed);
    }
    dispatch(setArrayState({ index: j + 1, key: "number", value: key }));
    arrayCopy[j + 1].number = key;

    dispatch(setArrayState({ index: i, key: "checking", value: false }));
    await sleep(speed);
  }
};

export default { insertionSort };
