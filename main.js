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
    let moon = document.getElementById('planet')
    let moontxt = document.getElementById('spaceT')
    let moontxt2 = document.getElementById('spaceT2')
    let moontxt3 = document.getElementById('spaceT3')
    let moontxt4 = document.getElementById('spaceT4')

    let txt01 = txt1.style

    if (colorTrack == '0'){
        txt01.color = 'black'
        colorTrack = '1'
        txt2.style.color = 'black'
        colorTrack = '1'
        txt3.style.color = 'black'
        colorTrack = '1'
        txt4.style.color = 'black'
        colorTrack = '1'
        moontxt.style.color = 'black'
        colorTrack = '1'
        moontxt2.style.color = 'black'
        colorTrack = '1'
        moontxt3.style.color = 'black'
        colorTrack = '1'
        moontxt4.style.color = 'black'
        colorTrack = '1'
        moon.style.background = 'orange'
        colorTrack = '1'
    } else if (colorTrack == '1'){
        txt01.color = 'white'
        colorTrack = '0'
        txt2.style.color = 'white'
        colorTrack = '0'
        txt3.style.color = 'white'
        colorTrack = '0'
        txt4.style.color = 'white'
        colorTrack = '0'
        moontxt.style.color = 'white'
        colorTrack = '0'
        moontxt2.style.color = 'white'
        colorTrack = '0'
        moontxt3.style.color = 'white'
        colorTrack = '0'
        moontxt4.style.color = 'white'
        colorTrack = '0'
        moon.style.background = '#1d1d1d'
        colorTrack = '0'
    }
}