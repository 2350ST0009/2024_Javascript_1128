// ローディングから画面遷移


const loadingAreaGray = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');


window.addEventListener('load', () => {
    // ローディング中(グレースクリーン)
    loadingAreaGray.animate(
        // 動かす内容
        {
            backgroundFilter: ['blur(10px)', 'blur(0)'],
            background: ['rgba(238,221,136,1)', 'rgba(238,221,136,0)'],
            visibility: 'hidden',
        },
        // 動きの詳細
        {
            duration: 1200,
            delay: 1200,
            eading: 'ease',
            fill: 'forwards',
        }
    );

    // ローディング中(ぼかし画面)
    loadingAreaGreen.animate(
        // 動かす内容
        {
            translate: ['0 100vh', '0 0', '0 -100vh']
        },
        // 動きの詳細
        {
            duration: 2000,
            delay: 800,
            eading: 'ease',
            fill: 'forwards',
        }
    );

    // ローディング中テキスト
    loadingText.animate(
        // 動かす内容
        {
            opacity: [1, 0],
        },
        // 動きの詳細
        {
            duration: 1200,
            eading: 'ease',
            fill: 'forwards',
        }
    );
});