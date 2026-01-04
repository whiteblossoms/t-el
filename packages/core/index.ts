import { makeInstaller } from "@t-el/utils";
import components from "./components";
import '@t-el/theme/index.css';

const installer = makeInstaller(components);

export * from "@t-el/components";
export default installer;