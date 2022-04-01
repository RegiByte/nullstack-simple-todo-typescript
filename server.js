import Nullstack from 'nullstack';
import Application from './src/Application';
import {setupApp} from "./src/bootstrap/setup/setup";
import {kIoc} from "./src/constants/ioc";

const context = Nullstack.start(Application);

context.start = async function start() {
	// https://nullstack.app/application-startup

	const {mainContainer, iocContainers} = setupApp({
		mainIoc: kIoc.SERVER
	})

	// console.log({
	// 	ioc: mainContainer,
	// 	main: kIoc.SERVER
	// })
	// console.log({
	// 	entry: 'server',
	// 	ioc: mainContainer
	// })


	context.ioc = mainContainer
	context.iocContainers = iocContainers
}

export default context;
