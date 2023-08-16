import { Map, List } from "immutable";

function mergeDeeplyElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);

  const mergedMap = map1.mergeDeepWith((prev, next) => {
    if (List.isList(prev) && List.isList(next)) {
      return prev.concat(next);
    }
    return next;
  }, map2);

  return List(mergedMap.values());
}

export default mergeDeeplyElements;
