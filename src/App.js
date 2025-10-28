import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [120, 200, 150, 170, 250],
        borderColor: "blue",
        backgroundColor: "lightblue",
      },
    ],
  };

  return (
    <Container fluid className="p-4">
      <h1 className="mb-4">Dashboard_sample_Testing_UPDATED_MANI</h1>

      {/* Stats */}
      <Row className="mb-4">
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Users</Card.Title>
              <Card.Text>1,234</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Revenue</Card.Title>
              <Card.Text>$12,345</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Orders</Card.Title>
              <Card.Text>567</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Chart */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Sales Over Time</Card.Title>
              <Line data={data} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Table */}
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Recent Orders</Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>$120</td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jane Smith</td>
                    <td>$200</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Bob Johnson</td>
                    <td>$150</td>
                    <td>Cancelled</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;



