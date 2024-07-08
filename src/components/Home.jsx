

import { Link } from 'react-router-dom';

import { useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const { accounts } = useMsal();
    

    return (
        <div className="home-container">
            <h2> Welcome {accounts[0].name} </h2>
            <div className="home-content">
              
            </div>
           
        </div>
    );
}

export default Home;