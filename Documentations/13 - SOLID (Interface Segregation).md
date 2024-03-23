### 4. Interface Segregation (ISP)

> No code should be forced to depend on methods it does not use.

<img src="https://user-images.githubusercontent.com/37804060/153056335-7bf6d86f-da0b-4687-89fe-9ea97e2ec40e.jpg"/>

:x: Before following ISP:

```typescript
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
```

:heavy_check_mark: After following ISP:

```typescript
interface CommonPorts {
  useUSB: () => void;
  useHDMI: () => void;
}

interface ExtraPorts {
  usePS2: () => void;
  useVGA: () => void;
}

class PC implements CommonPorts, ExtraPorts {
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

class Laptop implements CommonPorts {
  useUSB() {
    console.log("USB port is ready for your Laptop!");
  }

  useHDMI() {
    console.log("HDMI port is ready for your Laptop!");
  }
}
```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)
