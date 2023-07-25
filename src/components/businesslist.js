import React from "react";
import  Business from "./business";
import { mockBusiness } from "./business";

function BusinessList() {
    const businesses = [mockBusiness, mockBusiness, mockBusiness, mockBusiness, mockBusiness, mockBusiness];
    return (
        <div className="BusinessList">
            {businesses.map((business, index) => <Business key={`business-${index}`} business={business} />)}
        </div>
    );
}


export default BusinessList;