// add infos of child
export function addInfo(infoId, name, tel, cat) {
  return {
    type: 'ADD_INFO',
    infoId,
    name,
    tel,
    cat
  };
}

// remove infos
export function removeInfo(infoId, i) {
  return {
    type: 'REMOVE_INFO',
    infoId,
    i
  };
}
