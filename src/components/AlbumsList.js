import * as React from 'react'

export default function AlbumsList(props){
  const albums = props.albums
  return(
    <div>
      <h2>All Albums</h2>
      <ul>
        {albums.map(album =>
          <li key={album.id}>{album.title}</li>)}
      </ul>
    </div>
  )
}