const parse = search =>
  search
  .slice(1)
  .split("&")
  .map(param => {
    const pair = param.split("=");
    return { [pair[0]]: pair[1] }
  })
  .reduce((param, pair) => Object.assign({}, param, pair));


export default parse;
