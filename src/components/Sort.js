import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import { sortPost, sortComments } from '../actions'

class PostSort extends Component {
  sortEntity(settings){
      const { entity, sortPost, sortComments } = this.props
      if(entity === "posts"){
        sortPost(settings)
      }
      else {
        sortComments(settings)
      }
  }

  render(){
    const sortOptions = [
      {sortKey:'voteScore', sortOrder:'desc'},
      {sortKey:'voteScore', sortOrder:'asc'},
      {sortKey:'timestamp', sortOrder:'desc'},
      {sortKey:'timestamp', sortOrder:'asc'}
    ]
    return(
        <DropdownButton bsStyle="default" title="Sort By" pullRight id="post-sort-dropdown" onSelect={ (eventKey, event) => {
          event.preventDefault()
          this.sortEntity(sortOptions[eventKey])
        }}>
          <MenuItem eventKey={0}>Higher Votes</MenuItem>
          <MenuItem eventKey={1}>Lower Votes</MenuItem>
          <MenuItem eventKey={2}>Newest Post</MenuItem>
          <MenuItem eventKey={3}>Older Post</MenuItem>
        </DropdownButton>
  )
  }
}

export default connect(null,{ sortPost })(PostSort)
