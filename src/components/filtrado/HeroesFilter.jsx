import React from 'react'

const HeroesFilter = () => {
    const [heroesFilter, setheroesFilter] = useState('')

    const handleEventListener = (event) => {
        setheroesFilter(event.target.value)
    }
  return (
    <div>
      
    </div>
  )
}

export default HeroesFilter
