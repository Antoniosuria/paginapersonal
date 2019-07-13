let imgTrack = '0'

function change() {
    let image = document.getElementById('Pimg2');

    if (imgTrack == '0'){
    image.src = 'architecture-background-buildings-218983.jpg';
    imgTrack = '1'
    } else if (imgTrack == '1'){
    image.src = 'background-calm-clouds-747964.jpg';
    imgTrack = '2'
    } else if (imgTrack == '2'){
        image.src = 'aroma-background-black-1415555.jpg';
        imgTrack = '3'
    } else if (imgTrack == '3'){
        image.src = 'africa-angry-animal-1106452.jpg'
        imgTrack = 0
    }
}

