
const path = require('path');

// router controller

 const showHomePage = (req, res) => {

     res.status(200).sendFile(path.join(__dirname, '../public/html/index.html'));

 }

 const showHomePage2 = (req, res) => {

     res.status(200).sendFile(path.join(__dirname, '../public/html/layout-2.html'));

 }
 const showHomePage3 = (req, res) => {

     res.status(200).sendFile(path.join(__dirname, '../public/html/layout-3.html'));

 }
 const showHomePage4 = (req, res) => {

     res.status(200).sendFile(path.join(__dirname, '../public/html/layout-4.html'));

 }
 const showHomePage5 = (req, res) => {

     res.status(200).sendFile(path.join(__dirname, '../public/html/layout-5.html'));

 }
 const showHomePage6 = (req, res) => {

     res.status(200).sendFile(path.join(__dirname, '../public/html/layout-6.html'));

 }


 module.exports = {
    showHomePage,
    showHomePage2,
    showHomePage3,
    showHomePage4,
    showHomePage5,
    showHomePage6
 }