import Nullstack from 'nullstack';
import Application from './src/Application';
import 'reflect-metadata'
import {Container} from 'inversify'
import {setupApp} from "./src/bootstrap/setup/setup.nts";
import {kIoc} from "./src/constants/ioc";

const context = Nullstack.start(Application);

context.start = async function start() {
	// https://nullstack.app/application-startup

	const {mainContainer, iocContainers} = setupApp({
		mainIoc: kIoc.CLIENT
	})

	// console.log({
	// 	ioc: mainContainer,
	// 	main: kIoc.CLIENT
	// })

	context.ioc = mainContainer
	context.iocContainers = iocContainers
}

export default context;
