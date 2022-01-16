import React from 'react';

const PageHeader = (props) => (
    <div className="row">
        <div className="col-md-12 page-header">
            {props.pretitle.length > 0 &&
                <div className="page-pretitle">{props.pretitle}</div>
            }
            {props.title.length > 0 && 
                <h2 className="page-title">{props.title}</h2>
            }
        </div>
    </div>
);

export default PageHeader;