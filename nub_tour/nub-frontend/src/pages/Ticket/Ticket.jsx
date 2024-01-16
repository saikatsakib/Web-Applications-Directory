import './Ticket.scss';
import nubcclogo from './../../assets/images/nubcc_logo.png'
import QRCode from "react-qr-code";
import { motion } from 'framer-motion';


const Ticket = ({ name, seat, reference }) => {
    return (
        <div className='ticket-div'>

            <motion.h2 
            initial={{ opacity: 0, x: -100, y:0}}
            animate={{ opacity: 1, x: 0, y:0 }}
            exit={{ opacity: 1, x: 0, y:0 }}
            transition={{ duration: 0.5 }}
            className='pt-3 text-center cap-1'>Congratulations! Your ticket is being processed.</motion.h2>
            <motion.h5 
            initial={{ opacity: 0, x: 100, y:0}}
            animate={{ opacity: 1, x: 0, y:0 }}
            exit={{ opacity: 1, x: 0, y:0 }}
            transition={{ duration: 0.5 }}
            className='text-center cap-2'>Take a Screen Shoot of Your Ticket Info</motion.h5>


            <motion.div
                initial={{ opacity: 0, x: 0, y:40}}
                animate={{ opacity: 1, x: 0, y:0 }}
                exit={{ opacity: 1, x: 0, y:0 }}
                transition={{ duration: 0.5 }}
                className="ticket-box text-center"
            >

                <h3>Saint Martin's Tour Bus Ticket</h3>
                <div className="ticket-info p-4 text-center">
                    <span className='d-block custom-fn'>Ticket Purchaser Name: <span className='text-custom'>{name}</span></span>
                    <span className='d-block custom-fn'>Seat No. <span className='text-custom'>

                        {JSON.stringify(seat)}

                    </span></span>
                </div>
                <div className="barcodes text-center">
                    <h6 className='text-center'>Ticket Reference:</h6>
                    <div style={{ height: "auto", margin: "0 auto", maxWidth: 104, width: "100%" }}>
                        <QRCode
                            size={256}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={reference}
                            viewBox={`0 0 256 256`}
                        />
                    </div>
                </div>
                <div className="logo-div p-3">
                    <img src={nubcclogo} alt="NUBCC Logo" width={150} />
                </div>
        </motion.div>


        <center className="py-2 d-block">
        
        <span className="d-block text-dark c">Developed By</span>
        <span className="d-block text-primary c">Sakibur Rahman Saikat & Ebrahim Khalil Roni</span>
        <span className="d-block text-dark c">&copy;copyright nubcc_offficial 2024. All rights reserved.</span>
      </center>

        </div >
    )
}

export default Ticket