import { setArrayState } from "../Features/CreateArray";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const bubbleSort = async (array, dispatch,speed) => {
  let arrayCopy = [...array];

  for (let i = 0; i < arrayCopy.length; i++) {
    for (let j = 0; j < arrayCopy.length - i - 1; j++) {
      dispatch(setArrayState({ index: j, key: "checking", value: true }));
      dispatch(setArrayState({ index: j + 1, key: "checking", value: true }));
      await sleep(speed);
      if (arrayCopy[j].number > arrayCopy[j + 1].number) {
        dispatch(setArrayState({ index: j, key: "swap", value: true }));
        dispatch(setArrayState({ index: j + 1, key: "swap", value: true }));

        let temp = arrayCopy[j];
        arrayCopy[j] = arrayCopy[j + 1];
        arrayCopy[j + 1] = temp;
        await sleep(speed);
        dispatch(setArrayState({ index: j, key: "number", value: arrayCopy[j].number }));
        dispatch(setArrayState({ index: j + 1, key: "number", value: arrayCopy[j + 1].number }));
        await sleep(speed);

        dispatch(setArrayState({ index: j, key: "swap", value: false }));
        dispatch(setArrayState({ index: j + 1, key: "swap", value: false }));
      }
      dispatch(setArrayState({ index: j, key: "checking", value: false }));
      dispatch(setArrayState({ index: j + 1, key: "checking", value: false }));
    }
    dispatch(setArrayState({ index: arrayCopy.length - i - 1, key: "correct", value: true }));
  }
};

export default { bubbleSort };
