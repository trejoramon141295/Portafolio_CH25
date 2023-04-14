let header = document.getElementsByTagName("header");

const Navbar =
`   <nav class="navbar navbar-expand-lg"><!--clase navbar para style.css-->
        <div class="container-fluid">
        <a class="navbar-brand" href="./index.html">Acerca de mi</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./proyectos.html">Proyectos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./habilidades.html">Habilidades</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./contacto.html">Contacto</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
`  ;

header[0].insertAdjacentHTML("afterbegin",Navbar);