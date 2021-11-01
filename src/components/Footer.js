import React from 'react'
import './Footer.css'
import { createFromIconfontCN, WhatsAppOutlined, YoutubeOutlined, InstagramOutlined } from '@ant-design/icons';

function Footer() {
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });
    return (
        <div className="main__footer">
            <div className="footer__components">
                <div className="footer__components__1">
                    <div className="shoes__component">
                        <div className="Shoes__list">
                            <h2>Shoes</h2>
                            <p>Home</p>
                            <p>Men</p>
                            <p>Women</p>
                            <p>Kids</p>
                            <p>Sale</p>
                        </div>
                    </div>
                    <div className="Policies__component">
                        <div className="policies__list">
                            <h2>Policies</h2>
                            <p>Terms & Condition</p>
                            <p>Returns & Exchange</p>
                            <p>Privacy Policy</p>
                            <p>Fees & Payments</p>
                            <p>Track Your Order</p>
                        </div>
                    </div>
                </div>
                <div className="follow__component">
                    <h1 className="nohover">Follow Us</h1>
                    <div className="icon__list">
                        {/* <FaFacebookF />
                        <IoLogoWhatsapp /> */}
                        <IconFont className="all__icons" type="icon-facebook" style={{ fontSize: '35px', paddingRight: '20px' }} />
                        <WhatsAppOutlined className="all__icons" style={{ fontSize: '35px', cursor: 'pointer', paddingRight: '20px' }} />
                        <InstagramOutlined className="all__icons" style={{ fontSize: '35px', cursor: 'pointer', paddingRight: '20px' }} />
                        <IconFont className="all__icons" type="icon-twitter" style={{ fontSize: '35px', cursor: 'pointer', paddingRight: '20px' }} />
                        <YoutubeOutlined className="all__icons" style={{ fontSize: '35px', cursor: 'pointer'}} />
                    </div>
                    <div className="icon__list2">
                        {/* <IconFont className="all__icons" type="icon-twitter" style={{ fontSize: '35px', cursor: 'pointer', marginRight: '20px' }} />
                        <YoutubeOutlined className="all__icons" style={{ fontSize: '35px', cursor: 'pointer' }} /> */}
                    </div>
                </div>
            </div>
            {/* <div className='footer__components'>
                <div className="logo__component">
                    <img src={deliveryLogo} />
                </div>
            </div> */}
            <div className='rights'>
                <div className="rights__text">
                    <h2>© 2021 www.shoes.com. All rights reserved.</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer
