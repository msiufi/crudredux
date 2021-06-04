import React from 'react';

const NuevoProducto = () => {
  return ( 
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>

            <form action="">
              <div className="form-group">
                <label >Nombre Productos</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Nombre Producto"
                name="nombre"
                />
              </div>
              <div className="form-group">
                <label >Precio Productos</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Precio Producto"
                name="precio"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default NuevoProducto;