export function isMetaMaskInjected() {
  return window.ethereum != null;
}

export async function connect() {
  if (isMetaMaskInjected()) {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    return true;
  }
  return false;
}

export function isAddressConnected() {
  return !!getCurrentAddress();
}

export function getCurrentAddress() {
  console.log(window.ethereum.selectedAddress);
  return window.ethereum.selectedAddress;
}
