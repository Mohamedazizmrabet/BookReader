import db from "../src/db/index";
export const doBookExist = async (title: string) => {
  try {
    const result = await db.Books.findOne({ where: { bookName: title } });
    if (result) {
      return result;
    } else return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
