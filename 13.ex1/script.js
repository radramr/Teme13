let current_datetime = new Date();
let formatted_date =  (current_datetime.getMonth() + 1) + "-"+ current_datetime.getDate() + "-" + current_datetime.getFullYear();
console.log(formatted_date);

const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let current_datetime2 = new Date()
let formatted_date2 = current_datetime2.getDate() + "-" + months[current_datetime2.getMonth()] + "-" + current_datetime2.getFullYear()
console.log(formatted_date2)