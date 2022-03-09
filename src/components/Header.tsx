import { AppBar, Toolbar } from "@material-ui/core";

export default function Header() {
  return (
    <AppBar position="fixed" style={{ backgroundColor: "#2f3131" }}>
      <Toolbar>
        <img src="" alt="NFT-artfolio logo"></img>
      </Toolbar>
    </AppBar>
  );
}