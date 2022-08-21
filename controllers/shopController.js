const path = require('path');

const shopPage = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '../public/html/category-page(3-grid).html'));

}

const shopPage2 = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '../public/html/category-page(6-grid).html'));

}

const shopPage3 = (req, res) => {

   res.status(200).sendFile(path.join(__dirname, '../public/html/category-page(full-width).html'));

}
const shopPage4 = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '../public/html/category-page(infinite-scroll).html'));

}
const shopPage5 = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '../public/html/category-page(left-sidebar).html'));


}
const shopPage6 = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '../public/html/category-page(list-view).html'));

}
const shopPage7 = (req, res) => {

       res.status(200).sendFile(path.join(__dirname, '../public/html/category-page(metro).html'));

}
const shopPage8 = (req, res) => {

     res.status(200).sendFile(path.join(__dirname, '../public/html/category-page(no-sidebar).html'));

}
const shopPage9 = (req, res) => {

   res.status(200).sendFile(path.join(__dirname, '../public/html/category-page(right-sidebar).html'));

}
const shopPage10 = (req, res) => {

   res.status(200).sendFile(path.join(__dirname, '../public/html/category-page(sidebar-popup).html'));

}






module.exports = {
    shopPage,
    shopPage2,
    shopPage3,
    shopPage4,
    shopPage5,
    shopPage6,
    shopPage7,
    shopPage8,
    shopPage9,
    shopPage10
}