// a reducer takes the action and the current state

export default function children(state = [], action) {
  console.log('iam a children reducer', state);
  return state;
}
