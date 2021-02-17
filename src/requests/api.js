import {get, post} from './http'

export const search = searchWords => get('getPerson.php', searchWords)
