const formet=(maindate)=>{

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    
    let datetime = new Date(maindate * 1000);  
    
    let date = datetime.toDateString();
    // let day = days[datetime.getDay()];
}



export {formet , date};