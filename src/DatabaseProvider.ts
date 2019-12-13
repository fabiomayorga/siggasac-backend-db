import { Connection, createConnection, getConnectionManager } from 'typeorm';

/**
 *  Clase Singleton que obtiene y devuelve una conexión de una base de datos especificada por su nombre
 * por medio de su metodo estático getConnection, que permite establecer la conexión que se desee.
 */
export class DatabaseProvider {
    private static connection: Connection;

    /**
     * Devuelve la conexión de una base de datos según el nombre de la misma.
     *
     * @param nameConnection Nombre de la conexión (se configura en el archivo ormconfig.js).
     */
    public static async getConnection(
        nameConnection: string = 'default'
    ): Promise<Connection> {
        try {
            const connectionManager = getConnectionManager();

            if (connectionManager.has(nameConnection)) {
                return connectionManager.get(nameConnection);
            } else {
                return await createConnection(nameConnection);
            }
        } catch (error) {
            throw error;
        }
    }
}
