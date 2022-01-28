import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';

function Card (){
    return (
        <div className="Card">
            <article>
                <img src={icon1} alt="Declarative"/>             
                <h1>Declarative</h1>
                <p>React makes it painless to create interative UIs.</p>
            </article>
            <article>
                <img src={icon2} alt="Components"/>             
                <h1>Components</h1>
                <p>Build encapsulated components that manage their state.</p>
            </article>
            <article>
                <img src={icon3} alt="Single-Way"/>             
                <h1>Single-Way</h1>
                <p>A set of immutable values are passed as components.</p>
            </article>  
            <article>
                <img src={icon4} alt="JSX"/>             
                <h1>JSX</h1>
                <p>Statically-typed designed to run on modern browsers.</p>
            </article>
        </div>
    )
}
export default Card;