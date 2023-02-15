import React, { useState } from "react";
import "./App.css";
import { Button, Stack, TextField, Typography } from "@mui/material";

function App() {
  const [newItem, setNewItem] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItems = e.target.item.value;
    setNewItem([...newItem, newItems]);
    e.target.reset();
  };

  const removeItem = (item) => {
    const newItems = newItem.filter((items) => items !== item);
    setNewItem(newItems);
  };

  return (
    <div className="App">
      <div>
        <h1>SHOPPING LIST</h1>
        <div>
          <Stack marginBottom={8}>
            <Typography variant="h4" color="brown">
              Item List
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <form onSubmit={handleSubmit}>
              <TextField type="text" name="item" label="add new item" />
              <Button type="submit" variant="outlined">
                add
              </Button>
            </form>
          </Stack>
          <Stack>
            <ul>
              {newItem.map((item, index) => (
                <Item item={item} key={item + index} removeItem={removeItem} />
              ))}
            </ul>
          </Stack>
        </div>
      </div>
    </div>
  );
}
function Item(props) {
  return (
    <Stack display="flex">
      <Typography variant="h5" color="brown">
        {props.item}
      </Typography>
      <Button variant="text" onClick={() => props.removeItem(props.item)}>
        remove
      </Button>
    </Stack>
  );
}

export default App;
