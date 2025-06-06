import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard: React.FC = () => {
    { }
    { }
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <div className="col-12 p-3">
                    <div className="d-flex justify-content-between">
                        <h3>Catálogo de Recetas</h3>
                        <h5>PASTA LAB</h5>
                    </div>
                </div>
            </div>
        </nav>
            <main className='container'>
                <Outlet />
            </main>
            <footer className="col-12 bg-white">
                <div className='card card-body shadow-none'>
                    <h3 className="text-center">Yohalmo Alexander Vasquez Garcia - VG20I04001</h3>
                </div>
            </footer>
        </div>
    )
}

export default Dashboard;