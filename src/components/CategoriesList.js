import React from 'react'

export default function Categories({ categories }){
  return (
    <div className="categories-menu">
      <ul className="categories-list">
        {categories.map((cat) => {
          return (
            <li key={cat.name}>{cat.name}</li>
          )
        })}
      </ul>
    </div>
  )
}
