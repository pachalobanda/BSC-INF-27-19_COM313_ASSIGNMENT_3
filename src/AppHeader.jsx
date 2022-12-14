
//importing mui components from mui library
import { AppBar, Toolbar, Button, Grid, IconButton } from "@mui/material";
//import search , language and account circle icon
import Search from "@mui/icons-material/Search";
import Language from "@mui/icons-material/Language";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
//import image logo
import logo from "./assets/JuiceShop_Logo.png";
//defining header component
export default function HeaderCOmponent() {
  //  const [count, setCount] = React.useState(0);

  return (
    <div>
      <AppBar position="absolute" style={{ backgroundColor: "#546e7a" }}>
        <Toolbar>
          <Button
            size="large"
            color="inherit"
            aria-label="menu"
           
          >
            <MenuIcon />
          </Button>

          <Grid component="div" sx={{ flexGrow: 1 }}>
            <Button color="primary">
              <img
                src={logo}
                alt="icon"
                style={{ width: "50px", height: "100%" }}
              />
              <span
                style={{ fontSize: "24px", color: "white", marginLeft: "5px" }}
              >
                {" "}
                OWASP Juice Shop{" "}
              </span>
            </Button>
          </Grid>
          <div className="flex-end">
            <Button color="inherit">
              <Search />
            </Button>{" "}
            <Button
              color="inherit"
              sx={{
                textTransform: "none",
              }}
              startIcon={<AccountCircle />}
            >
              Account
            </Button>{" "}
            <Button color="inherit" startIcon={<Language />}>
              EN
            </Button>
          </div>
        </Toolbar>
      </AppBar>

     
    </div>
  );
}
