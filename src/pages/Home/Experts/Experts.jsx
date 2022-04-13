import React from 'react';
import Expert1 from'../../../images/experts/expert-1.jpg'
import Expert2 from'../../../images/experts/expert-2.jpg'
import Expert3 from'../../../images/experts/expert-3.jpg'
import Expert4 from'../../../images/experts/expert-4.jpg'
import Expert5 from'../../../images/experts/expert-5.jpg'
import Expert6 from'../../../images/experts/expert-6.png'

const experts=[
    {id: 1, name: 'M.salah', img: 'Expert1'},
    {id: 2, name: 'M.Babor', img: 'Expert2'},
    {id: 3, name: 'M.Imam', img: 'Expert3'},
    {id: 4, name: 'M.Hasi Amla', img: 'Expert4'},
    {id: 5, name: 'M.Injimam', img: 'Expert5'},
    {id: 6, name: 'M.ujil', img: 'Expert6'},
]
const Experts = () => {
    return (
        <div>
            <h1 className="text-center text-primary">Our Experts</h1>
        </div>
    );
};

export default Experts;