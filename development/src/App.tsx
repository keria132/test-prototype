import './App.scss'
import catImage from './assets/cat.png';

function App() {

  return (
    <section className='layout'>

        <h1 className='layout__heading'>Ты сегодня покормил кота?</h1>

        <Card productFeature="с фуа-гра" productWeight="0,5" productQuantity="10 порций" productGifts="мышь в подарок" productExtraText=""/>
        <Card productFeature="с рыбой" productWeight="2" productQuantity="40 порций" productGifts="2 мыши в подарок" productExtraText=""/>
        <Card productFeature="с курой" productWeight="5" productQuantity="100 порций" productGifts="5 мышей в подарок" productExtraText="заказчик доволен" disabled/>

    </section>
  )
}

const Card = (props: any) => {

    function toggleSelected(e: any){
        console.log(e.currentTarget)
        const target = e.currentTarget as HTMLElement;
        if(target.classList.contains("disabled")) return;
        if(target.classList.contains("selected")){
            target.parentElement!.children[1].innerHTML = "Чего сидишь? Порадуй котэ, <ins>купи</ins> "
        }else{
            target.parentElement!.children[1].innerHTML = "Печень утки разварная с артишоками."
        }
        target.classList.toggle("selected");
    }

    return (
        <div className='cardWrapper'>

            <div className={`cardElement ${props.disabled === true ? "disabled" : ""}`} onClick={ (e) => {toggleSelected(e)} } >
                <svg  className='cardElement__background'
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >

                    <path fillRule="evenodd" strokeWidth="4px" strokeLinecap="butt" strokeLinejoin="miter" fill="rgb(242, 242, 242)"
                    d="M310.000,482.000 L14.000,482.000 C7.373,482.000 2.000,476.627 2.000,470.000 L2.000,45.000 L45.000,2.000 L310.000,2.000 C316.627,2.000 322.000,7.372 322.000,14.000 L322.000,470.000 C322.000,476.627 316.627,482.000 310.000,482.000 Z"/>
                
                    <foreignObject className='card'>
                        <small className='card__quietName'>Сказочное заморское яство</small>
                        <h2 className='card__productName'>Нямушка</h2>
                        <h3 className='card__productFeature'>{props.productFeature}</h3>
                        <small className='card__productQuantity'>{props.productQuantity}</small>
                        <small className='card__productGifts'>{props.productGifts}</small>
                        <small className='card__productExtraText'>{props.productExtraText}</small>
                        <img className='card__catImage' src={catImage}/>
                        <div className='card__productWeight' id='weight'><h2>{props.productWeight}</h2> <p>кг</p></div>
                    </foreignObject>
                
                </svg>

                <svg  className='cardElement__border'
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <path fillRule="evenodd" stroke="rgb(22, 152, 217)" strokeWidth="4px" strokeLinecap="butt" strokeLinejoin="miter" fill="transparent"
                    d="M310.000,482.000 L14.000,482.000 C7.373,482.000 2.000,476.627 2.000,470.000 L2.000,45.000 L45.000,2.000 L310.000,2.000 C316.627,2.000 322.000,7.372 322.000,14.000 L322.000,470.000 C322.000,476.627 316.627,482.000 310.000,482.000 Z"/>
                
                </svg>
            </div>

            {props.disabled === true ? <p className='cardWrapper__description' style={{color: "#ffff66"}} onClick={ (e) => {(e.currentTarget.parentElement!.children[0] as HTMLElement).click()} }>{"Печалька, " + props.productFeature + " закончился"}</p> : <p className='cardWrapper__description' onClick={ (e) => {(e.currentTarget.parentElement!.children[0] as HTMLElement).click()} }>Чего сидишь? Порадуй котэ, <ins>купи</ins> </p>}
        </div>
        
    )
}

export default App
