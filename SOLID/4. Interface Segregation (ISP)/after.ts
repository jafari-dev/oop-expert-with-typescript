interface CommonPorts {
  useUSB: () => void;
  useLAN: () => void;
}

interface ExtraPorts {
  usePS2: () => void;
  useVGA: () => void;
}

class PC implements CommonPorts, ExtraPorts {
  useUSB() {
    console.log("USB port is ready for your PC!");
  };

  useLAN() {
    console.log("LAN port is ready for your PC!");
  };

  usePS2() {
    console.log("PS2 port is ready for your PC!");
  };

  useVGA() {
    console.log("VGA port is ready for your PC!");
  };
}

class Laptop implements CommonPorts {
  useUSB() {
    console.log("USB port is ready for your Laptop!");
  };

  useLAN() {
    console.log("LAN port is ready for your Laptop!");
  };
}
