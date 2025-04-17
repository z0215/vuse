import { twMerge } from 'tailwind-merge'
import { isArray, isObject } from '~/utils/typed'

type Value = string | boolean | undefined | null
type ValueMapping = Record<string, boolean | undefined | null>
type ValueArray = Array<Value | ValueMapping | ValueArray>

/**
 * @example
 * clax(
 *   'foo',
 *   false,
 *   null,
 *   undefined,
 *   { bar: true, duck: false },
 *   ['b', { c: true, d: false }]
 * ); // => 'foo bar b c'
 */
const clax = (...args: ValueArray): string => {
  const parser = (args: ValueArray): string => args.map((i) => {
    if (isArray(i)) {
      return parser(i)
    }

    if (isObject(i)) {
      return Object.keys(i).filter(key => i[key]).join(' ')
    }

    return i
  })
    .filter(value => value)
    .join(' ')

  return parser(args)
}

export const cn = (...args: ValueArray) => twMerge(clax(args))
