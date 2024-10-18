// Home.jsx
import React from 'react';

import Card from '../../components/card/Card';
import Appointment from '../appointment/Appointment';
import CardAppointment from '../../components/cardApointment/CardAppoinitment';
import ServiceCard from '../../components/servicard/ServiceCard';

export default function Home() {
    return (
        <div>
            <h1></h1>
          
            <Card/>
            <ServiceCard/>
            
        </div>
    );
}
