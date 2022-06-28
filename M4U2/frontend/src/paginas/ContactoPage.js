import React from "react";

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="datos">
                <img src="img/al_cuidado_g.png" alt="logo" />
                <p>
                    <strong>Dirección:</strong>
                    <br />
                    calle y número
                    <br />
                    ciudad - provincia - país
                    <br />
                </p>
                <p>
                    <strong>Horarios de atención:</strong>
                    <br />
                    dias de semana desde hh:mm hasta hh:mm
                    <br />
                    sábados y feriados desde hh:mm hasta hh:mm
                    <br />
                </p>
                <p>
                    <strong>Teléfono:</strong>
                    xxxxxxxxxxxxxxx
                    <br />
                    <strong>Whatsapp:</strong>
                    xxxxxxxxxxxxxxx
                </p>
                <p>
                    <strong>e-mail:</strong>
                    <a href="mailto:alcuidado@ejemplo.com">alcuidado@ejemplo.com</a>
                </p>

            </div>

    </main>
    );
}

export default ContactoPage;