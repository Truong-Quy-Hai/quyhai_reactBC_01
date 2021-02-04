import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  state = {
    itemArr: [
      // { src, title, des },
      // { src, title, des },
      // { src, title, des },
      // { src, title, des },
    ]
  }

  componentDidMount() {
    fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=4")
      .then(res => res.json())
      .then(data => {
        let desArr = data;

        fetch('https://picsum.photos/v2/list?page=1&limit=4')
          .then(res => res.json())
          .then(cards => {
            for (let i = 0; i < cards.length; i++) {
              this.setState(state => ({
                itemArr: [...state.itemArr, {
                  src: cards[i].download_url,
                  author: cards[i].author,
                  des: desArr[i]
                }]
              }))
            }
          });
      })


  }

  render() {
    const { itemArr } = this.state;
    console.log(itemArr);
    return (
      <div className="row text-center">
        {
          itemArr.length === 4 && <>
            <ProductItem imgSrc={itemArr[0].src} title={itemArr[0].author} des={itemArr[0].des} alt={`a photo by ${itemArr[0].author}`} />
            <ProductItem imgSrc={itemArr[1].src} title={itemArr[1].author} des={itemArr[1].des} alt={`a photo by ${itemArr[0].author}`} />
            <ProductItem imgSrc={itemArr[2].src} title={itemArr[2].author} des={itemArr[2].des} alt={`a photo by ${itemArr[0].author}`} />
            <ProductItem imgSrc={itemArr[3].src} title={itemArr[3].author} des={itemArr[3].des} alt={`a photo by ${itemArr[0].author}`} />
          </>
        }
      </div>
    )
  }
}
