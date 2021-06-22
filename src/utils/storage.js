class Storage {
  get(key, defaultValue = null) {
    let value = localStorage.getItem(key) || defaultValue

    if (value) {
      try {
        value = JSON.parse(value)
      } catch (error) {
        value = defaultValue
      }
    }

    return value
  }

  has(key) {
    return this.get(key) !== null
  }

  set(key, value) {
    value = JSON.stringify(value)

    localStorage.setItem(key, value)
  }

  remove(key) {
    localStorage.removeItem(key)
  }

  clear() {
    localStorage.clear()
  }

  pull(key, defaultValue) {
    const value = this.get(key, defaultValue)

    this.remove(key)

    return value
  }
}

const LocalStorage = new Storage()

export default LocalStorage
