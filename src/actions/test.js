export function helloWorld(firstName, lastName) {
  return {
    type: 'HELLO_WORLD',
    payload: {
      firstName: firstName,
      lastName: lastName
    }
  }
}

// import:
    //import { helloWorld } from '../actions/test' 

//in componentDidMount:
    //this.props.helloWorld('Marloes', 'Verdonk')

//export:
    //export default connect(null, { helloWorld: helloWorld })(AlbumsListContainer)