import { HTMLSource } from "react-native-render-html";

export interface Category {
  id: string
  name: string
}

export interface Post {
  id: string
  title: {
    rendered: string
  }
  status: string
  featured_media: string
  content: {
    rendered: string | HTMLSource
  }
}