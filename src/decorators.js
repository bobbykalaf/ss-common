// @flow
export function obsolete(): PropertyDescriptor {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {        
        const className = target.name ? target.name : '??';
        // eslint-disable-next-line no-console
        console.warn(`WARN: ${className}::${propertyKey} is obsolete.`);
        return descriptor;
    };
}