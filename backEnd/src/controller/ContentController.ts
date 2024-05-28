import db from "../db/index";
export const addConent = async (req: any, res: any) => {
  const { pageNumber, content } = req.body;
  try {
    const result = await db.Content.create({
      pageNumber,
      content,
    });
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
