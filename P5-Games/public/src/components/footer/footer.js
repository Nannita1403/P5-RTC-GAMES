
export const footer = document.createElement("footer");
import "./footer.css";

footer.innerHTML += `
  <p>©️ 2024 All rights reserved</p> 
  <p>Design By Natalia Magi</p>
  </footer>
  `;
const app = document.querySelector('#app')
document.body.append(footer);