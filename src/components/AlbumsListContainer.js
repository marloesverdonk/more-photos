import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { addAlbum } from '../actions/addAlbum'


class AlbumsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      //.then(response => console.log(response.body.map(album => album.title)))
      .then(response => this.setState({ albums: response.body }))

    this.props.addAlbum(5, 'Enjoying sunshine')
    this.props.addAlbum(10, 'Having fun in the US')
  }

  render() {
    //  console.log(this.state)
    if (!this.state.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums} />
  }

}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}


export default connect(mapStateToProps, { addAlbum })(AlbumsListContainer)