const clone = x => [...x];
const push = y => x => [...x, y];
const pop = x => x.slice(0, -1);
const unshift = y => x => [y, ...x];
const shift = x => x.slice(1);
const sort = f => x => [...x].sort(f);
const del = i => x => [...x].splice(i, 1);
const splice = (i, len) => x => [...x].splice(i, len);

export { clone, push, pop, unshift, shift, sort, del, splice };
