/**
 * Module dependencies
 */
import { addAlias } from 'module-alias'
import { resolve } from 'path'

/**
 * Make aliases for run in Javascript
 */
addAlias('~', resolve('./src'))
