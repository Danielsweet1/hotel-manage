import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <CardGroup>
        <Card className="m-4">
          <Card.Img
            variant="top"
            src="https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
          />
          <Card.Body>
            <Card.Title>Single Room</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><Link to='/book/single'><button className="bg-primary text-white py-1 rounded px-3">Book</button></Link></small>
          </Card.Footer>
        </Card>
        <Card className="m-4">
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBiZWRyb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80s"
          />
          <Card.Body>
            <Card.Title>Couple Room</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><Link to='/book/couple'><button className="bg-primary text-white py-1 rounded px-3">Book</button></Link></small>
          </Card.Footer>
        </Card>
        <Card className="m-4">
          <Card.Img variant="top" src="https://media.istockphoto.com/photos/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv-picture-id1066999762?k=20&m=1066999762&s=612x612&w=0&h=BitPXyhBFZQHMfpC9ikX_DReVK6Rd28hH9pRoZW8YAs=" />
          <Card.Body>
            <Card.Title>Family Room</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><Link to='/book/family'><button className="bg-primary text-white py-1 rounded px-3">Book</button></Link></small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Home;
