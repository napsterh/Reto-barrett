export const initialState = {
    usuario : {
        nombre : "",
        apellido : "",
        email : "",
        telefono : "",
        id : "",
        foto : ""
    },
    auth : false
}

const sesionReducer = (state = initialState, action) => {
switch(action.type){
    case "INICIAR_SESION":
        return {
            ...state,
            usuario : action.sesion,
            auth : action.auth
        };
    case "CAMBIAR_SESION":
        return {
            ...state,
            usuario : action.nuevoUsuario,
            auth : action.auth
        };
    case "SALIR_SESION":
        return {
            ...state,
            usuario : action.nuevoUsuario,
            auth : action.auth
        };
    default:
        return state;
}
};


export default sesionReducer;
