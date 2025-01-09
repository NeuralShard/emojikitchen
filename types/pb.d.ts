declare module 'vite-plugin-raw'

declare module '*.pb' {
  const value: ArrayBuffer
  export default value
}

declare module '*.proto' {
  const value: string
  export default value
}
