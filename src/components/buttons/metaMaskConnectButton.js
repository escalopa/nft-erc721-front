import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";

import { connect, isAddressConnected } from "../../utils/metaMask";

export default function MetaMaskConnectButton() {
  const [connectDisabled, setConnectDisabled] = useState(false);

  useEffect(() => {
    if (isAddressConnected()) {
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
