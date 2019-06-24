const driversWithRevenueOver = function(drivers,revenue){
  return drivers.filter(driver => driver.revenue > revenue)
}

const driverNamesWithRevenueOver = function(drivers, revenue){
  return driversWithRevenueOver(drivers,revenue).map(driver => driver.name)
}

const exactMatch = function(drivers, object){
  let key = Object.keys(object)[0]
  let value = Object.values(object)[0]
  return drivers.filter(driver => driver[key] == value)
}

const exactMatchToList = function(drivers,revenue){
  return exactMatch(drivers,revenue).map(driver => driver.name)
}
