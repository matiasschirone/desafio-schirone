export default function Nabvar() {

    const linkStyle={
        margin: 0,
        padding:0,
        display:"flex",
        justifycontent: "space-between",    
    }

    return (
       <header className="header">
           <div className="logo">
               <img src="imagen/logo.png" alt="logo"/>
           </div>
           <ul className="nav-links" style={linkStyle}>
               <li>Inicio</li>
               <li>Productos</li>
               <li>Sobre Nosotros</li>
               <li>Contacto</li>
           </ul>
       </header>
    );
}

