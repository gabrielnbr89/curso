import React from "react";

const SepartePage = (props) => {
    return(
        <main className="holder">
        <h2>Forma parte de nuestro equipo</h2>
        <hr/>
        <div className="fila">
            <div className="columna67">
                <h3>Juntos llegarémos más lejos!</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusamus deserunt possimus placeat,
                    perferendis harum dolore repellendus omnis ad quas provident recusandae eos quibusdam, modi
                    aspernatur,
                    temporibus similique nostrum molestiae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui atque corrupti quisquam velit
                    laborum illo quis, aperiam neque reprehenderit vero doloremque tenetur! Ad nihil corporis obcaecati
                    a
                    ipsum quod?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sit quia neque. Suscipit ex quos
                    beatae
                    rerum doloribus, dicta modi aspernatur odit maxime nostrum facere, libero minus assumenda, enim
                    dolorum.

                </p>
            </div>
            <div className="columna33">
                <img className="" src="img/globo.png" alt="globo"/>
            </div>
        </div>
        <div className="contacto">
            <h3>Completa el siguiente formulario para que no spongamos en contacto contigo</h3>
            <form action="" method="">
                <p> <label for="">Eres:</label>
                    <input type="radio" name="hm" value="empresa"/> Empresa
                    <input type="radio" name="hm" value="persona"/> Persona
                </p>

                <ul>
                    <li>
                        <label for="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre"/>
                    </li>
                    <li>
                        <label for="telefono">Teléfono:</label>
                        <input type="text" id="telefono" name="telefono"/>
                    </li>
                    <li>
                        <label for="mail">e-mail:</label>
                        <input type="email" id="mail" name="email"/>
                    </li>
                    <li>
                        <label for="msg">Mensaje:</label>
                        <textarea id="msg" name="msg" placeholder="Quiero aportar a la causa..."></textarea>
                    </li>
                </ul>

                <p>
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
        </div>
    </main>
    );
}

export default SepartePage;