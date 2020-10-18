import faker from 'faker'

import { Language } from '@/domain/models/language'

export const mockLanguage = (): Language => {
  return faker.random.arrayElement(['pt_BR', 'en_US', 'es_SP'])
}
