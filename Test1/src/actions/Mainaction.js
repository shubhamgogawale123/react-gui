export default function(state = null, action )
{

  switch (action.type) {
    case "POS":
        console.log("Hello",action.payload);
        return action.payload;
        break;


  }
  return state;
}
