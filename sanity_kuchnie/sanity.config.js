import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'kuchnie',
  projectId: '3go1z0b0',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
