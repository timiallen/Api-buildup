const axios = require('axios');
const Config = require('../config');
const { json } = require('express');

async function googleTranslator(req, res) {
    const {word, from , to} = req.body;
    const encodedParams = new URLSearchParams();


    encodedParams.set('q', `${word}` );
    encodedParams.set('target', `${from}`);
    encodedParams.set('source', `${to}`);

    
      
const options = {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': Config.GOOGLE_API_KEY ,
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    data: encodedParams,
  
  
    };

    try{
        const response = await axios.request(options);
        
    
       return res.send(response.data)
    }catch(error){
        res.status(500).json({
            message:error.message

        })

    }


    }

module.exports = googleTranslator;