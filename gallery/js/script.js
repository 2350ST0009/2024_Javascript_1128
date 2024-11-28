// 画像ギャラリー

const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');

// for文でimgを取得/表示

// for (let i = 0; i < thumbImages.length; i++) {
//     thumbImages[i].addEventListener('mouseover',(event) => {
//         // console.log(event.target.src);
//         // mainimegeのソースをtargetで取ってきた画像ソースに置き換える
//         mainImage.src = event.target.src;
//         mainImage.animate({ opacity: [0,1] }, 500);
//     })   
// }

/*==========================================*/ 
// forEach文でimgを取得/表示

thumbImages.forEach((thumbimage) => {
    // console.log(thumbimage);
    thumbimage.addEventListener('mouseover', (event) => {
        mainImage.src = event.target.src;
        mainImage.animate( {opacity: [0, 1]}, 500 );
    });
});