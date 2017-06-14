exports.convertDate = function(date){
  let tgl = date.split(' ')
  let newDateFormat = ''
  if(tgl[1] ==  'Jan')
    newDateFormat = '01'
  else if(tgl[1] == 'Feb')
    newDateFormat = '02'
  else if(tgl[1] == 'Mar')
    newDateFormat = '03'
  else if(tgl[1] == 'Apr')
    newDateFormat = '04'
  else if(tgl[1] == 'May')
    newDateFormat = '05'
  else if(tgl[1] == 'Jun')
    newDateFormat = '06'
  else if(tgl[1] == 'Jul')
    newDateFormat = '07'
  else if(tgl[1] == 'Aug')
    newDateFormat = '08'
  else if(tgl[1] == 'Sep')
    newDateFormat = '09'
  else if(tgl[1] == 'Oct')
    newDateFormat = '10'
  else if(tgl[1] == 'Nov')
    newDateFormat = '11'
  else if(tgl[1] == 'Dec')
    newDateFormat = '12'

  return `${tgl[2]}/${newDateFormat}/${tgl[3]} ${tgl[4]} ${tgl[0]}`

}
