import './Ticket.scss';
import nubcclogo from './../../assets/images/nubcc_logo.png'
import QRCode from "react-qr-code";


const Ticket = () => {
    return (
        <div className='ticket-div'>

            <h2 className='pt-3 text-center cap-1'>Congratulations! Your ticket is being processed.</h2>
            <h5 className='text-center cap-2'>Take a Screen Shoot of Your Ticket Info</h5>

            <div className="ticket-box text-center">
                
                <h3>Saint Martin's Tour Bus Ticket</h3>
                <div className="ticket-info p-4 text-center">
                    <span className='d-block custom-fn'>Ticket Purchaser Name: <span className='text-custom'>Sakibur Rahman Saikat</span></span>
                    <span className='d-block custom-fn'>Seat No. <span className='text-custom'>[A1][B1][B2]</span></span>
                </div>
                <div className="barcodes text-center">
                    <h6 className='text-center'>Ticket Reference:</h6>
                    <div style={{ height: "auto", margin: "0 auto", maxWidth: 104, width: "100%" }}>
                        <QRCode
                            size={256}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value="F93TXL9"
                            viewBox={`0 0 256 256`}
                        />
                    </div>
                </div>
                <div className="logo-div p-3">
                    <img src={nubcclogo} alt="NUBCC Logo" width={150} />
                </div>
            </div>

        </div>
    )
}

export default Ticket