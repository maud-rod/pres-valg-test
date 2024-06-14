export default async function handler(req, res) {
    const {
      query: { name }
    } = req;

    console.log("hi")
  
    try {
      if (!name) {
        throw new Error();
      }
      res.status(200).json({ message: 'A ok!', data: `Hello ${name} from the server` });
    } catch (error) {
      console.log("what")
      res.status(500).json(error);
    }
  }