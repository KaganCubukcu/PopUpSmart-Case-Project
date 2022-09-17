import { Container } from "@mui/system";
import { toggleTheme } from "./redux/theme/themeSlice";
import { useSelector, useDispatch } from "react-redux";
import { darkTheme, lightTheme } from "./style/Theme";
import { CssBaseline, Switch, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import Login from "./pages/Login";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const theme = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container>
        <Switch
          checked={theme.darkTheme}
          onChange={() => dispatch(toggleTheme())}
          icon={<WbSunnyOutlinedIcon />}
          checkedIcon={<ModeNightOutlinedIcon />}
        />
        <Router>
          <Routes>
            <Route path="/" element={<Login />}></Route>

            <Route path="/todos" element={<Home />}></Route>
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
};

export default App;
