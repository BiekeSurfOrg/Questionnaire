import React from 'react';
import Card from './Card';

const Home = () => {

    return (
        <div className="full-screen position-relative">
            <video autoPlay muted loop id="myVideo" className='background-video'>
                <source src="../assets/background.mp4" type="video/mp4" />
            </video>
            <div className="full-screen layout">
                <div className='tile-list'>
                    <Card text='Cyber Fraude Test' route='/questions?type=cybercrime' img={'Button1.png'} />
                    <Card text='Financiële Kennis Test' route='/questions?type=financieel' img={'Button2.png'} />
                    <Card text='Ondernemen Kennis' route='/questions?type=ondernemen' img={'Button3.png'} />
                </div>
            </div>
        </div>
    );
};

export default Home;