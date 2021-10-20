let count = 0;

function getData() {
  count++;
  const print = document.querySelector(".print");
  print.innerHTML = "Api called " + count + " times";
}

function debounce(fn, delay) {
  let debounceTimer;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

const getDataWithDebouncedMethod = debounce(getData, 300);
