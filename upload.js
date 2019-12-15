const fs = require('fs');
const AWS = require('aws-sdk')

const ID = 'AKIA23WCJMLEU5VQQRGX';
const SECRET = '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';

// The name of the bucket that you have created
const BUCKET_NAME = 'sga6-test';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const uploadFile = (fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);

    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: '', // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};