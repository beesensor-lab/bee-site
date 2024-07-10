const head=`
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">`

const header=`
	<nav>
    <div class="nav-wrapper orange darken-2">
      <a href="#!" class="brand-logo">BEESENSOR</a>

      <a href="#" data-target="slide-out" class="sidenav-trigger show-on-larger"><i class="material-icons">menu</i></a>
			
			<ul class="right hide-on-med-and-down">
				<li><a href="home">Home</a></li>
				<li><a href="support">Suporte</a></li>
				<li><a href="contact">Contatos</a></li>
				<li><a href="payment">Pagamento</a></li>
				<li><a href="">Sobre Projeto</a></li>
				<li><a href="terms">Termos de uso</a></li>
			</ul>

			<ul class="sidenav" id="slide-out">
				<li><a href="home"><i class="material-icons">home</i>Home</a></li>
				<li><a href="support"><i class="material-icons">help</i>Suporte</a></li>
				<li><a href="contact"><i class="material-icons">phone</i>Contatos</a></li>
				<li><a href="payment"><i class="material-icons">payment</i>Pagamento</a></li>
				<li><a href=""><i class="material-icons">public</i>Sobre Projeto</a></li>
				<li><a href="terms"><i class="material-icons">security</i>Termos de uso</a></li>
			</ul>
		</div>
  </nav>`


document.querySelector("head").insertAdjacentHTML("afterbegin", head);
document.querySelector("body").insertAdjacentHTML("afterbegin", header);

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems);
});
