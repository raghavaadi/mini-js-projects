'use strict';
const fs =require('fs');
const readXlsxFile = require('read-excel-file/node');
const path=require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const calculator=require('./routes/calculator.js');
const routes=require('./routes/excel.js');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use('/calculator',calculator);
app.use('/',routes)

const schema = {
'sno':{
	prop:'sno',
type:Number},
		
  'Date': {
    prop: 'date',
    type: Date
  },
  'Name': {
    prop: 'name',
    type: String,
    required: true
  },
  'Age': {
    prop: 'age',
    type: Number
  },
	
'Marks': {
    prop: 'marks',
    type: Number
  }

}


// readXlsxFile('C:/Users/Raghav/Desktop/n.xlsx').then((rows) => {

// console.log(rows);
// })
// readXlsxFile(fs.createReadStream('C:/Users/Raghav/Desktop/n.xlsx')).then((rows) => {
  
// console.log(rows);
// })
readXlsxFile('C:/Users/Raghav/Desktop/n.xlsx', { schema }).then(({ rows, errors }) => {
  // `errors` have shape `{ row, column, error, value }`.
  //errors.length === 0
  
console.log(rows[0]);
  if(rows.name==='RAGHAV')
  {
  console.log('yes'); }
  // rows === [{
  //   date: new Date(2018, 2, 24),
  //   name:'subash',
 	// age:45,
  //   marks: 45,
  // }]
})
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`connected port ${port}`)})