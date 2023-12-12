export const connectToDB = async() =>{

   const connection = {}

    try {
        if(connection.isConnected) return;
        //'dashboard' is the DB name
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connection[0].readyState;
      } catch (error) {
        throw new Error(error);
      }
}