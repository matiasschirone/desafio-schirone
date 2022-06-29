import React from 'react'

const Contactos = () => {
  return (
    <div className='Contacto'>

      <div className='section-title'>
        <h2>Contacto</h2>
      </div>

      <div className='datos'>
        <div className='col-lg-6'>
          <div className='info-box mb-4'>
            <h3>show Room</h3>
            <p>Cochabamba 333,3 piso Buenos Aires, Argentina</p>
          </div>
        </div>

        <div className='col-lg-3 col-md-6'>
          <div className='info-box  mb-4'>
            <i className='bx bx-envelope'></i>
            <h3>Email</h3>
            <p>contact@example.com</p>
          </div>
        </div>

        <div className='col-lg-3 col-md-6'>
          <div className='info-box  mb-4'>
            <i className='bx bx-phone-call'></i>
            <h3>Telefono</h3>
            <p>+1 5589 55488 55</p>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Contactos
