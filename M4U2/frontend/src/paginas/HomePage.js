import React from "react";

const HomePage = (props) => {
    return(
        <main className="holder">
        <img src="img/foto_portada.png" alt="portada" />

        <section>
            <h2>¡Bienvenido!</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa saepe consequuntur, similique adipisci iste nulla quibusdam est iusto nostrum doloremque rem tenetur excepturi! Rem odit nobis eos itaque, illum maiores?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos numquam nesciunt quaerat amet dolorem quia perferendis voluptates quasi enim? Officia ducimus molestiae quidem eius quae, nulla ullam enim quia nisi.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam blanditiis, ipsum fugit rem, praesentium illum ducimus eveniet mollitia quos delectus id ullam est maxime!
            </p>
        </section>
        <hr/>
        <div className="fila">
            <div className="columna33">
                <h3>Proximo evento</h3>
                <a href="agenda"></a>
                <img src="img/calendario.png" alt="foto_agenda"/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt amet accusamus voluptatum repellat fugit, saepe adipisci voluptatem possimus est dolor molestias ullam neque ipsam in maxime ut a dolore deleniti!</p>
            </div>
            <div className="columna33">
                <h3>Actualidad</h3>
                <img src="img/diario.png" alt="foto_noticias"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quo...</p>
                <a href="noticias.html">continuar leyendo...</a>
            </div>
            <div className="columna33">
                <h3>Socios Al Cuidado</h3>
                <a href=""><img src="https://via.placeholder.com/130" alt=""/></a>
                <a href=""><img src="https://via.placeholder.com/130" alt=""/></a>
                <a href=""><img src="https://via.placeholder.com/130" alt=""/></a>
                <a href=""><img src="https://via.placeholder.com/130" alt=""/></a>
            </div>
        </div>
    </main>
    );
}

export default HomePage;