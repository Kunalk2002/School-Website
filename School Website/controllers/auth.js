const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
exports.getLogin=(req,res,next)=>{
   res.render('auth/login',{
      path: '/login'
   });
}
exports.getSignup=(req,res,next)=>{
   res.render('auth/signup',{
      path: '/signup'
   });
}