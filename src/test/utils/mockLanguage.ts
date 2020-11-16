import faker from 'faker'

import { Language } from '@/domain/models/language'

export const mockLanguage = (): Language => {
  return faker.random.arrayElement([Language.pt, Language.en, Language.en])
}
