import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Home: React.FC = () => {
    const bernabeuStadiumUrl = 'https://frontofficesports.com/wp-content/uploads/2021/12/FOS-12.10-Real-Madrid-Stadium.jpg';

    return (
        <div>
            <div>
                <h2 className="mb-4">Welcome to the Real Madrid Football Club Website</h2>

                <Card className="mb-4">
                    <Card.Header as="h3">About Real Madrid</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Real Madrid is one of the most successful and popular football clubs globally, with a rich history of achievements in domestic and international competitions.
                        </Card.Text>
                        <Card.Text>
                            The club was founded in 1902 and has since become synonymous with excellence in football.
                        </Card.Text>
                        <Button variant="primary" href="/about">Learn More</Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Header as="h3">Santiago Bernabéu Stadium</Card.Header>
                    <Card.Img variant="top" src={bernabeuStadiumUrl} alt="Santiago Bernabéu Stadium" />
                    <Card.Body>
                        <Card.Text>
                            Real Madrid plays its home matches at the iconic Santiago Bernabéu Stadium, located in Madrid, Spain.
                        </Card.Text>
                        <Card.Text>
                            Join us in the excitement and passion of Real Madrid's matches at this historic venue.
                        </Card.Text>
                        <Button variant="primary" href="/stadium">Explore the Stadium</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Home;

