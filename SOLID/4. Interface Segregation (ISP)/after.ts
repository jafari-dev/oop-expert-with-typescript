interface BaseVPNConnection {
  useL2TP: () => void;
  useOpenVPN: () => void;
}

interface ExtraVPNConnection {
  useV2Ray: () => void;
  useShadowsocks: () => void;
}

class ExternalNetwork implements BaseVPNConnection, ExtraVPNConnection {
  useL2TP() {
    console.log("L2TP VPN is ready for your external network!");
  }

  useOpenVPN() {
    console.log("OpenVPN is ready for your external network!");
  }

  useV2Ray() {
    console.log("V2Ray is ready for your external network!");
  }

  useShadowsocks() {
    console.log("Shadowsocks is ready for your external network!");
  }
}

class InternalNetwork implements BaseVPNConnection {
  useL2TP() {
    console.log("L2TP VPN is ready for your internal network!");
  }

  useOpenVPN() {
    console.log("OpenVPN is ready for your internal network!");
  }
}
