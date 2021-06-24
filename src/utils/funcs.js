export const getToken = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    return token
  }
  return null
}

export const genId = () => Math.random().toString(36).substr(2, 9)