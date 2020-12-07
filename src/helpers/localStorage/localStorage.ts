const storage = {
  get: (key: string): null | string => {
    const rawData: string | null = localStorage.getItem(key)

    if (!rawData) return null

    try {
      return JSON.parse(rawData)
    } catch (error) {
      return rawData
    }
  },
  set: <T>(key: string, data: T): void => {
    if (!data) return

    const dataHandled = typeof data !== 'string' ? JSON.stringify(data) : data

    localStorage.setItem(key, dataHandled)
  },
}

export default storage
