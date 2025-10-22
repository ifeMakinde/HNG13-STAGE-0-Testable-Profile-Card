"use strict";

const timeTag = document.querySelector(".time");

// getLocalTIME
const getTime = () => {
  const curTime = Date.now();
  timeTag.textContent = `current time: ${curTime} ms`;
};
getTime();

setInterval(getTime, 1000);
