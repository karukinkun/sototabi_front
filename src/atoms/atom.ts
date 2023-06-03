import { atom } from 'recoil';

export const centerState = atom({
  key: 'centerState',
  default: '',
});

// const handleCreate = useCallback(() => {
//   setNotepad((state) =>
//     [
//       ...state,
//       { id: String(state.length + 1), value: "", isComplete: false },
//     ].sort((a, b) => a.id.localeCompare(b.id))
//   );
// }, [setNotepad]);

// export const charCountState = selector({
//   key: 'charCountState', // unique ID (with respect to other atoms/selectors)
//   get: ({ get }) => {
//     const { userName } = get(textState);

//     return userName ? userName.length : 0;
//   },
// });
