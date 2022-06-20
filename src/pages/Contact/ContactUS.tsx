import { Box, Typography } from '@mui/material'

const ContactUS = () => {
  return (
    <Box sx={{background: '#eee', textAlign: "center", color: '#fab000', padding: '20px'}}>
       <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center pb-2">
                <p className="section-title px-5"><span className="px-2">Get In Touch</span></p>
                <h1 className="mb-4">Contact Us For Any Query</h1>
            </div>
            <div className="row">
                <div className="col-lg-7 mb-5">
                    <div className="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm">
                            <div className="control-group">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" required data-validation-required-message="Please enter your name" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" required data-validation-required-message="Please enter your email" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" required data-validation-required-message="Please enter a subject" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" id="message" placeholder="Message" required data-validation-required-message="Please enter your message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 mb-5">
                    <p style={{color:'#00394f'}}>Please feel free to connect with us at any point of time. We will be happy to help you.</p>
                    <div className="d-flex">
                       <h5>Address</h5>
                        <div className="pl-3 text-blue ">
                        &nbsp; &nbsp; <strong style={{color:'#FFC300'}}>Shahpur Chainpur, Uttar Pradesh 281501 India</strong>
                        </div>
                    </div>
                    <br/>
                    <div className="d-flex">
                        <h5>Phone No</h5>
                         <div className="pl-3 text-blue">
                         &nbsp; &nbsp; &nbsp;<strong style={{color:'#FFC300'}}> 7351503504</strong>
                        </div>
                    </div>
                    <br/>
                    <div className="d-flex" style={{ textAlign: 'left',width: 'maxContent'}}>
                        <h5>Opening Hours</h5>
                        <strong style={{color:'#FFC300'}}>Monday - Saturday: 08:00 AM - 03:00 PM</strong>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </Box>
  )
}

export default ContactUS
