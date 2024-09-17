import React, { useState } from 'react';
import s from './HomePage.module.css';
import { useAuth } from '../../context';

import videoCerrarSesion from '../../assets/video/i-cerrarSesion.mp4';
import videoNavegacion from '../../assets/video/i-navegacion.mp4';
import videoCargando from '../../assets/video/i-cargando.mp4';
import videoAlertSuccess from '../../assets/video/i-alertSuccess.mp4';
import videoAlertError from '../../assets/video/i-alertError.mp4';

import obtenerEmpleado1 from '../../assets/img/empleados/obtenerEmpleado1.png';
import obtenerEmpleado2 from '../../assets/img/empleados/obtenerEmpleado2.png';
import obtenerEmpleados1 from '../../assets/img/empleados/obtenerEmpleados1.png';
import obtenerEmpleados2 from '../../assets/img/empleados/obtenerEmpleados2.png';
import obtenerEmpleados3 from '../../assets/img/empleados/obtenerEmpleados3.png';
import crearEmpleado1 from '../../assets/img/empleados/crearEmpleado1.png';
import crearEmpleado2 from '../../assets/img/empleados/crearEmpleado2.png';
import crearEmpleado3 from '../../assets/img/empleados/crearEmpleado3.png';
import editarEmpleado1 from '../../assets/img/empleados/editarEmpleado1.png';
import editarEmpleado2 from '../../assets/img/empleados/editarEmpleado2.png';
import editarEmpleado3 from '../../assets/img/empleados/editarEmpleado3.png';
import eliminarEmpleado1 from '../../assets/img/empleados/eliminarEmpleado1.png';
import eliminarEmpleado2 from '../../assets/img/empleados/eliminarEmpleado2.png';

const HomePage = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    {
      id: 'cerrar-sesion',
      title: '¿Cómo puedo cerrar sesión?',
      content: (
        <>
          <p>Para cerrar sesión, haz clic en tu nombre de usuario, ubicado en la esquina superior derecha de la barra de navegación. Luego selecciona "Cerrar sesión".</p>
          <video src={videoCerrarSesion} autoPlay loop muted className={s.video} />
        </>
      )
    },
    {
      id: 'navegacion',
      title: '¿Cómo puedo navegar entre las diferentes secciones?',
      content: (
        <>
          <p>Para navegar entre las secciones de la aplicación, haz clic en el ícono del menú y selecciona la página que deseas visitar. Luego, cierra el menú.</p>
          <video src={videoNavegacion} autoPlay loop muted className={s.video} />
        </>
      )
    },
    {
      id: 'obtener-empleado',
      title: '¿Cómo obtener un empleado en particular?',
      content: (
        <>
          <ol>
            <li>Introduce el documento del empleado en el buscador.</li>
            <img src={obtenerEmpleado1} alt="Buscador de empleados" className={s.image} />
            <li>Presiona el botón "Buscar".</li>
            <img src={obtenerEmpleado2} alt="Botón buscar" className={`${s.image} ${s.btnImage}`} />
          </ol>
        </>
      )
    },
    {
      id: 'obtener-empleados',
      title: '¿Cómo obtener todos los empleados?',
      content: (
        <>
          <h2>Opción 1:</h2>
          <ol>
            <li>Presiona el botón "Mostrar Todo".</li>
            <img src={obtenerEmpleados1} alt="Botón mostrar todo" className={`${s.image} ${s.btnImage}`} />
          </ol>
          <h2>Opción 2:</h2>
          <ol>
            <li>Deja vacío el campo de búsqueda.</li>
            <img src={obtenerEmpleados2} alt="Buscador vacío" className={s.image} />
            <li>Presiona el botón "Buscar".</li>
            <img src={obtenerEmpleados3} alt="Botón buscar" className={`${s.image} ${s.btnImage}`} />
          </ol>
        </>
      )
    },
    {
      id: 'crear-empleado',
      title: '¿Cómo puedo crear un empleado?',
      content: (
        <>
          <ol>
            <li>Presiona el botón "Crear Empleado".</li>
            <img src={crearEmpleado1} alt="Botón crear empleado" className={`${s.image} ${s.btnImage}`} />
            <li>Completa el formulario.</li>
            <img src={crearEmpleado2} alt="Formulario de creación de empleado" className={s.image} />
            <li>Presiona el botón "Crear Empleado".</li>
            <img src={crearEmpleado3} alt="Botón para crear empleado" className={`${s.image} ${s.btnImage}`} />
          </ol>
        </>
      )
    },
    {
      id: 'editar-empleado',
      title: '¿Cómo puedo editar un empleado?',
      content: (
        <>
          <ol>
            <li>Presiona el botón "Editar" junto al empleado.</li>
            <img src={editarEmpleado1} alt="Botón editar empleado" className={`${s.image} ${s.iconImage}`} />
            <li>Modifica los campos necesarios en el formulario.</li>
            <img src={editarEmpleado2} alt="Formulario de edición" className={s.image} />
            <li>Presiona el botón "Guardar Cambios".</li>
            <img src={editarEmpleado3} alt="Botón guardar cambios" className={`${s.image} ${s.btnImage}`} />
          </ol>
        </>
      )
    },
    {
      id: 'eliminar-empleado',
      title: '¿Cómo puedo eliminar un empleado?',
      content: (
        <>
          <ol>
            <li>Presiona el botón "Eliminar" junto al empleado.</li>
            <img src={eliminarEmpleado1} alt="Botón eliminar empleado" className={`${s.image} ${s.iconImage}`} />
            <li>Confirma la eliminación presionando "OK".</li>
            <img src={eliminarEmpleado2} alt="Confirmación de eliminación" className={s.image} />
          </ol>
        </>
      )
    },
    {
      id: 'cargando',
      title: 'Pantalla de carga (cargando...)',
      content: (
        <>
          <p>Pantalla que se muestra cuando se está cargando alguna información.</p>
          <video src={videoCargando} autoPlay loop muted className={s.video} />
        </>
      )
    },
    {
      id: 'alertas',
      title: 'Notificaciones',
      content: (
        <>
          <p><span>Acción exitosa</span></p>
          <p>Notificación que aparece cuando la acción que se realizó se efectuó exitosamente.</p>
          <video src={videoAlertSuccess} autoPlay loop muted className={s.video} />

          <p><span>Acción errónea</span></p>
          <p>Notificación que aparece cuando la acción que se realizó falló.</p>
          <video src={videoAlertError} autoPlay loop muted className={s.video} />
        </>
      )
    },
  ];

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleScrollToSection = id => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={s.homepage}>
      <h1>Bienvenido, {user.username}</h1>

      <div className={s.searchBar}>
        <input
          type="text"
          placeholder="Buscar sección..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={s.searchInput}
        />
        {searchTerm && (
          <div className={s.searchResults}>
            {filteredSections.map(section => (
              <div
                key={section.id}
                className={s.resultItem}
                onClick={() => handleScrollToSection(section.id)}
              >
                {section.title}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={s.guideContainer}>
        <h2 className={s.titleGuide}>Guía de la Aplicación</h2>
        <div className={s.grid}>
          {sections.map(section => (
            <div key={section.id} id={section.id} className={s.infoSection}>
              <h3 className={s.titleSections}>{section.title}</h3>
              {section.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;