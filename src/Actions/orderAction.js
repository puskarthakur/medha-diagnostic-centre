
const ADD_ORDER = "addorder";
export  default function addorder(name, price, no) {
    return {
      type: ADD_ORDER,
      payload: { name, price, no },
    }
  }