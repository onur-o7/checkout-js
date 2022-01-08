import React from 'react';

import EndUserInfoForm from './EndUserInfoForm';

interface EndUserInfoProps  {
    title: string;
}

const EndUserInfoStep: React.FC<EndUserInfoProps> = ({title}) => {

    return (
        <>
            <h1>{ title }</h1>

            <EndUserInfoForm isOpen={ true } />
        </>
            );
};

export default EndUserInfoStep;
