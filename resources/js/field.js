import IndexField from './components/IndexField'
import DetailField from './components/DetailField'

Nova.booting((app, store) => {
  app.component('index-multiline-text', IndexField)
  app.component('detail-multiline-text', DetailField)
})
