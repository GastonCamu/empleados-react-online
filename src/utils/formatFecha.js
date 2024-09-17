export const formatFechaToDDMMYYYY = (fecha) => {
    if (!fecha) return '';
    const [year, month, day] = fecha.split('-');
    return `${day}/${month}/${year}`;
  };
  
  export const formatFechaToISO = (fecha) => {
    if (/\d{2}-\d{2}-\d{4}/.test(fecha)) {
      const [day, month, year] = fecha.split('-');
      return `${year}-${month}-${day}`;
    }
    return fecha;
  };
  