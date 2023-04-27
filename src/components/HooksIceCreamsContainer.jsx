import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { buyIceCreams } from '../redux/iceCream/iceCreamActions';

const HooksIceCreamsContainer = (props) => {
    // const numbOfIceCreams = useSelector(state => state.iceCream.numbOfIceCreams);
    // console.log(numbOfIceCreams)
    // const dispatch = useDispatch()

  return (
    <div>
      <h2>Numbers of icecreams : {props.numOfIceCreams}</h2>
      <button onClick={() => props.dispatch(buyIceCreams())}>Buy Icecream</button>
    </div>
  )
}


const mapStateToProps = state => {
    return {
        numOfIceCreams : state.iceCream.numbOfIceCreams
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        iceCream : () => dispatch(buyIceCreams())
    }
}



export default connect(
    mapStateToProps , 
    mapDispatchToProps , 
    )(HooksIceCreamsContainer);
