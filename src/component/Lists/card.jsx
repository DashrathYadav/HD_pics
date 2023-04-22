// const path = '../../../public/cheeta.avif';
import "./card.css";
export function Card({src}) {
  return (
    <div className="card">  
     <a href={src} download={src}>
    <img src={src} alt="image"/>
   </a>

    </div>
  );
}
