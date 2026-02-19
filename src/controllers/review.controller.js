const Review = require('../models/review.model');


exports.createReview = async (req, res) => {
    const {name, rating, comment} = req.body;
    const review = await Review.create({name, rating, comment});
    res.status(201).json(review);
};


exports.getReviews = async (req, res) => {
    const review = await Review.find();
    res.status(200).json(review);
};  

exports.getReviewById = async (req, res) => {
    const id = req.params.id;
    const review = await Review.findById(id);
    if(!review) return res.status(404).json({message: "Review not found"});
    res.status(200).json(review);
};


exports.updateReviewById = async (req, res) => {
    const id = req.params.id;
    const {name, rating, comment} = req.body;
    const review = await Review.findByIdAndUpdate(
        id,
        {name, rating, comment},
        {new: true}
    );
    if(!review) return res.status(404).json({message: "Review not found"});
    res.status(200).json(review);
};


exports.deleteReviewById = async (req, res) => {
    const id = req.params.id;
    const review = await Review.findByIdAndDelete(id);
    if(!review) return res.status(404).json({message: "Review not found"});
    res.status(200).json(review);
};






