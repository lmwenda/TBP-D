import React from 'react'
import { Alert } from 'react-bootstrap';

interface IMessage{
    variant: string,
    children: React.ReactChildren | React.ReactChild | null
}

export const Message: React.FC<IMessage> = ({ variant, children }): JSX.Element => {
    return <Alert variant={variant} style={{ width: '70%' }}>{children}</Alert>
}
