import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ClientAdmin() {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>  {/* Enhanced centering and padding */}
            <h1>This is the admin page</h1>
            <p>In this section of the website, the administrator of the restaurant will be able to update restaurant items with the following functions.</p>
            <div>
                <Link to="/clientManagement" style={{ textDecoration: 'none' }}>
                    <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                        Create New Menu Item
                    </button>
                </Link>
                <Link to="/MenuItem" style={{ textDecoration: 'none' }}>
                    <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                        Edit Menu Item
                    </button>
                </Link>
                <Link to="/manage-employee" style={{ textDecoration: 'none' }}>
                    <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                        Manage Employees
                    </button>
                </Link>
            </div>
            <p>The <strong>Create new Menu Item</strong> functionality will allow the administrator to create a new menu item to their pleasing. 
            <br/>It requires three paramaters (1)Title/Name, (2)Price, (3)Description of the item, and (4)An image of the item.</p>
            <br/>
            <p>The <strong>Edit Menu Item</strong> allows the administrator to edit a pre-existing menu item on the website. It allows them to edit<br/>
            any parameter for the menu items including the (1)Title/Name, (2)Price, (3)Description of the item, and (4)An image of the item.</p>
            <br/>
            <p>The <strong>Manage Employee page</strong> allows the administrator to manage information relating to both chefs & delivery workers.<br/>
            The Administrator can perform multiple actions including (1)Pay Cut, (2)Pay Increase, (3)Promote, (4)Fire. <br/>
            </p>
        </div>
    );
}

export default ClientAdmin;
