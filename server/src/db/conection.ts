import mongoose from 'mongoose';

export async function connectDB(uri: string): Promise<typeof mongoose> {
    try {
        const connection = await mongoose.connect(uri, { dbName: "ProA" });
        console.log('Conexión exitosa a la base de datos');
        return connection;
    } catch (err) {
        console.error('Error al conectar con la base de datos:', (err as Error).message);
        process.exit(1); // Terminar la aplicación si la conexión falla
    }
}