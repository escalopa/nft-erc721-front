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

export async function isAddressConnected() {
  return !!(await getCurrentAddress());
}

export async function getCurrentAddress() {
  return await window.ethereum.selectedAddress;
}
