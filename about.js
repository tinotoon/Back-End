const member = require('./members');

const about = [
    {
        "Status": "success",
        "Message": "response succes",
        "Description": "Exercise #02",
        "Date": "2024-01-24T07:51:09+08:00",
        "Data": member
    }
];

const abouts = JSON.stringify(about);
module.exports = abouts;