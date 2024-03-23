interface Ports {
  useUSB: () => void;
  useHDMI: () => void;
  usePS2: () => void;
  useVGA: () => void;
}

class PC implements Ports {
  useUSB() {
    console.log("USB port is ready for your PC!");
  }

  useHDMI() {
    console.log("HDMI port is ready for your PC!");
  }

  usePS2() {
    console.log("PS2 port is ready for your PC!");
  }

  useVGA() {
    console.log("VGA port is ready for your PC!");
  }
}

class Laptop implements Ports {
  useUSB() {
    console.log("USB port is ready for your Laptop!");
  }

  useHDMI() {
    console.log("HDMI port is ready for your Laptop!");
  }

  usePS2() {
    throw new Error("Laptop has not any PS2 port!");
  }

  useVGA() {
    throw new Error("Laptop has not any VGA port!");
  }
}
