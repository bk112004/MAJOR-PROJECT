const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
// const {listingSchema}= require("../schema.js");
// const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });


router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn,upload.single('listing[image]'),validateListing, wrapAsync(listingController.createListing))
// .post((req, res) => {
//     res.send(req.file);
// })

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));
//Index Route
// router.get("/", wrapAsync(listingController.index));

//Show Route
// router.get("/:id",wrapAsync(listingController.showListing));

//Create Route
// router.post("/", isLoggedIn , validateListing, wrapAsync(listingController.createListing
// let {title, description, image, price, country, location} = req.body;
// if(!req.body.listing){
//    throw new ExpressError(400, "Send valid data for listing");
// }
// if(!newListing.title){
//    throw new ExpressError(400, "Ttile is missing!"); 
// }
// if(!newListing.description){
//     throw new ExpressError(400, "Description is missing!"); 
// }
// if(!newListing.location){
//     throw new ExpressError(400, "Location is missing!"); 
// }
// console.log(newListing);
// ));  
//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm
));

//Update Route

// router.put("/:id", isLoggedIn ,isOwner, validateListing , wrapAsync(listingController.updateListing));

//Delete Route
// router.delete("/:id", isLoggedIn , isOwner , wrapAsync(listingController.destroyListing));

module.exports = router;