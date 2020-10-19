import { Language } from '@/domain/models/language'
import { i18n } from '@/data/interfaces/i18n'

export class I18N implements i18n {
  message?: any
  maskPattern = new RegExp(/\$([0-9])+/)

  constructor (
    public readonly language: Language,
    private readonly messages: any
  ) {
    this.message = messages[language]
  }

  t (message: string, args?: string[]): string {
    let msg = this.message[message] as string
    if (args?.length) {
      let mask
      // eslint-disable-next-line
      while (mask = this.maskPattern.exec(msg)) {
        msg = msg.replace(mask[0], args[Number(mask[1])])
      }
    }

    return msg || ''
  }
}
