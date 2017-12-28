// @flow
export function alterDescriptor(descriptor: PropertyDescriptor, isenumerable?: boolean, isconfigurable?: boolean, isValue?: Function): PropertyDescriptor {
    var value = isValue || descriptor.value;
    var enumerable = isenumerable || descriptor.enumerable
    var configurable = isconfigurable || descriptor.configurable
    return ({ ...descriptor, enumerable, configurable , value });
}
export function obsolete(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor => {        
        const className = target.name ? target.name : '??';
        // eslint-disable-next-line no-console
        console.warn(`WARN: ${className}::${propertyKey} is obsolete.`);
        return descriptor;
    };
}
export function enumerable(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
        return alterDescriptor(descriptor, true);
    };
}
export function nonEnumerable(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
        return alterDescriptor(descriptor, false);
    };
}
export function freeze(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
        return alterDescriptor(descriptor, undefined, false);
    };
}
export function virtual(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
        return alterDescriptor(descriptor, undefined, true);
    };
}
export function override():  (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor {
    return  (target: any, propertyKey: string, descriptor: PropertyDescriptor) => never =>{
        throw new Error(`Method: ${propertyKey} must be overridden`);
    }
}
 export function extend(extendBy: Function): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor {
     return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
         return alterDescriptor(descriptor, undefined, undefined, extendBy);
     }
 }