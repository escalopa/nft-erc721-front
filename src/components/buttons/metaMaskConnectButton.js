import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";

import { connect } from "../../utils/metaMask";

export default function MetaMaskConnectButton() {
  const [connectDisabled, setConnectDisabled] = useState(false);

  useEffect(() => {
    const isAddress = window.ethereum.selectedAddress !== null;
    if (isAddress) {
      setConnectDisabled(true);
    } else {
      setConnectDisabled(false);
    }
  }, []);

  return (
    <Button
      variant="contained"
      disabled={connectDisabled}
      sx={{ fontWeight: "bold" }}
      onClick={() => connect()}
    >
      Connect to MetaMask
    </Button>
  );
}
