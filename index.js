import aggregateJson from './json/aggregate.json' assert { type: "json" }
import localStringsEnJson from './json/LocaleStringsEn.json' assert { type: "json" }
import monstatsJson from './json/monstats.json' assert { type: "json" }
import superUniquesJson from './json/SuperUniques.json' assert { type: "json" }
import weaponsJson from './json/weapons.json' assert { type: "json" }

export const localStringsEn = localStringsEnJson
export const monstats = monstatsJson
export const superUniques = superUniquesJson
export const weapons = weaponsJson

export default {
    aggregateJson
}
