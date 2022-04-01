import {NullstackClientContext} from "nullstack/types";
import {NullstackIocContainer} from "./bootstrap/internals/NullstackIocContainer.nts";

export interface Todo {
    description: string
    complete: boolean
}

export interface ApplicationClientContext extends NullstackClientContext {
    todos?: Todo[]
    ioc: NullstackIocContainer
    iocContainers: NullstackContainers
}