import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe('Pruebas en useFetch', () => {

    test('debe de retornar la información por defecto', () => {
        
        const { result } = renderHook( () => useFetch(process.env.REACT_APP_API_URL) );

        const { data, loading, error } = result.current;
        expect( data ).toBe(null);
        expect( loading ).toBe(true);
        expect( error ).toBe(null);

    });

    test('debe de tener la info deseada, loading false, error false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetch(process.env.REACT_APP_API_URL) );
        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect( data.length ).toBe(1);
        expect( loading ).toBe( false );
        expect( error ).toBe( null );


    })

    test('debe de manejar el error', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetch(`${process.env.REACT_APP_API_URL}/xyz`) );
        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect( data ).toBe(null);
        expect( loading ).toBe( false );
        expect( error ).toBe( 'No se pudo cargar la info' );

    })
   
})
