
import'./button.css'
export function Button() {

      function mousePosition(e) {
            const button=document.getElementById("button");
          var x = e.pageX - button.offsetLeft; //x position within the element.
          var y = e.pageY - button.offsetTop;
          button.style.setProperty("--xpos", x + "px");
          button.style.setProperty("--ypos", y + "px");
        }

        return <button id='button' className='btn' onMouseOver={mousePosition}><span>Search</span></button>
  
}
