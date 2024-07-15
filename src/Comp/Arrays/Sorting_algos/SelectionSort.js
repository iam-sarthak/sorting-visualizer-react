import { setArrayState } from "../Features/CreateArray";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const selectionSort = async (array, dispatch,speed) => {
  let arrayCopy = [...array];
  console.log("Starting selection sort with array:", arrayCopy);

  for (let i = 0; i < arrayCopy.length; i++) {
    let minIndex = i;
    dispatch(setArrayState({ index: minIndex, key: "checking", value: true }));
    for (let j = i + 1; j < arrayCopy.length; j++) {
      dispatch(setArrayState({ index: j, key: "checking", value: true }));
      await sleep(speed);
      if (arrayCopy[j].number < arrayCopy[minIndex].number) {
        dispatch(setArrayState({ index: minIndex, key: "checking", value: false }));
        minIndex = j;
      }
      dispatch(setArrayState({ index: minIndex, key: "checking", value: true }));
      dispatch(setArrayState({ index: j, key: "checking", value: false }));
    }

    if (minIndex !== i) {
      dispatch(setArrayState({ index: i, key: "swap", value: true }));
      dispatch(setArrayState({ index: minIndex, key: "swap", value: true }));
      await sleep(speed);
      let temp = arrayCopy[i];
      arrayCopy[i]= arrayCopy[minIndex];
      arrayCopy[minIndex]= temp;

      dispatch(setArrayState({ index: i, key: "number", value: arrayCopy[i].number }));
      dispatch(setArrayState({ index: minIndex, key: "number", value: arrayCopy[minIndex].number }));

      dispatch(setArrayState({ index: i, key: "swap", value: false }));
      dispatch(setArrayState({ index: minIndex, key: "swap", value: false }));
    }
    dispatch(setArrayState({ index: i, key: "checking", value: false }));
    dispatch(setArrayState({ index: i, key: "correct", value: true }));
    await sleep(speed);
  }
};

export default { selectionSort };
