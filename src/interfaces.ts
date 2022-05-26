export interface Colaborador {
    id: string;
    nombre: string;
}

export interface Orden {
    id: string;
    idColaborador: string;
    nombreColaborador: string;
    nombreCliente: Colaborador;
    orden: ordenDetails[];
    estado: boolean;
}

interface ordenDetails {
    id: string;
    name: string;
    descripcion: string
}