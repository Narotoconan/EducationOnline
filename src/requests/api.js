import {get, post} from './http'

export const search = w => get('getPerson.php', w)
