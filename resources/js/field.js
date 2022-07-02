import IndexField from './components/IndexField'
import DetailField from './components/DetailField'

Nova.booting((app, store) => {
  app.component('index-multi-line-text', IndexField)
  app.component('detail-multi-line-text', DetailField)
})
