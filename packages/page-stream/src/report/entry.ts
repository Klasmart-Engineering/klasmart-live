import { record } from 'rrweb'
import { ReportStream } from './report-stream'

const stream = new ReportStream()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handler = record({
  emit: (e, c) => stream.event(e, c)
})