import Navbar from "../components/Navbar";
import Todo from "../components/Todo";

const Home = () => {
  const name = localStorage.getItem("Username");
  return (
    <div>
      <Navbar />

      <h4
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        Hoşgeldin, {name}
      </h4>
      <Todo />
    </div>
  );
};

export default Home;
