import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import solar from './solar'
import counts from './counts'
import pumps from './pumps'
import klima from './klima'
import all from './all'
import promo from './promo'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([solar, counts, pumps, klima, all, promo]),
})
