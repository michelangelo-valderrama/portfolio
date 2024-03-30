export interface Project {
  title: string
  description: string
  type: "web"
  stack: string[]
  date: string | Date
  link?: string
  commentary?: string
  img?: Image
}

interface Image {
  src: string
  alt: string
  width: number
  height: number
}
