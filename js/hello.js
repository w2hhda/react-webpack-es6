import React from 'react';
import { Button } from 'react-bootstrap';

class Hello extends React.Component {

    render() {
        return (
            <div>
                <Button>Hello World!</Button>
                <Button>Hello World2!</Button>
            </div>
        );
    }

}

export default Hello;