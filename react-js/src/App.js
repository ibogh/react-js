import "./App.css";
import { Navbar, Nav, Col, Form, Button, FormControl } from "react-bootstrap";

function App() {
  return (
    <section>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <h1>Sign Up Today</h1>
      <Form.Group class="Form">
        <Form.Row>
          <Form.Label class="text" column="lg" lg={2}>
            Full Name
          </Form.Label>
          <Col>
            <Form.Control size="lg" type="text" placeholder="Name Here" />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Label class="text" column="lg" lg={2}>
            E-Mail
          </Form.Label>
          <Col>
            <Form.Control size="lg" type="text" placeholder="???@???.??" />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Label class="text" column="lg" lg={2}>
            Phone Number
          </Form.Label>
          <Col>
            <Form.Control size="lg" type="text" placeholder="00000000" />
          </Col>
        </Form.Row>

        <Col xs="auto" class="bttn">
          <Button type="submit" className="mb-2">
            Sign Up
          </Button>
        </Col>
      </Form.Group>
    </section>
  );
}

export default App;
