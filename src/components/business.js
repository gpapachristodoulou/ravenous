import React from "react";
import styles from "../css/business.module.css";


const mockBusiness = { 
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};


function Business(){
    return (
        <div className="Business">
            <img src={mockBusiness.imageSrc} alt={mockBusiness.name}/>
            <h2>{mockBusiness.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
                    <p className={styles.Red}>{mockBusiness.address}</p>
                    <p className={styles.Blue}>{mockBusiness.city}</p>
                    <p>{mockBusiness.state} {mockBusiness.zipCode}</p>
                    </div>
                <div className="Business-reviews">
                    <h3>{mockBusiness.category}</h3>
                    <h3 className="rating">{mockBusiness.rating}</h3>
                    <p>{mockBusiness.reviewCount}</p>
                </div>
            </div>
        </div>
    );
}

export { mockBusiness };
export default Business;