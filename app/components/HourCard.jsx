import React from 'react'

const HourCard = () => {
 return(
    <div className="flex flex-col items-center gap-1">
    <span>4PM</span>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG69b353uxhM9LshXyuDjD5eoQPEH3WeSu2cdnLfVcInffhddrVLqlMy9fXENi6hVbjxA&usqp=CAU"
      alt=""
      width={30}
      height={30}
    />
    <span>70°</span>
  </div>
 )
}

export default HourCard