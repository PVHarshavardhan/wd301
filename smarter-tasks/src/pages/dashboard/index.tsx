import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const data = JSON.parse(localStorage.getItem('userData') || "{}");
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("userData")
        localStorage.removeItem("authToken")
        navigate("/signin")
    }
  return (

    <div>
        <div className="min-h-screen  items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-800">Dashboard</h1>
        
        <h2 className="text-3l font-bold text-center text-gray-800" >Name:{data.name}</h2>
        <br />
        <h2 className="text-3l font-bold text-center text-gray-800">Email:{data.email}</h2>
        
        <a href="#" id="logout-link" onClick={logout}>
        Log Out 
        </a>
        </div>
    </div>
    
  );
}

export default Dashboard;