import { Container, Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">My Projects</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/calc">Calculator</Nav.Link>
                <Nav.Link href="/pokeapi">PokeAPI</Nav.Link>
                <Nav.Link href="/todolist">ToDoList</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;