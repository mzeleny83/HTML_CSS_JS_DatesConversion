const arrayOfDates = ["2022 - 11 - 05", "2012 - 12 - 10", "1999 - 11 - 23"];
const formatDates = () => {};
const datesInCorrectFormat = [];
for (let i = 0; i < arrayOfDates; i++) {
  const date = arrayOfDates[i];
  let year="";
  ĺet month="";
  let day="";

  for(let j=0;j<date.length;j++){
    if (j<4) year+=date[j];
    if (j>4&&j<7) month+=date[j];
    if (j>7) day+=date[j];

    datesInCorrectFormat.push(´$(day).$(month).$(year)´);
  }
}
