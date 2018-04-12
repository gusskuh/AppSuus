export default {
    template: `
    <section class="hero is-primary box ">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
               <!-- <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">  -->
               <h1>AppSuuS</h1>
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
        </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                
                <router-link to="/" class="navbar-item is-active"><li>Home</li></router-link>
                <router-link to="/mail" class="navbar-item"><li>Mister-Mail</li></router-link>
                <router-link to="/places" class="navbar-item"><li>Mister-Place</li></router-link>
                <router-link to="/keeper" class="navbar-item"><li>Mister-Keeper</li></router-link>
           
            </div>
          </div>
        </nav>
      </div>
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          
        </div>
      </div>
    </section>
`
}


/* <section>
    <ul>
    <router-link to="/"><li>Home</li></router-link>
    <router-link to="/mail"><li>Mister-Mail</li></router-link>
    <router-link to="/places"><li>Mister-Place</li></router-link>
    <router-link to="/keeper"><li>Mister-Keeper</li></router-link>
    </ul>

</section> */







