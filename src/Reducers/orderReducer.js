const initialState = {
    arr: [],
    noOfItems: 0
}
  

    

const ADD_ORDER = "addorder";
export default function orderReducer(state = initialState, action){
    switch(action.type) {
         
        case ADD_ORDER: {
            
          
         return  {
            ...state,
             arr:[...state.arr, action.payload],
             noOfItems: state.noOfItems + action.payload.no
         }
            // ...state,
            // name: action.payload.name,
            // price: action.payload.price,
            // noOFItems: state.noOFItems + 1
          

        
        }
        default: return state

    }
}