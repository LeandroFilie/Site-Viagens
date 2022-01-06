const imagesSlider = [
  {
    name: 'Monte Fuji',
    description: 'Conheça o Monte Fuji, veja as belezas desse lugar! O embarque está próximo, junte-se a nós nessa experiência',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2092&q=80'
  },
  {
    name: 'Macchu Pichu',
    description: 'Conheça Macchu Picchu, uma das 7 maravilhas do mundo, junte-se a nós nessa experiência',
    image:'https://images.unsplash.com/photo-1571492913849-fdc97148242d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    name: 'Amazônia',
    description: 'Conheça a floresta Amazônica, veja a beleza natural deste local! O embarque está próximo, junte-se a nós nessa experiência',
    image:'https://images.unsplash.com/photo-1593069567131-53a0614dde1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
  }
]

const home = document.getElementById('home')
const imgSlider = document.getElementById('imgSlider')
const sliderNavigation = document.querySelectorAll('.slider-item');
sliderNavigation[0].classList.add('active')

function handlerSliderNavigation(index){
  if(index === 0){
    sliderNavigation[2].classList.remove('active')
  }
  else{
    sliderNavigation[i-1].classList.remove('active')
  }
}

function slider(){
  if(i >= imagesSlider.length){
    i = 0;
  }
  
  const sliderActiveImage = handlerItemsImages(imagesSlider[i].name, imagesSlider[i].description, imagesSlider[i].image)

  home.innerHTML = sliderActiveImage.text
  imgSlider.setAttribute('src',sliderActiveImage.image)
  sliderNavigation[i].classList.add('active')

  handlerSliderNavigation(i)
  
  i++;
}

function handlerItemsImages(name, description, image){
  return {
    text: `
    <h1>${name}</h1>
    <p>${description}</p>
    <button>Saiba Mais</button>
    `,
    image: imagesSlider[i].image
  }
}

let i = 1;
setInterval(slider, 5000)