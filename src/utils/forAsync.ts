const forEachAsync = (arr: any[], fn: any) =>  arr.reduce(
  (promise, value) => promise.then(() => fn(value)), Promise.resolve()
);

export { forEachAsync }