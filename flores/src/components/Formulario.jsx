import React from 'react'
import { Link } from 'react-router-dom'

class Formulario extends React.Component {

  constructor(args) {
    super(args)
    this.state = {
      email: '',
      name: '',
      message: ''
    }
  }

  onChange(e) {

    if (e.target.name === 'acept') {
      this.setState({
        [e.target.name]: e.target.checked
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  }

  save(e) {
    this.setState({
      message: 'Enviado correctamente'
    })
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <form>
            <div>
              <label htmlFor="email">Correo electrónico</label>
              <input
                value={this.state.email}
                onChange={this.onChange.bind(this)}
                name="email" id="email" type="email" />

              <label htmlFor="name">Nombre</label>
              <input
                value={this.state.name}
                onChange={this.onChange.bind(this)}
                name="name" id="name" type="text" />

              <label htmlFor="about">Escribe tu consulta</label>
              <textarea id="about" name="about"
                value={this.state.about}
                onChange={this.onChange.bind(this)} />

              <div>
                <button onClick={this.save.bind(this)}>Enviar</button>
                <span style={{ color: 'green' }}>{this.state.message}</span>
              </div>
            </div>
          </form>
        </header>
        <aside>
          <img src="assets/img/Wikipedia-logo.svg" alt="wikipedia logo" />
          <h2>Flora de Uruguay</h2>
          <h3>Lista de especies florales que se pueden encontrar en Uruguay y que son nativas de la región.</h3>
          <form action="https://es.wikipedia.org/wiki/Anexo:Especies_de_la_flora_nativa_de_Uruguay" id="info">
            <button>Aprender más</button>
          </form>
        </aside>
        <nav>
          <div>
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/contacto"> Contacto</Link>
            <a rel="noreferrer" target="_blank" href="https://senpaiacademy.com/uy/">Senpai Academy</a>
          </div>
        </nav>
      </React.Fragment>


    )
  }
}


export default Formulario