import br from './br.json'
import en from './en.json'
import es from './es.json'

import { Dictionary } from './dictionary'

export const langs = { br, en, es } as {[key: string]: Dictionary}

export function useDict(locale?: string): Dictionary {
    if (locale) return langs[locale]
    return langs['en']
}

export default langs 