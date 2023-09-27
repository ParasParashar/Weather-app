
const DayForecastCard = () => {
  return (
    <div className="flex justify-center gap-10">
    <span className="text-[20px] font-semibold">Tuesday</span>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG69b353uxhM9LshXyuDjD5eoQPEH3WeSu2cdnLfVcInffhddrVLqlMy9fXENi6hVbjxA&usqp=CAU"
      alt=""
      width={30}
      height={30}
    />
    <div>
    <span className="text-[20px] font-semibold">73°</span > / <span className="text-[20px] font-semibold">65°</span>
    </div>
    
  </div>  
  )
}


export default DayForecastCard