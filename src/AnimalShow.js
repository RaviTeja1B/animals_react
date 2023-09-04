import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
import dog from './svg/dog.svg';
import { useState } from 'react';
import './AnimalShow.css'

const svgMap={
    bird,cat,cow,gator,heart,horse,dog
}


const AnimalShow = ({type}) => {
    const [click, setClick] = useState(0)

    const handleClick = ()=>{
        setClick(click+1)
    }


  return (
    <div onClick={handleClick} className="animal-show">
        <img src={svgMap[type]} alt="animal" />
        <img src={heart} alt="heart"  style={{width:10+10*click+"px"}}/>
    </div>
  )
}
export default AnimalShow