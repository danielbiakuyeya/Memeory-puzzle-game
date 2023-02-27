document.addEventListener('DOMContentLoaded',() => {
//Card options
const cardArray = [
        {
            name: 'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'Ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        },

        {
            name: 'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'Ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        },

    ]
    

    //Maths random returns a number between 0 & 1
    //hence when the number is less than 0.5, it returns 
    //a negative value and vice versa(more than/above 0.5)

    cardArray.sort(() => 0.5 - Math.random())
    console.log(cardArray)
    
    const grid = document.querySelector('.Grid')
    const resultDisplay = document.querySelector('#result')

    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []
    
    function displayBoard(){
        for (let i = 0; i < cardArray.length; i++){
            const card  = document.createElement('img')
            card.setAttribute('src','src/images/blank.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }
   

    function flipCard(){
       let cardId = this.getAttribute('data-id')
       cardsChosen.push(cardArray[cardId].name)
       cardsChosenIds.push(cardId)
      this.setAttribute('src',cardArray[cardId].img )
      if (cardsChosen.length=== 2){
        setTimeout(checkForMatch,500)
      }
      console.log(cardsChosenIds)


    }
    function checkForMatch(){
        const cards =document.querySelectorAll('img')
         const optionOneId = cardsChosenIds[0]
         const optionTwoId = cardsChosenIds[1]


      if (optionOneId === optionTwoId){
        alert('You have clicked the same card twice!')
        cards[optionOneId].setAttribute('src','src/images/blank.png')
        cards[optionTwoId].setAttribute('src','src/images/blank.png')
      }else if (cardsChosen[0] === cardsChosen[1]){
        alert('You have found a match!')

        cards[optionOneId].setAttribute('src','src/images/white.png')
        cards[optionTwoId].setAttribute('src','src/images/white.png')
        cards[optionOneId].removeEventListener('click' , flipCard)
        cards[optionTwoId].removeEventListener('click' , flipCard)
        cardsWon.push(cardsChosen)
      } else{
        cards[optionOneId].setAttribute('src','src/images/blank.png')
        cards[optionTwoId].setAttribute('src','src/images/blank.png')
        alert('Sorry you lost! Try again!')
    }
       cardsChosen = []
       cardsChosenIds = []
       resultDisplay.textContent = cardsWon.length
       if (cardsWon.length === cardArray.length / 2){
        resultDisplay.textContent = 'CONGRATULATIONS! YOU HAVE WON!'
        alert('Game over!')
       }
       console.log(cardsWon)
       console.log(cardsChosen)

    }

    displayBoard()
})
