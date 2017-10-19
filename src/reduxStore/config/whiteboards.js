
let whiteboardList = [];

// TEST MOCK OBJECTS
whiteboardList.push({ id: '1', title: 'Whiteboard 1' });
whiteboardList.push({ id: '2', title: 'Whiteboard 2' });
whiteboardList.push({ id: '3', title: 'Whiteboard 3' });

// ACTIONS
const WHITEBOARD_ADD = 'WHITEBOARD_ADD';
const WHITEBOARD_REMOVE = 'WHITEBOARD_REMOVE';
const WHITEBOARD_REPLACE_WHITEBOARDS = 'WHITEBOARD_REPLACE_WHITEBOARDS';

const initalState = {
  whiteboards: [],
};

function whiteboardCounter(baseV) {
  let base = baseV;
  return function counter(incV) {
    base += incV;
    return base;
  };
}
let counter = whiteboardCounter(initalState.whiteboards.length);

// REDUCER      addWhiteBoard, removeWhiteBoard
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case WHITEBOARD_ADD: {
      const newState = Object.assign({}, state,
        { whiteboards: [...state.whiteboards, action.data] });
      whiteboardList.push(action.data);
      return newState;
    }
    case WHITEBOARD_REMOVE: {
      const newState = Object.assign({}, state,
        { whiteboards: state.whiteboards.filter(
          whiteboard => whiteboard.id !== action.data.id),
        });
      whiteboardList = [...newState.whiteboards];
      return newState;
    }
    case WHITEBOARD_REPLACE_WHITEBOARDS: {
      const newData = Object.assign({}, state, { whiteboards: whiteboardList });
      counter = whiteboardCounter(newData.whiteboards.length);
      return newData;
    }
    default:
      return state;
  }
};

// ACTION CREATORS
const addWhiteboard = title => ({
  type: WHITEBOARD_ADD,
  data: {
    id: counter(1).toString(),
    title,
  },
});

const removeWhiteboard = id => ({
  type: WHITEBOARD_REMOVE,
  data: { id },
});

const updateWhiteboards = () => ({
  type: WHITEBOARD_REPLACE_WHITEBOARDS,
});

export { addWhiteboard, removeWhiteboard, updateWhiteboards };
export default reducer;
