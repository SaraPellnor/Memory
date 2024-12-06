import { useState, useEffect } from "react";

const Auth = () => {
  const [users, setUsers] = useState([]); // För lagring av användare från localStorage
  const [selectedUser, setSelectedUser] = useState(""); // För att lagra vald användare
  const [newUser, setNewUser] = useState(""); // För att lagra ny användare

  // Hämta användare från localStorage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // Lägg till användare i localStorage
  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUser.trim()) {
      alert("User name cannot be empty");
      return;
    }

    const findUser = users.map((user) => user.name == newUser);

    if (findUser.length > 1) {
      alert("User already exists!");
      return;
    }

    const updatedUsers = [...users, { name: newUser, levle: 1, flips: 0 }];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setNewUser(""); // Rensa inputfält
  };

  // Hantera formens submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Förhindra sidladdning
    alert(`Form submitted for user: ${selectedUser}`);
    localStorage.setItem("active user", selectedUser)
  };

  return (
    <div className="w-full h-full p-10">
      {/* Välj användare */}
      <form
        className="flex flex-col justify-center items-center mb-10"
        onSubmit={handleSubmit}
      >
        <label className="mb-2" htmlFor="users">
          Select a user:
        </label>
        <select
          className="p-3 mb-4 border border-gray-300 rounded"
          id="users"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="">Choose a user</option>
          {users.map((user, index) => (
            <option key={index} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
        <button type="submit" disabled={!selectedUser}>
          Submit
        </button>
      </form>

      {/* Lägg till ny användare */}
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleAddUser}
      >
        <label className="mb-2" htmlFor="new-user">
          Add a new user:
        </label>
        <input
          className="p-3 mb-4 border border-gray-300 rounded"
          id="new-user"
          type="text"
          placeholder="Enter new user name"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button type="submit" disabled={!newUser.trim()}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default Auth;
