const express = require('express');
const crypto = require('crypto');
const app = express();
const PORT = 3000;

function bla(callback) {
    let blaRes = {
        "title": "6 Secure Randoms",
        "randoms": []
    };

    function makeSecureRandom(size) {

        return new Promise((resolve, reject) => {
            crypto.randomBytes(size, function (err, buffer) {
                if (err) {
                    reject();
                } else {
                    let secureHex = buffer.toString('hex');
                    resolve(secureHex);
                }
            })
        }).then((secureing) => bla.randoms.push({ length: securering.length, random: securering }))
    }

    function getSecureRandom(size) {
        let tempList = [];

        for (var i = size; i >= 8; i -= 8) {
            tempList.push(makeSecureRandom(i));
        }

        return tempList;
    }

    app.get('/api/securerandoms', (req, res) => {

        Promise.all(getSecureRandom(48)).then(() => res.json(blaRes));

    });

    app.listen(PORT, () => console.log(`listening on port ${PORT}`));