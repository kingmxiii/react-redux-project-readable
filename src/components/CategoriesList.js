import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories({ categories }){
  return (
    <div className="categories-menu">
      <ul className="categories-list">
        {categories.map((cat) => {
          return (
            <Link to={`/${cat.path}`}>
              <li key={cat.name}>{cat.name}</li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}
