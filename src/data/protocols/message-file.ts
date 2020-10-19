import { Language } from '@/domain/models/language'

export type MessageFile = {
  [Language.pt_BR]: {
    [key: string]: string
  },
  [Language.en_US]: {
    [key: string]: string
  },
  [Language.es_ES]: {
    [key: string]: string
  }
}
