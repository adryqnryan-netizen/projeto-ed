import home from "../home/page";

export interface Livros {
    id:number;
    capa:string;
    categoria:string[];
}
export const listalivros : Livros[] = [
    {
        id:1,
        capa:"http://books.google.com/books/content?id=o28ZAgAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api",
        categoria:["/home"]
    },
    {    
        id:2,
        capa:"http://books.google.com/books/content?id=HFlXEAAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api",
        categoria:["/home"]
        
    },
    {    
        
        id:3,
        capa:"http://books.google.com/books/content?id=-DgQCwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api",
        categoria:["/home"]
        
    },
        {    
        
        id:4,
        capa:"http://books.google.com/books/content?id=oNWCEQAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api",
        categoria:["/home"]
        
    },
]