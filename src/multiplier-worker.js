onmessage = function (event) {
  // console.log("Worker: Message received from main script");

  const [ro, co] = event.data;

  const result = ro * co;

  if (isNaN(result)) {
    postMessage("Some error just ocurred");
  } else {
    //console.log("Worker: Posting message back to main script");

    postMessage(result);
  }
};
