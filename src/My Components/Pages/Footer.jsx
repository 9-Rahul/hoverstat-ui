import React from 'react'
import '../Styles/Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-social">
                    <button className="ftr-btns">submit</button>
                    <button className="ftr-btns">about</button>
                    <button className="ftr-btns">twitter</button>
                    <button className="ftr-btns">instagram</button>
                    <button className="ftr-btns">privacy policy</button>
                </div>
                <div className="btm-ftr-text">
                    <p>Copyright © 2025 <span>Official Business</span>. All screenshots © of their respective owners.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
