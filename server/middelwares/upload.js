const Storage = require('@google-cloud/storage');
const config = {
  CLOUD_BUCKET: 'jepretgram.srohimah.com',
  PROJECT_ID: 'first-deploy-198005'
}

const storage = Storage({
  projectId: config.PROJECT_ID,
  keyFilename: 'first-deploy-8ede37e4a410.json'
});

const bucket = storage.bucket(config.CLOUD_BUCKET);

function getPublicUrl (filename) {
  return `https://storage.googleapis.com/${config.CLOUD_BUCKET}/${filename}`;
}

function sendUploadToGCS (req, res, next) {
 
  if (!req.file) {
    return next('upload mungkin gagal');
  }

  const gcsname = Date.now() + '.' + req.file.originalname.split('.').pop();
  const file = bucket.file(gcsname);
  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  });
  console.log("----",gcsname)
  stream.on('error', (err) => {
    console.log("errrr======")
    req.file.cloudStorageError = err;
    next(err); 
  });

  stream.on('finish', () => {
    console.log('streamm,,.........')
    req.file.cloudStorageObject = gcsname;
    file.makePublic().
      then(() => {
        req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
        next();
      });
  });
  stream.end(req.file.buffer);
}

module.exports = {
  sendUploadToGCS
};