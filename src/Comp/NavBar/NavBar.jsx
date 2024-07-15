import React, { useState } from "react";
import "./NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createArray,
  updateArray,
  setArrayState,
} from "../Arrays/Features/CreateArray";

import { bubbleSort } from "../Arrays/Sorting_algos/BubbleSort";
import { mergeSort } from "../Arrays/Sorting_algos/MergeSort";
import { insertionSort } from "../Arrays/Sorting_algos/InsertionSort";
import { quickSort } from "../Arrays/Sorting_algos/QuickSort";
import { selectionSort } from "../Arrays/Sorting_algos/SelectionSort";

const NavBar = () => {
  const dispatch = useDispatch();
  const array = useSelector((state) => state.array.array);
  const [length, setLength] = useState(20);
  const [speed, setSpeed] = useState(200);
  const handleBubbleSort = () => {
    bubbleSort(array, dispatch,speed);
  };

  const handleMergeSort = () => {
    mergeSort(array, dispatch,speed);
  };


  const handleSelectionSort = () => {
    selectionSort(array, dispatch,speed);
  };

  const handleQuickSort = () => {
    quickSort(array, dispatch,speed);
  };

  const handleInsertionSort = () => {
    insertionSort(array, dispatch,speed);
  };

  const hangleLength = ((e)=>{
    if(e.target.value>50){
      setLength(50);
    }else if(e.target.value<0){
      setLength(5);
    }else{
      setLength(e.target.value);
    }
  })
  const handleSpeed = ((e)=>{
    if(e.target.value<0){
      setSpeed(100);
    }else if(e.target.value>20){
      setSpeed(2000);
    }else{
      setSpeed(e.target.value*100);
    }
    
  })

  const handleCreateArray=()=>{
    dispatch(createArray({length}))

  }
  return (
    <div className="navbar">
      <div className="leftside">
        <button onClick={handleCreateArray }>New Array</button>
        {/* <button>Custom Array</button> */}
        <div className="inputs">
          <div>Speed</div>
          <input type="number" value={speed/100} onChange={handleSpeed} min={0} max={20} name="" id="" />
        </div>
        <div className="inputs">
          <div>Length</div>
          <input onChange={hangleLength} value={length} type="number" min={0} max={50} name="" id="" />
        </div>
      </div>
      <div className="right-side">
        <button onClick={handleBubbleSort}>Bubble Sort</button>
        <button onClick={handleSelectionSort}>Selection Sort</button>
        <button onClick={handleMergeSort}>Merge Sort</button>
        <button onClick={handleQuickSort}>Quick Sort</button>
        {/* <button onClick={handleInsertionSort}>Insertion Sort</button> */}
      </div>
    </div>
  );
};

export default NavBar;
