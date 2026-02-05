export function replaceParenthesis(text: string, className?: string) {
  const regex = /\((.*?)\)/g
  const textoFormateado = text.replace(regex, (_match, contenido) => {
    return `<span class="${className}">(${contenido})</span>`
  })

  return textoFormateado
}
