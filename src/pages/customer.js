import React,{useRef} from 'react';
//import { Input,Button,Image} from 'semantic-ui-react';
//import qrcode from 'qrcode';
import {QrReader} from 'react-qr-reader';

class Qrcode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileResult: '',
            webcamResult: ''
        };
        this.qrRef = React.createRef();
    }

    openDialog = () => {
        this.qrRef.current.openImageDialog();
    };

    fileError = error => {
        if (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <>
                <div>
                    <h1>QR reader</h1>
                    {/* allow us to get QR code from pc and scan it*/}
                    <button onClick={this.openDialog}>Open QR code</button>
                </div>
                <div style={{ background: 'aqua', width: 100, height: 100 }}>
                    <QrReader
                        ref={this.qrRef}
                        delay={300}
                        onError={this.fileError} // Corrected
                        onScan={result => this.setState({ fileResult: result })}
                        legacyMode={true}
                    />
                    <h5>Result : {this.state.fileResult}</h5>
                </div>

                <div style={{ width: 80, height: 60, marginLeft: 400 }}>
                    {/* Scan QR code by webcam */}
                    <QrReader
                        delay={300}
                        onError={this.fileError} // Corrected
                        onScan={result => this.setState({ webcamResult: result })}
                        facingMode={"user"}
                    />
                    <h5>Webcam result : {this.state.webcamResult}</h5>
                </div>
            </>
        );
    }
}

export default Qrcode;