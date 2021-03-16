module.exports.getAll = async(req,res) => {
  res.status(200).json({
    status: "priceList ok",
  });
}

module.exports.