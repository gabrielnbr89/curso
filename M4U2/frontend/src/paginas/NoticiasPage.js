import React from "react";

const NoticiasPage = (props) => {
    return(
        <main className="holder">
        <h2>Noticias</h2>
        <hr />
        <div className="noticia">
            <div className="info_noticia">
                <h3>Noticia1</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat voluptatum dolores fugit
                    sed voluptatem eius, sunt consectetur, neque quibusdam ab, sapiente velit quidem temporibus ex ipsam
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, dolor sequi. Tempore, quis
                    voluptate quod dolores repudiandae odio, a ab porro sint incidunt quidem vel obcaecati voluptates.
                    Dignissimos, quia similique.
                </p>
                <a href="">continuar leyendo...</a>
            </div>
            <img src="https://via.placeholder.com/300" alt="imagen_noticia"/>
        </div>
        <div className="noticia">
            <div className="info_noticia">
                <h3>Noticia2</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat voluptatum dolores fugit
                    sed voluptatem eius, sunt consectetur, neque quibusdam ab, sapiente velit quidem temporibus ex ipsam
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, dolor sequi. Tempore, quis
                    voluptate quod dolores repudiandae odio, a ab porro sint incidunt quidem vel obcaecati voluptates.
                    Dignissimos, quia similique.
                </p>
                <a href="">continuar leyendo...</a>
            </div>
            <img src="https://via.placeholder.com/460" alt="imagen_noticia" />
        </div>
        <div className="noticia">
                <div className="info_noticia">
                <h3>Noticia3</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat voluptatum dolores fugit
                    sed voluptatem eius, sunt consectetur, neque quibusdam ab, sapiente velit quidem temporibus ex ipsam
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, dolor sequi. Tempore, quis
                    voluptate quod dolores repudiandae odio, a ab porro sint incidunt quidem vel obcaecati voluptates.
                    Dignissimos, quia similique.
                </p>
                <a href="">continuar leyendo...</a>
            </div>
            <img src="https://via.placeholder.com/430x280" alt="imagen_noticia"/>
        </div>
        
    </main>
    );
}

export default NoticiasPage;