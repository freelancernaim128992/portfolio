import React from 'react';

const FooterCol = ({title, itemInfo, children}) => {
    return (
        <div className="col-md-3">
            <h4>{title ? title : ''}</h4>
            <ul className="list-unstyled mt-3 list-container">
                {
                    itemInfo.map(info => <li className="lh-lg text-light">{info.name}</li>)
                }
            </ul>
            {children && children}
        </div>
    );
};

export default FooterCol;