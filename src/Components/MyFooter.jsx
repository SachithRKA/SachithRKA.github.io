import React, {useState} from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function MyFooter() {
    const year = new Date().getFullYear();
    const email = "sachithRKA@gmail.com";

    return (
        <div className="my_footer">
            <div className="footer">
                <p className="year">© {year}</p>
                <a href="https://github.com/SachithRKA" className="github">GitHub</a>
                <a href="https://www.linkedin.com/in/sachith-arach-05b10326b/" className="linkedin">Linkedin</a>
                <CopyToClipboard text={email} onCopy={() => alert('Copied to clipboard')}>
                    <a className="email">Email: sachithRKA@gmail.com</a>
                </CopyToClipboard>
            </div>
        </div>
    );
}

export default MyFooter;