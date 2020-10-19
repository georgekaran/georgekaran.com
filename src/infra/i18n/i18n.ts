import { Language } from '@/domain/models/language'
import { i18n } from '@/data/interfaces/i18n'

export class I18N implements i18n {
  message?: any

  constructor (
    public readonly language: Language,
    private readonly messages: any
  ) {
    this.message = messages[language]
  }

  t (message: string, args?: string[]): string {
    if (args) {

    }

    return this.message[message] || ''
  }
}
