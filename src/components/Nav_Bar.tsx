import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ModalButtonLogin from './ModalButtonLogin';
import ModalButtonRegister from './ModalButtonRegister';
import Button from 'react-bootstrap/Button';
import { Stack } from 'react-bootstrap';
interface Props { auth: boolean; }

const Nav_Bar = ( { auth }: Props ) => {
    return (

        <Navbar expand='lg' className='container'>
            <Container>
                <Navbar.Brand href='#'>Navbar</Navbar.Brand>
            </Container>

                {!auth ? (
            <Stack direction='horizontal' className='ms-auto' gap={3}>
                    <ModalButtonRegister />
                    <ModalButtonLogin />
            </Stack>
                    ) : (
                    <Stack direction='horizontal' className='ms-auto p-2' gap={3}>
                    <Button onClick={() => {
                        localStorage.removeItem('accessToken')
                        location.reload();
                    }
                        }>Logout</Button>
            </Stack>
                    )
                }
        </Navbar>

    );
};

export default Nav_Bar;
