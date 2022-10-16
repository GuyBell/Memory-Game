import React, { useState } from 'react';
import FCcard from './FCcard';
import FCModalSuccesse from './FCModalSuccesse';

export default function FCcards() {

  const gameCardsArray = [
    { id: 1, img: '/cars_logo/alfa_romeo.png', stat: "" },
    { id: 1, img: '/cars_logo/alfa_romeo.png', stat: "" },
    { id: 2, img: '/cars_logo/mustang.png', stat: "" },
    { id: 2, img: '/cars_logo/mustang.png', stat: "" },
    { id: 3, img: '/cars_logo/bmw.png', stat: "" },
    { id: 3, img: '/cars_logo/bmw.png', stat: "" },
    { id: 4, img: '/cars_logo/ferrari.png', stat: "" },
    { id: 4, img: '/cars_logo/ferrari.png', stat: "" },
    { id: 5, img: '/cars_logo/jaguar.png', stat: "" },
    { id: 5, img: '/cars_logo/jaguar.png', stat: "" },
    { id: 6, img: '/cars_logo/toyota.png', stat: "" },
    { id: 6, img: '/cars_logo/toyota.png', stat: "" },
    { id: 7, img: '/cars_logo/mercedes_benz.png', stat: "" },
    { id: 7, img: '/cars_logo/mercedes_benz.png', stat: "" },
    { id: 8, img: '/cars_logo/tesla.png', stat: "" },
    { id: 8, img: '/cars_logo/tesla.png', stat: "" }
  ]

  const [imageCards, setImageCards] = useState(gameCardsArray.sort(() => Math.random() - 0.5))

  const [prev, setPrev] = useState(-1);
  const [successes, setSuccesses] = useState(1)
  //Modal
  const [show, setShow] = useState(false);


  const check = (current) => {
    if (imageCards[current].id == imageCards[prev].id) {
      imageCards[current].stat = "correct"
      imageCards[prev].stat = "correct"
      setImageCards([...imageCards])
      setPrev(-1)
      CheckingIfTheGameIsOver()
    } else {
      imageCards[current].stat = "wrong"
      imageCards[prev].stat = "wrong"
      setImageCards([...imageCards])
      setTimeout(() => {
        imageCards[current].stat = ""
        imageCards[prev].stat = ""
        setImageCards([...imageCards])
        setPrev(-1)
      }, 1000);
    }
  }

  const cardClick = (id) => {
    if (prev === -1) {
      imageCards[id].stat = "active"
      setImageCards([...imageCards])
      setPrev(id)
    } else {
      check(id)
    }
  }

  const CheckingIfTheGameIsOver = () => {
    let numOfSuccesses = successes;
    setSuccesses(numOfSuccesses + 1)
    if (successes == 8) {
      setShow(true)
      setImageCards(gameCardsArray.sort(() => Math.random() - 0.5))
    }
  }

  const closeModal = () => {
    setShow(false)
  }

  return (
    <>
     <FCModalSuccesse show={show} closeModal={closeModal}/>
      {imageCards.map((i, index) => (
        <FCcard key={index} id={index} card={i} cardClick={cardClick} />
      ))}
    </>
  )
}
