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

let colorTrack = '0'

function changecolortxt() {
    let txt1 = document.getElementById('name')
    let txt2 = document.getElementById('moreinfo')
    let txt3 = document.getElementById('idiomas')
    let txt4 = document.getElementById('moreinfo2')
    let txt5 = document.getElementById('txt')
    let txt6 = document.getElementById('txt2')

    if (colorTrack == '0'){
        txt1.style.color = 'black'
        txt2.style.color = 'black'
        txt3.style.color = 'black'
        txt4.style.color = 'black'
        txt5.style.color = 'black'
        txt6.style.color = 'black'
        colorTrack = '1'
    } else if (colorTrack == '1'){
        txt1.style.color = 'white'
        txt2.style.color = 'white'
        txt3.style.color = 'white'
        txt4.style.color = 'white'
        txt5.style.color = 'white'
        txt6.style.color = 'white'
        colorTrack = '0'
    }
}