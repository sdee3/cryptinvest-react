/* eslint-disable react/prop-types */
import React from 'react';
import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import { Dashboard } from '@uppy/react';

export default function DragDropComponent({ imageUploadFunction }) {
  const [imageURL, setImageURL] = React.useState('');
  const [imageUploaded, setImageUploaded] = React.useState('');

  const uppy = new Uppy({
    autoProceed: false,
    restrictions: {
      maxFileSize: 3000000,
      maxNumberOfFiles: 1,
      minNumberOfFiles: 1,
      allowedFileTypes: ['image/*'],
    },
  })
    .use(Tus, {
      endpoint: 'https://master.tus.io/files/',
    })
    .run();

  uppy.on('upload-success', (fileId, resp, uploadURL) => {
    setImageUploaded(true);
    setImageURL(uploadURL);

    imageUploadFunction(imageURL, imageUploaded);
  });

  return (
    <div>
      <h4>
        You are also required to upload an image of yourself with a valid ID
        card. Use the uploader below to do so.
      </h4>
      <Dashboard
        uppy={uppy}
        maxHeight={300}
        note="Images only, 1 file, up to 3 MB"
      />
    </div>
  );
}
