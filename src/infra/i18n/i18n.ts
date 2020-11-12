import { Language } from '@/domain/models/language'
import { i18n, MessageFile } from '@/data/protocols'

export class I18N implements i18n {
  private readonly message?: any
  private readonly maskPattern = /\$([0-9])+/

  constructor (
    public readonly language: Language,
    private readonly messages: MessageFile
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

    return msg || message
  }
}
