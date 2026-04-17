import { myFunctions } from "./allFunctions";
import axios from "axios";

// This line will cause the other test to fail because the other lines
// rely on the actual 'axios' functions.
jest.mock("axios");

it.only("Testing the error route for the async/await", async () => {
  let url = "https://jsonplaceholder.typicode.com/users/1";

  expect.assertions(1); // needed when working with callbacks and/or promises
  // 1. force the try brock to fail
  axios.get.mockRejectedValue(new Error("Network Error"));

  // 2. Execute the function
  const data = await myFunctions.forMatchers.fetchUser();

  // 3. expect data to be
  expect(data).toBe("error");
});
