import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import { sortPost } from '../actions'

class PostSort extends Component {
  render(){
    const sortOptions = [
      {sortKey:'voteScore', sortOrder:'desc'},
      {sortKey:'voteScore', sortOrder:'asc'},
      {sortKey:'timestamp', sortOrder:'desc'},
      {sortKey:'timestamp', sortOrder:'asc'}
    ]
    return(
    <div className="post-sort">
      <span>
        <DropdownButton bsStyle="default" title="Sort By" id="post-sort-dropdown" onSelect={ (eventKey, event) => {
          event.preventDefault()
          this.props.sortPost(sortOptions[eventKey])
        }}>
          <MenuItem eventKey={0}>Higher Votes</MenuItem>
          <MenuItem eventKey={1}>Lower Votes</MenuItem>
          <MenuItem eventKey={2}>Newest Post</MenuItem>
          <MenuItem eventKey={3}>Older Post</MenuItem>
        </DropdownButton>
      </span>
    </div>
  )
  }
}

export default connect(null,{ sortPost })(PostSort)
