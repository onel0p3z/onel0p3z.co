'use strict';

/* from github sites
const metas = document.getElementsByTagName('meta');

const gestureStart = () => {
    for (let i = 0; i < metas.length; i++) {
        if (metas[i].name == 'viewport') {
            metas[i].content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
        }
    }
};

if (navigator.userAgent.match(/iPhone/i)) {
    for (let i = 0; i < metas.length; i++) {
        if (metas[i].name == 'viewport') {
            metas[i].content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
        }
    }

    document.addEventListener('gesturestart', gestureStart, false);
}
*/

const getRandomNumber = (min = 1, max = 10) => {
    const pad = 1;
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + pad)) + min
};

// @TODO: get this from service
const backImage = (imgPath = 'img/1.jpg') => {
    const container = document.getElementById('container');

    container.style.backgroundImage = `url('${imgPath}')`;
};


backImage(`img/${getRandomNumber(1,5)}.jpg`);
