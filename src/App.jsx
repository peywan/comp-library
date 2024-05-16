// mina komponenter
import Alert from '../src/components/Alert.jsx';
import Buttons from '../src/components/Buttons.jsx';
import Badge from  '../src/components/Badge.jsx';
{/*import Badge2 from '../src/components/badge2.jsx/' */}
import Card from '../src/components/Card.jsx'

// mina ikoner
import { IoAlertCircle } from "react-icons/io5";
import { IoMdWarning,  } from "react-icons/io";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillBell } from 'react-icons/ai';





function App() {
    return (
        <>
            <h1>Mina komponenter</h1>
            <h2>Buttons</h2>
            {/* Använd din Button-komponent här */}
            <Buttons size="large" color="blue" disabled={false}>Stor Blå Knapp</Buttons>
            <Buttons size="small" color="red" disabled={true}>Liten Röd Knapp</Buttons>

            <h2>Alerts</h2>
            {/* Använd Alert-komponenten och skicka olika props */}
            <Alert color="green" icon={AiFillCheckCircle}>Det här är ett framgångsmeddelande!</Alert>
            <Alert color="yellow" icon={IoMdWarning}>Det här är en varning!</Alert>
            <Alert color="red" icon={IoAlertCircle}>Det här är ett felmeddelande!</Alert>

            <h1>Mina badges</h1>
            <h3>badge:</h3>
            <Badge color="green" size="small" count={5}>Liten Badge</Badge>
            <Badge color="blue" size="medium" count={10}>Medium Badge</Badge>
            <Badge color="red" size="large"  count={15} icon={AiFillBell}>Stor Badge</Badge>

                <h1>mina cards</h1>
                <Card color={'white'}/>
        </>
    );
}

export default App;
