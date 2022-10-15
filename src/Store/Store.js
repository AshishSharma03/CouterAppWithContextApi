
export const ACTION = {
    INC : 'inc',
    DEC : 'dec',
    RESET : 'reset',
}



  
export const initialState = 0

function Reducer(state,action){
  

        switch(action.type){
              
                case ACTION.INC :
                    return state += 1
                   
                    
                case  ACTION.DEC :
                    return state -= 1

                case  ACTION.RESET :
                    return state = 0
                

                default :
                    return state ;
        }

}


export default Reducer
