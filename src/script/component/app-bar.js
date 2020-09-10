class AppBar extends HTMLElement {
   connectedCallback(){
       this.render();
   }
 
   render() {
       this.innerHTML = `
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
  <a class="navbar-brand" href="#">Xdrink</a>
 <div class="container">
 <a class="navbar-brand"></a>
  </div>
  </div>
  
</nav> `;
   }
}
 
customElements.define("app-bar", AppBar);