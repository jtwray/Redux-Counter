export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';



export const increment=() => {
 
  // Fill in this function
  return {
    type: 'INCREMENT',
    payload:1
    
  }
};

export const decrement=() => {
 
  return {
    type: 'DECREMENT',
    payload: 1
  };
}
