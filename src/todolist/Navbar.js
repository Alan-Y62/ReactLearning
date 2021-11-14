import { Container, Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">My Apps</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="#">PLACEHOLDER</Nav.Link>
                <Nav.Link href="#">PLACEHOLDER</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;