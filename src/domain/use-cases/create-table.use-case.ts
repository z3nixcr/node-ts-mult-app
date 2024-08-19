
export interface CreateTableUseCase {
    execute: (option: CreateTableOptions) => string
}

export interface CreateTableOptions {
    base: number,
    limit?: number
}

export class CreateTable implements CreateTableUseCase {

    constructor(
        /**
         * DI - Dependency Injection
         */
    ){}

    execute({ base, limit = 10 }: CreateTableOptions){
        let outputMessage = ''
        
        for (let i = 1; i <= limit; i++) {
          outputMessage += `${base} X ${i}   = ${
            base * i
          }\n`;
        }
        
        return outputMessage
    }

}