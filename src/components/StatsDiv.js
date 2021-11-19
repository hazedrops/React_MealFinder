import React from 'react'

function StatsDiv( {recipes}) {
  return (
    <div className="statsDiv">
      { recipes.meals && <p className="stats">Displaying {recipes.meals.length} results.</p>}
    </div>
  )
}

export default StatsDiv;
