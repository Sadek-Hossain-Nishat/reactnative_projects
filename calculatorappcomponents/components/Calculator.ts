import { CalculatorState } from "../utis/Types";


export const initialState:CalculatorState={
    currentValue: "0",
    operator:null,
    previousValue:null


}


export const handleNumber =(value:string,state:CalculatorState):CalculatorState=>{

  if (state.currentValue==="0") {
    return {
        currentValue:`${value}`,
        operator:state.operator,
        previousValue:state.previousValue
    }
    
  }

  return {
    currentValue:`${state.currentValue}${value}`,
    operator:state.operator,
    previousValue:state.previousValue

  }

}

export const handleEqual = (state:CalculatorState):CalculatorState=>{
    const {currentValue,operator,previousValue} = state;
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue as string);
    const resetState:CalculatorState={
        operator:null,
        previousValue:null,
        currentValue:"0"
    }

    if (operator==="/") {

        return {
            
            ...resetState,
            currentValue:(current/previous).toString()
        }
        
    }

    if (operator === "*") {
        return {
         
          ...resetState,
          currentValue:(current*previous).toString()
        };
      }

      if (operator === "+") {
        return {
          
          ...resetState,
          currentValue:(current+previous).toString()
        };
      }
      if (operator === "-") {
        return {
          
          ...resetState,
          currentValue: (previous - current).toString(),
        };
      }

      return state
}




const Calculator = (type:string,value:string,state:CalculatorState):CalculatorState => {
  switch (type) {
    case "number":
      return handleNumber(value,state)
      
     case "operator":
     
      return {
        operator:value,
        previousValue:state.currentValue,
        currentValue:'0'
      }

      case "equal":
        return handleEqual(state)
        case "clear":
          return initialState

          case "posneg":
            return {
              currentValue:`${parseFloat(state.currentValue)*-1}`,
              operator:state.operator,
              previousValue:state.previousValue
            }

            case "percentage":
              return {
                currentValue:`${parseFloat(state.currentValue)*0.01}`,
                operator:state.operator,
                previousValue:state.previousValue
              }
  
    default:
      return state;
  }
}

export default Calculator