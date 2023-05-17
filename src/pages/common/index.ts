import lodash from 'lodash'

export function makeError() {
  console.log('lodash', lodash.add(1,2))
  throw new Error('makeError')
}