export function hey(contestacion: string): string {
  // si la contestacion está en mayuscula
  if (contestacion.toUpperCase() == contestacion && /[A-Z]/.test(contestacion)) {
    // si finaliza en interrogacion y esta en mayuscula
    if (contestacion.endsWith('?')) {
      return `Calm down, I know what I'm doing!`
    // si esta en mayuscula pero no tiene interrogacion
    } else {
      return 'Whoa, chill out!'}
  }
  // si finaliza con ?
  if (contestacion.trim().endsWith('?')) {
    return 'Sure.'
  } 
  // si hay silencio
  if (contestacion.replace(/\s+/g, '') == '') {
    return 'Fine. Be that way!'
  }
  // cualquier otra cosa
    return 'Whatever.'
}