// agecheak

export const ageCheck = (req, res, next) => {
  console.log("Agecheck middleware");

  if (req.body.age > 21) {
    next();
  } else {
    res.status(400).json({ message: "Your age is not allowed" });
  }
};
