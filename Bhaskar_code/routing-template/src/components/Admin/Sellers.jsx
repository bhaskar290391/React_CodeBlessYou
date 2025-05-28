import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Commons/Loader";

const Sellers = () => {
  const [name, setName] = useState("");
  const [sellers, setSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    //fetchSellerByAsync();
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setSellers(res.data);
        setIsLoading(false);
      })
      .catch((errors) => {
        setIsLoading(false);
        setErrors(errors.message);
      });
  }, []);

  //   useEffect(() => {
  //     console.log("Component Mount");
  //     document.title = "Name : " + name;

  //     return () => {
  //       console.log("Component Unmount");
  //     };
  //   }, [name]);

  //   const fetchSellerByAsync = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       setSellers(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsLoading(false);
  //       setErrors(error.message);
  //     }
  //   };

  const addSellers = () => {
    const newSeller = {
      name,
      id: sellers.length + 1,
    };

    setSellers([newSeller, ...sellers]);

    axios
      .post("https://jsonplaceholder.typicode.com/users", newSeller)
      .then((res) => {
        setSellers([res.data, ...sellers]);
      })
      .catch((errors) => {
        setErrors(errors.message);
        setSellers(sellers);
      });
  };

  const updateSeller = (seller) => {
    const updatedSeller = {
      ...seller,
      name: seller.name + " Updated",
    };

    setSellers(sellers.map((s) => (s.id === seller.id ? updatedSeller : s)));
    axios
      .patch(
        `https://jsonplaceholder.typicode.com/users/${seller.id}`,
        updateSeller
      )
      .catch((errors) => {
        setErrors(errors.message);
        setSellers(sellers);
      });
  };

  const deleteSeller = (id) => {
    setSellers(sellers.filter((s) => s.id !== id));
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .catch((errors) => {
        setErrors(errors.message);
        setSellers(sellers);
      });
  };
  return (
    <>
      <h3>Admin Sellers Page</h3>

      <input type="text" onChange={(e) => setName(e.target.value)}></input>

      <button onClick={addSellers}>Add User</button>
      {errors && <em>{errors}</em>}

      {isLoading && (
        <div>
          <Loader></Loader>
        </div>
      )}

      <table>
        <tbody>
          {sellers.map((seller) => (
            <tr key={seller.id}>
              <td>{seller.name}</td>
              <td>
                <button onClick={() => updateSeller(seller)}> Update</button>
              </td>
              <td>
                <button onClick={() => deleteSeller(seller.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Sellers;
