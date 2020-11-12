import { Language } from '@/domain/models/language'

export type MessageFile = {
  [key in Language]: {
    [key: string]: string
  }
}
