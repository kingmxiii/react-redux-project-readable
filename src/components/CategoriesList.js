import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { MenuItem } from 'react-bootstrap'

export default function Categories({ categories }){
  return (
    <div className="categories-menu">
        {categories.map((cat) => {
          return (
            <LinkContainer key={cat.name} to={`/${cat.path}`}>
              <MenuItem>{cat.name}</MenuItem>
            </LinkContainer>
          )
        })}
    </div>
  )
}
