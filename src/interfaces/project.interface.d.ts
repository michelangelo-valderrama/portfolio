export interface Project {
  title: string
  description: string
  stack: string[]
  date: string | Date
  link?: string
  foreground?: string
  background?: string
  img: Image
}

interface Image {
  src: string
  alt: string
  width: number
  height: number
}
