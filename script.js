"use strict";

const timeTag = document.querySelector(".time");

// getLocalTIME
const getTime = () => {
  const curTime = Date.now();
  timeTag.innerHTML += `${curTime}ms`;
};
getTime();
