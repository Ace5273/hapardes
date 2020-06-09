import { LocaleMessageObject } from 'vue-i18n'

export default interface ILang extends LocaleMessageObject {
	people: string
	objectives: string
	community: string

	Home: {
		peopleDescription: string
		objectivesDescription: string
		communityDescription: string
	}
}
