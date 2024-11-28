// ローディングから画面遷移


const loadingAreaLeft = document.querySelector('#loading-left');
const loadingAreaRight = document.querySelector('#loading-right');

// 動きの内容
const keyframes = {
    Transform: ['scaleX(1)', 'scaleX(0)'],
};

// 動きの詳細
const options = {
    duration: 1000,
    easing: 'ease',
    fill: 'forwards',
};

window.addEventListener('load', () => {
    // ローディング中(左側)
    loadingAreaLeft.animate(keyframes, options)


    // ローディング中(右側)
    loadingAreaRight.animate(keyframes, options)

});