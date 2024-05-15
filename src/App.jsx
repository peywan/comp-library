import Alert from '../src/components/Alert.jsx';
import Buttons from '../src/components/Buttons.jsx';
import { IoAlertCircle } from "react-icons/io5";
import { IoMdWarning } from "react-icons/io";

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
            <Alert color="green" icon={IoAlertCircle}>Det här är ett framgångsmeddelande!</Alert>
            <Alert color="yellow" icon={IoMdWarning}>Det här är en varning!</Alert>
            <Alert color="red" icon={IoAlertCircle}>Det här är ett felmeddelande!</Alert>
        </>
    );
}

export default App;
