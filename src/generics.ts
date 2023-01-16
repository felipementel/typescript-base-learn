function useState() {
  let state: number | string;

  function getState() {
    return state;
  }

  function setState(newState: number | string) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState();

newState.setState(456); // é um número

console.log(newState.getState());

newState.setState("foo"); // aqui deveria dar erro, pois já assumiu um tipo anteriormente

console.log(newState.getState());

//-----------------------------------

// S =: State
// T => Type
// K => Key
// V => Value
// E => Element

function useState2<S extends number | string = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

const newState2 = useState2<string>();

//newState2.setState(456); // é um número

console.log(newState2.getState());

newState2.setState("foo"); // aqui deveria dar erro, pois já assumiu um tipo anteriormente

console.log(newState.getState());


// --------------------------------------

type numOrString = number | string

function useState3<S extends numOrString = string>() {
    let state: S;
  
    function getState() {
      return state;
    }
  
    function setState(newState: S) {
      state = newState;
    }
  
    return { getState, setState };
  }