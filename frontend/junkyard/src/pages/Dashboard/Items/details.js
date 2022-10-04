import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Container, Grid, Typography, Button, Link } from '@mui/material/';


const Item = () => {
  const { id } = useParams()
  const [item, setItem] = useState({});

  const fetchItems = async () => {
    return await fetch(`http://localhost:8080/api/items/${id}`, {
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(resp => setItem(resp)) // TO BE REMOVED
      .catch(error => console.log(error)
      )
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Typography>
            {item.name}
            <br />
            {item.description}
          </Typography>
        </Grid>

        <Link href={`/dashboard/edit-item/${id}`} underline="none">
          <Button variant="contained" pb={2}>Edit Item</Button>
        </Link>
      </Container>
    </>
  )
}
export default Item;