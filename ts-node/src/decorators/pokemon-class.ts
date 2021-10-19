

function printToConsole( constructor: Function) {
    console.log(constructor);
}

const printToConsoleConditional = ( print: boolean = true ): Function => {
    if ( print ) {
        return printToConsole;
    } else {
        return () => {}
    }
}

// DECORADOR QUE BLOQUEA UN PROTOTIPO APRA QUE NO SE LE AGREGUEN COSAS NUEVAS
const blockPrototype = function(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function CheckValidPokenId() {
    // propertyKey: es el nombre del método decorado
    // target: el objeto al que pertenece
    // descriptor: permite configurar si solo lo quieres usar como escritura o lectura
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        // console.log([{ target, propertyKey, descriptor }]);
        // modifica la funcionalidad del método
        // descriptor.value = () => console.log('Hola mundo');

        const originalMethod = descriptor.value;

        descriptor.value = ( id: number ) => {
            if( id < 1 || id > 100 ) {
                return console.error(`El id del pokemon debe estar entre 1 y 100`);
            } else {
                return originalMethod(id);
            }
        }
    }
}

function readOnly( isWriteable: boolean = true ): Function {
    return function(target: any, propertyKey: string) {
        // console.log([{ target, propertyKey }]);

        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this);
                return `Daca code`;
            },
            set(this, val) {
                console.log(this, val);
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWriteable,
                    enumerable: false
                })
            }
        }
        TypeScript: Tu completa guía y manual de mano (Edición 2021)
        return descriptor;
    }
}


@blockPrototype
@printToConsoleConditional( false )
export class Pokemon {

    @readOnly( false )
    private publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ) { }


    // decoradores en los métodos
    @CheckValidPokenId()
    savePokenToDB( id: number ) {
        console.log(`Pokemon guardado en la base de datos ${id}`);
    }
}