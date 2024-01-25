const path = require('path');
const express = require('express');


exports.getIndex = (req, res, next) => {
   res.render('college/index');
};