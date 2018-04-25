const React = require('react')
const Uppy = require('uppy/lib/core')
const Tus = require('uppy/lib/plugins/Tus')
const { Dashboard, DashboardModal, DragDrop } = require('uppy/lib/react')

export class DragDropComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imageUploaded: false,
      imageURL: ""
    }
  }

  componentWillMount() {
    this.uppy = new Uppy({
      autoProceed: false,
      restrictions: {
        maxFileSize: 3000000,
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1,
        allowedFileTypes: ['image/*']
      }
    })
      .use(Tus, {
        endpoint: 'https://master.tus.io/files/'
      })
      .run();

    this.uppy.on('upload-success', (fileId, resp, uploadURL) => {
      this.setState({ imageUploaded: true, imageURL: uploadURL });
      this.props.imageUploadFunction(this.state.imageURL, this.state.imageUploaded);
    });

  }

  componentWillUnmount() {
    this.uppy.close()
  }

  render() {
    return (
      <div>
        <h4>You are also required to upload an image of yourself with a valid ID card. Use the uploader below to do so.</h4>
        {
          <Dashboard
            uppy={this.uppy}
            maxHeight ={300}
            note = {'Images only, 1 file, up to 3 MB'}
          />
        }
      </div>
    )
  }
}