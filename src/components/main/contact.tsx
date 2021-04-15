import { CSSProperties } from "@material-ui/styles";
import { Button, TextField } from '@material-ui/core';

function Contact() {
    return (
        <div>

            <div style={container}>
                <div style={contactUs}>
                    <h2>Kontakta oss</h2>
                    <p>Haby Gård</p>
                    <p>51163 Haby</p>
                    <p>F</p>
                </div>
                <form action="" style={form}>
                    <TextField style={input} type='text' placeholder="Namn" required />
                    <TextField style={input} type='email' placeholder="Email" required />
                    <TextField style={input} type='number' placeholder="Telefonnummer" required />
                    <TextField style={input} type='text' placeholder="Ämne" required />
                    <TextField style={input} type='textarea' rows='3' placeholder="Meddelande" required />
                    <textarea placeholder='Meddelande' />
                    <Button style={button} type='submit' >Skicka</Button>
                </form>
            </div>
            <div style={middleImg}>
                <img src="https://wallpaperaccess.com/full/1154366.jpg" height='100%' width='100%' alt="" />
            </div>
        </div>
    )
}
export default Contact;

const container: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '1rem',
}

const contactUs: CSSProperties = {
    padding: '1rem',
    textAlign: 'center',
}

const form: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    minWidth: '30%',

}

const input: CSSProperties = {
    padding: '.5rem',
}

const button: CSSProperties = {
    padding: '1rem',
}

const middleImg: CSSProperties = {
    height: '20rem',
}