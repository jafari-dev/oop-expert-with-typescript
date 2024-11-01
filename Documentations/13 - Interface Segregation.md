### 4. Interface Segregation (ISP)

#### Original Definition

> No code should be forced to depend on methods it does not use.

#### Simple Definition

> The ISP means that clients should not be forced to implement methods they don't use. It's like saying, "Don't make people take things they don't need."

<img src="https://user-images.githubusercontent.com/37804060/153056335-7bf6d86f-da0b-4687-89fe-9ea97e2ec40e.jpg"/>

#### Example

In the initial implementation before applying the ISP, the `VPNConnection` interface encompasses methods for various VPN protocols, including `useL2TP`, `useOpenVPN`, `useV2Ray`, and `useShadowsocks`. However, not all classes implementing this interface require all these methods. For instance, the `InternalNetwork` class only utilizes `useL2TP` and `useOpenVPN`, yet it is forced to implement all methods defined in the `VPNConnection` interface, leading to unnecessary dependencies and potential errors if methods are called inappropriately.

To address this issue, the Interface Segregation Principle suggests breaking down the monolithic interface into smaller, more focused interfaces. In the improved implementation, two interfaces are introduced: `BaseVPNConnection` and `ExtraVPNConnection`. The `BaseVPNConnection` interface contains methods common to both external and internal networks (`useL2TP` and `useOpenVPN`), while the `ExtraVPNConnection` interface includes methods specific to external networks (`useV2Ray` and `useShadowsocks`).

With this segregation, the `InternalNetwork` class now only needs to implement the methods relevant to its functionality, adhering to the principle of "clients should not be forced to depend on interfaces they do not use." This restructuring enhances code clarity, reduces unnecessary dependencies, and makes the system more maintainable and flexible. Additionally, it mitigates the risk of errors by ensuring that classes only expose the methods they actually support, promoting better encapsulation and separation of concerns.

##### ❌ Before following ISP:

[EXAMPLE-FILE-ADDRESS](/Examples/SOLID/-InterfaceSegregation.ts)

##### ✔️ After following ISP:

[EXAMPLE-FILE-ADDRESS](/Examples/SOLID/+InterfaceSegregation.ts)
