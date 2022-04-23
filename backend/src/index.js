const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.raw({ type: 'application/octet-stream', limit: '100mb' }))

app.post('/upload/compress', (req, res) => {
  const buffer = req.body

  const [filename, format] = req.headers['content-filename'].split('.')
  const compression = req.headers['content-compression']
  const date = new Date().toISOString()

  const filepath = `tmp/gzip/${filename}_${date}.${format}.${compression || 'gz'}`

  fs.writeFile(filepath, buffer, { flag: 'w' }, function (err) {
    if (err) throw err;
  });

  console.log(`successfully save binary compressed file into: ${filepath}`)
  return res.status(202).send()
});

const port = 9000
app.listen(port, () => console.log('Express server listening on', port))