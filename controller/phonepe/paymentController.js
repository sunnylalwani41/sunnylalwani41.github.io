

// const generateTransactionId=()=>{
//     const timestamp = Date.now();
//     const randomNum = Math.floor(Math.random()*1000000);
//     const marchantPrefix = "D";
//     const transactionId= `${marchantPrefix}${timestamp}${randomNum}`;
//     return transactionId;
// }

// const generateMerchantUserId = () =>{
//     const length = 32;
//     const allowedCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
//     let merchantUserId = "";
//     for(let i=0; i<length; i++){
//         const randomIndex= Math.floor(Math.random()*allowedCharacter.length);
//         merchantUserId+=allowedCharacter[randomIndex];
//     }
//     return merchantUserId;
// }

const newPayment = async (req, res) => {
    try {
        const crypto =  require('crypto');
        const axios = require('axios');
        const express = require('express');
        const router = express.Router();
        router.use(express.json());
        
        const cors = require('cors'); 

        // const amount =req.body.amount;
        // console.log("amount",amount);
        
        
        
        
        

        axios.request(options).then(function (response) {
            console.log(response.data)
            return res.redirect(response.data.data.instrumentResponse.redirectInfo.url)
        })
        .catch(function (error) {
            console.error(error);
        });

    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}

const checkStatus = async(req, res) => {
    const merchantTransactionId = res.req.body.transactionId
    const merchantId = res.req.body.merchantId

    const keyIndex = 1;
    const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + salt_key;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + "###" + keyIndex;

    const options = {
    method: 'GET',
    url: `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${merchantTransactionId}`,
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum,
        'X-MERCHANT-ID': `${merchantId}`
    }
    };

    // CHECK PAYMENT TATUS
    axios.request(options).then(async(response) => {
        if (response.data.success === true) {
            const url = `http://localhost:3000/success`
            return res.redirect(url)
        } else {
            const url = `http://localhost:3000/failure`
            return res.redirect(url)
        }
    })
    .catch((error) => {
        console.error(error);
    });
};

module.exports = {
    newPayment,
    checkStatus
}