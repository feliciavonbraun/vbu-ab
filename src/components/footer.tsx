import { CSSProperties } from "react";

function Footer() {
    return (
        <footer style={footer}>
            <div>
                <p>
                    ©2020 av Haby Gård.
                </p>
            </div>
        </footer>
    )
}
export default Footer;

const footer: CSSProperties = {
    background: 'blue',
    padding: '1rem',
    bottom: '0',
}

