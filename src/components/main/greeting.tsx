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
            <div style={aboutUs}>
                <h2>Allt om oss</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores unde mollitia molestiae eaque possimus ipsum voluptate, commodi quia nostrum omnis tempore magni tempora eius autem maiores delectus tenetur repe</p>
            </div>
            <div style={middleImg}>
                <img src="http://www.wholefieldsfoods.com/wp-content/uploads/2020/11/about-us-wheat.jpg" height='100%' width='100%' alt="" />
            </div>
            <div style={whatWeOffer}>
                <h2>Vad vi har</h2>
            </div>

            <div style={services}>
                <div style={oneService}>
                    <img src="http://www.wholefieldsfoods.com/wp-content/uploads/2020/11/about-us-wheat.jpg" width='50%' alt="" />
                    <div style={desciptionDiv}>
                        <p style={desciption}>hej</p>
                    </div>
                </div>
                <div style={oneService}>
                    <div style={desciptionDiv}>
                        <p style={desciption}>tjo</p>
                    </div>
                    <img src="http://www.wholefieldsfoods.com/wp-content/uploads/2020/11/about-us-wheat.jpg" height='100%' width='50%' alt="" />
                </div>
                <div style={oneService}>
                    <img src="http://www.wholefieldsfoods.com/wp-content/uploads/2020/11/about-us-wheat.jpg" height='100%' width='50%' alt="" />
                    <div style={desciptionDiv}>
                        <p style={desciption}>tjabba</p>
                    </div>
                </div>
            </div>
            <div style={middleImg}>
                <img src="https://wallpaperaccess.com/full/1154366.jpg" height='100%' width='100%' alt="" />
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

const aboutUs: CSSProperties = {
    background: 'red',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
}

const middleImg: CSSProperties = {
    height: '20rem',
}

const whatWeOffer: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'green',
    padding: '2rem',
}

const services: CSSProperties = {
    background: 'red',
    display: 'flex',
    flexDirection: 'column',
}

const oneService: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',

}
const desciptionDiv: CSSProperties = {
    background: 'pink',
    width: '50%',
    position: 'relative',
}
const desciption: CSSProperties = {
    // height: '100%',

    position: 'absolute',
    padding: '1rem',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: 'large',
}