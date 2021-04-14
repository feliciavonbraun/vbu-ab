import { CSSProperties } from "react";

function Greeting() {

    return (
        <div>
            <div style={container}>
                <img src="https://wallpaperaccess.com/full/1154366.jpg" width='100%' alt="" />
                <div style={transparentOverlay}>
                    <p style={text}>Haby Gård</p>
                </div>

            </div>

        </div>
    )
}
export default Greeting;

const container: CSSProperties = {
    position: 'relative',
}

const transparentOverlay: CSSProperties = {
    position: 'absolute',
    background: 'rgba(255, 255, 255, 0.6)',
    width: '50%',
    height: '100%',
    top: '0',
    bottom: '0',
    left: '50%',
}

const text: CSSProperties = {
    position: 'absolute',
    padding: '1rem',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: 'large',

}