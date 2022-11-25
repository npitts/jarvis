import { useLocation } from "react-router-dom";
import '../App.css'

const Thankyou = () => {
    const { state } = useLocation();

    return (
        <div className="wrapper" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
          }}>
            Thankyou for applying for the role of {state.role}, someone will reach out to you soon!!!!
        </div>
        
    );
}

export default Thankyou;