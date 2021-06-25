export const getToken = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    return token
  }
  return null
}

export const genId = () => Math.random().toString(36).substr(2, 9)
export const genColor = () =>
  '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
